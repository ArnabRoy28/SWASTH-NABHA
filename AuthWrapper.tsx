'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function AuthWrapper({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const checkAuth = () => {
      const authStatus = localStorage.getItem('isAuthenticated');
      const hasVisitedWelcome = localStorage.getItem('hasVisitedWelcome');
      const isAuth = authStatus === 'true';
      
      setIsAuthenticated(isAuth);
      setIsLoading(false);

      // Authentication flow logic
      if (isAuth) {
        // User is authenticated - always go to home page
        if (pathname === '/login' || pathname === '/welcome') {
          router.push('/');
        }
      } else {
        // User is not authenticated
        if (pathname === '/welcome' || pathname === '/login') {
          // Allow access to welcome and login pages
          return;
        } else {
          // For first-time visitors, show welcome page
          // For returning visitors who haven't completed auth, show login
          if (!hasVisitedWelcome) {
            router.push('/welcome');
          } else {
            router.push('/login');
          }
        }
      }
    };

    checkAuth();
  }, [pathname, router]);

  // Mark welcome page as visited when accessing it
  useEffect(() => {
    if (pathname === '/welcome') {
      localStorage.setItem('hasVisitedWelcome', 'true');
    }
  }, [pathname]);

  // Show loading while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center animate-pulse" style={{backgroundColor: '#40E0D0'}}>
            <i className="ri-leaf-line text-white text-xl"></i>
          </div>
          <div className="w-6 h-6 border-2 border-current border-t-transparent rounded-full animate-spin mx-auto" style={{color: '#40E0D0'}}></div>
        </div>
      </div>
    );
  }

  // Always render welcome and login pages without restrictions
  if (pathname === '/welcome' || pathname === '/login') {
    return <>{children}</>;
  }

  // For all other pages, only render if authenticated
  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
}