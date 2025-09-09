'use client';

import { useLanguage } from '../../lib/LanguageContext';
import Header from '../../components/Header';
import BottomNav from '../../components/BottomNav';

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Content Area - accounting for header and bottom nav */}
      <div className="pt-16 pb-20 px-4">
        <div className="max-w-md mx-auto">
          {/* Page Title */}
          <div className="text-center py-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              {t('aboutUs')}
            </h1>
            <div className="w-16 h-1 bg-[#40E0D0] mx-auto rounded-full"></div>
          </div>

          {/* Empty Content Area */}
          <div className="bg-gray-50 rounded-2xl p-8 text-center min-h-[400px] flex flex-col items-center justify-center">
            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <i className="ri-file-text-line text-3xl text-gray-400"></i>
            </div>
            <p className="text-gray-500 text-sm">
              Content coming soon...
            </p>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}