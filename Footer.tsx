'use client';

import { useLanguage } from '../lib/LanguageContext';
import Link from 'next/link';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="px-4 py-6 bg-white border-t border-gray-100 mb-16">
      <div className="text-center">
        <div className="flex justify-center space-x-6 mb-3">
          <Link href="/about" className="text-gray-600 text-sm hover:text-opacity-80" style={{'--tw-text-opacity': '1', color: '#40E0D0'}}>{t('aboutUs')}</Link>
          <Link href="/contact" className="text-gray-600 text-sm hover:text-opacity-80" style={{'--tw-text-opacity': '1', color: '#40E0D0'}}>{t('contact')}</Link>
          <Link href="/privacy" className="text-gray-600 text-sm hover:text-opacity-80" style={{'--tw-text-opacity': '1', color: '#40E0D0'}}>{t('privacyPolicy')}</Link>
        </div>
        <p className="text-xs" style={{color: '#042b5e'}}>
          {t('copyright')}
        </p>
      </div>
    </footer>
  );
}