
'use client';

import Link from 'next/link';
import { useLanguage } from '../lib/LanguageContext';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <div className="px-4 py-8 mt-16" style={{background: 'linear-gradient(to bottom right, rgba(64, 224, 208, 0.1), rgba(4, 43, 94, 0.05))'}}>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-2" style={{color: '#042b5e'}}>
            {t('heroTitle')}
          </h1>
          <p className="text-gray-600 text-sm mb-6 leading-relaxed">
            {t('heroSubtitle')}
          </p>
          <Link href="/consultation">
            <button className="text-white px-4 py-2 rounded-full font-medium text-sm shadow-lg hover:opacity-90 transition-all hover:shadow-xl border border-white" style={{backgroundColor: '#042b5e', textShadow: '0 1px 2px rgba(0,0,0,0.3)'}}>
              {t('talkToDoctor')}
            </button>
          </Link>
        </div>
        
        <div className="flex-shrink-0 ml-4">
          <img 
            src="https://readdy.ai/api/search-image?query=Modern%20healthcare%20telemedicine%20illustration%20featuring%20a%20friendly%20female%20doctor%20in%20white%20medical%20coat%20with%20stethoscope%20appearing%20on%20a%20smartphone%20screen%2C%20consulting%20with%20a%20male%20patient%20sitting%20comfortably%20at%20home%2C%20clean%20medical%20app%20interface%20design%2C%20bright%20turquoise%20and%20deep%20navy%20blue%20color%20palette%2C%20professional%20flat%20illustration%20style%2C%20warm%20and%20approachable%20healthcare%20atmosphere%2C%20isolated%20on%20clean%20white%20background%2C%20high%20quality%20digital%20artwork%2C%20medical%20technology%20concept&width=200&height=180&seq=healthcare-hero-main&orientation=portrait"
            alt="Healthcare consultation illustration"
            className="w-48 h-44 object-contain"
            onError={(e) => {
              e.currentTarget.src = "https://readdy.ai/api/search-image?query=Healthcare%20doctor%20consultation%20digital%20illustration%2C%20professional%20medical%20service%20app%20interface%2C%20turquoise%20and%20navy%20blue%20theme%2C%20modern%20design%2C%20clean%20background%2C%20friendly%20healthcare%20professional%2C%20medical%20technology%2C%20telemedicine%20concept%2C%20bright%20colors%2C%20professional%20artwork&width=200&height=180&seq=medical-consultation-backup&orientation=portrait";
            }}
          />
        </div>
      </div>
    </div>
  );
}
