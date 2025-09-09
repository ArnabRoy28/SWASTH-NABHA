
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useLanguage } from '../lib/LanguageContext';

export default function KeyFeatures() {
  const { t } = useLanguage();
  const [showComingSoon, setShowComingSoon] = useState(false);

  const features = [
    {
      image: 'https://readdy.ai/api/search-image?query=icon%2C%203D%20realistic%20doctor%20consultation%2C%20professional%20doctor%20with%20stethoscope%20and%20tablet%20for%20video%20call%2C%20medical%20consultation%20setup%2C%20clean%20white%20background%2C%20centered%20composition%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame%2C%20soft%20lighting%2C%20high-detail%203D%20rendering%2C%20modern%20medical%20technology%2C%20telemedicine%20concept&width=100&height=100&seq=doctor-consultation-icon&orientation=squarish',
      title: t('doctorConsultation'),
      description: t('doctorConsultationDesc'),
      gradient: 'from-blue-400 to-blue-600',
      href: '/consultation',
      available: true
    },
    {
      image: 'https://readdy.ai/api/search-image?query=icon%2C%203D%20realistic%20medicine%20bottle%20and%20pills%2C%20modern%20pharmaceutical%20bottles%20with%20colorful%20pills%20and%20tablets%2C%20medical%20pharmacy%20concept%2C%20clean%20white%20background%2C%20centered%20composition%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame%2C%20soft%20lighting%2C%20high-detail%203D%20rendering%2C%20vibrant%20colors%2C%20healthcare%20supplies&width=100&height=100&seq=medicine-availability-icon&orientation=squarish',
      title: t('medicineAvailability'),
      description: t('medicineAvailabilityDesc'),
      gradient: 'from-green-400 to-green-600',
      href: '/medicine-availability',
      available: true
    },
    {
      image: 'https://readdy.ai/api/search-image?query=icon%2C%203D%20realistic%20digital%20health%20records%2C%20modern%20tablet%20or%20smartphone%20displaying%20medical%20charts%20and%20health%20data%2C%20digital%20healthcare%20technology%2C%20clean%20white%20background%2C%20centered%20composition%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame%2C%20soft%20lighting%2C%20high-detail%203D%20rendering%2C%20modern%20medical%20interface%2C%20electronic%20health%20records&width=100&height=100&seq=health-records-icon&orientation=squarish',
      title: t('digitalSWASTHRecords'),
      description: t('digitalSWASTHRecordsDesc'),
      gradient: 'from-purple-400 to-purple-600',
      href: '/health-records',
      available: true
    },
    {
      image: 'https://readdy.ai/api/search-image?query=icon%2C%203D%20realistic%20AI%20brain%20and%20medical%20symbols%2C%20futuristic%20brain%20with%20medical%20cross%20and%20diagnostic%20elements%2C%20artificial%20intelligence%20in%20healthcare%2C%20clean%20white%20background%2C%20centered%20composition%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame%2C%20soft%20lighting%2C%20high-detail%203D%20rendering%2C%20modern%20AI%20technology%2C%20smart%20medical%20diagnosis&width=100&height=100&seq=ai-symptom-checker-icon&orientation=squarish',
      title: t('aiSymptomChecker'),
      description: t('aiSymptomCheckerDesc'),
      gradient: 'from-orange-400 to-orange-600',
      href: '#',
      available: false
    }
  ];

  const handleFeatureClick = (feature) => {
    if (!feature.available) {
      setShowComingSoon(true);
    }
  };

  return (
    <div className="px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold" style={{color: '#042b5e'}}>
          {t('keyFeaturesTitle')}
        </h2>
        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
          {t('tapToExplore')}
        </span>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        {features.map((feature, index) => (
          feature.available ? (
            <Link 
              key={index}
              href={feature.href}
              className="rounded-2xl p-4 shadow-sm border border-gray-100 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95 block"
              style={{ backgroundColor: '#f0fdfc' }}
            >
              <div className="relative mb-3">
                <div className="w-12 h-12 rounded-xl overflow-hidden mb-3 shadow-sm">
                  <img 
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center">
                  <i className="ri-arrow-right-line text-gray-400 text-sm"></i>
                </div>
              </div>
              <h3 className="font-semibold text-sm mb-2" style={{color: '#042b5e'}}>
                {feature.title}
              </h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                {feature.description}
              </p>
            </Link>
          ) : (
            <button 
              key={index}
              onClick={() => handleFeatureClick(feature)}
              className="rounded-2xl p-4 shadow-sm border border-gray-100 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95 block relative"
              style={{ backgroundColor: '#f0fdfc' }}
            >
              <div className="relative mb-3">
                <div className="w-12 h-12 rounded-xl overflow-hidden mb-3 shadow-sm">
                  <img 
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center">
                  <span className="text-xs px-1 py-0.5 rounded-full text-white font-medium" style={{backgroundColor: '#40E0D0'}}>
                    Soon
                  </span>
                </div>
              </div>
              <h3 className="font-semibold text-sm mb-2" style={{color: '#042b5e'}}>
                {feature.title}
              </h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                {feature.description}
              </p>
            </button>
          )
        ))}
      </div>
      
      <div className="text-center">
        <p className="text-xs text-gray-500">
          {t('tapAnyFeature')}
        </p>
      </div>

      {/* Coming Soon Modal */}
      {showComingSoon && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{backgroundColor: '#40E0D0'}}>
                <i className="ri-time-line text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-bold mb-2" style={{color: '#042b5e'}}>
                Coming Soon!
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                We're working hard to bring you the AI Symptom Checker feature. Stay tuned for updates!
              </p>
              <button
                onClick={() => setShowComingSoon(false)}
                className="w-full py-3 rounded-xl text-white font-medium"
                style={{backgroundColor: '#40E0D0'}}
              >
                Got it!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
