
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '../lib/LanguageContext';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const router = useRouter();

  const languages = [
    { code: 'pn', label: 'PN' },
    { code: 'en', label: 'EN' },
    { code: 'hi', label: 'HI' }
  ];

  const handleEmergencyCall = () => {
    window.location.href = 'tel:108';
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    router.push('/login');
  };

  return (
    <header className="fixed top-0 w-full bg-white z-50 px-4 py-3 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{backgroundColor: '#40E0D0'}}>
            <i className="ri-leaf-line text-white text-lg"></i>
          </div>
          <div>
            <div className="font-semibold text-sm" style={{color: '#042b5e'}}>{t('appName').split(' ')[0]}</div>
            <div className="font-bold text-sm" style={{color: '#042b5e'}}>{t('appName').split(' ')[1]}</div>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <button 
            onClick={handleEmergencyCall}
            className="text-white px-3 py-1 rounded-full text-xs font-medium hover:opacity-80 transition-opacity active:scale-95" 
            style={{backgroundColor: '#042b5e'}}
          >
            {t('emergency')}
          </button>
          <div className="flex items-center space-x-1 text-sm text-gray-600">
            {languages.map((lang, index) => (
              <React.Fragment key={lang.code}>
                <button
                  onClick={() => setLanguage(lang.code as any)}
                  className={`cursor-pointer hover:opacity-70 transition-opacity ${
                    language === lang.code ? 'font-bold' : ''
                  }`}
                  style={{color: language === lang.code ? '#40E0D0' : undefined}}
                >
                  {lang.label}
                </button>
                {index < languages.length - 1 && <span>|</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
