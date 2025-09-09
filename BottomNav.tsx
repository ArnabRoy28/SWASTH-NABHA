
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../lib/LanguageContext';

export default function BottomNav() {
  const { t } = useLanguage();
  const pathname = usePathname();

  const navItems = [
    { icon: 'ri-home-line', label: t('home'), href: '/', active: pathname === '/' },
    { icon: 'ri-calendar-line', label: t('appointments'), href: '/appointments', active: pathname === '/appointments' },
    { icon: 'ri-medicine-bottle-line', label: t('medicines'), href: '/medicine-availability', active: pathname === '/medicine-availability' },
    { icon: 'ri-user-line', label: t('profile'), href: '/profile', active: pathname === '/profile' }
  ];

  return (
    <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200 z-50">
      <div className="grid grid-cols-4 px-0 py-2">
        {navItems.map((item, index) => (
          <Link 
            key={index}
            href={item.href}
            className="flex flex-col items-center justify-center py-2 px-1"
          >
            <div className={`w-6 h-6 flex items-center justify-center mb-1 ${item.active ? '' : 'text-gray-400'}`} style={{color: item.active ? '#40E0D0' : undefined}}>
              <i className={`${item.icon} text-lg`}></i>
            </div>
            <span className={`text-xs ${item.active ? 'font-medium' : 'text-gray-400'}`} style={{color: item.active ? '#40E0D0' : undefined}}>
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
