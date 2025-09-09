
'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <div className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center" style={{backgroundColor: '#40E0D0'}}>
          <i className="ri-error-warning-line text-white text-4xl"></i>
        </div>
        
        <h1 className="text-6xl font-bold mb-4" style={{color: '#042b5e'}}>404</h1>
        <h2 className="text-2xl font-semibold mb-4" style={{color: '#042b5e'}}>
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8 max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <Link 
          href="/"
          className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          style={{backgroundColor: '#40E0D0'}}
        >
          <i className="ri-home-line"></i>
          <span>Go Home</span>
        </Link>
      </div>
    </div>
  );
}
