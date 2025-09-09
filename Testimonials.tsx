
'use client';

import { useLanguage } from '../lib/LanguageContext';

export default function Testimonials() {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: 'Priya Singh',
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20young%20Indian%20woman%20with%20a%20warm%20smile%2C%20wearing%20casual%20clothing%2C%20bright%20friendly%20expression%2C%20high%20quality%20portrait%20photography%2C%20soft%20lighting%2C%20clean%20background&width=60&height=60&seq=avatar1&orientation=squarish',
      text: t('testimonial1')
    },
    {
      name: 'Rajesh Kumar', 
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20middle-aged%20Indian%20man%20with%20glasses%20and%20a%20friendly%20smile%2C%20wearing%20business%20casual%20attire%2C%20warm%20expression%2C%20high%20quality%20portrait%20photography%2C%20soft%20lighting%2C%20clean%20background&width=60&height=60&seq=avatar2&orientation=squarish',
      text: t('testimonial2')
    },
    {
      name: 'Meera Patel',
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20an%20elderly%20Indian%20woman%20with%20a%20kind%20smile%2C%20wearing%20traditional%20clothing%2C%20warm%20grandmother-like%20expression%2C%20high%20quality%20portrait%20photography%2C%20soft%20lighting%2C%20clean%20background&width=60&height=60&seq=avatar3&orientation=squarish',
      text: t('testimonial3')
    }
  ];

  return (
    <div className="px-4 py-8">
      <h2 className="text-xl font-bold mb-6 text-center" style={{color: '#042b5e'}}>
        {t('testimonials')}
      </h2>
      
      <div className="space-y-4">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="rounded-2xl p-4 shadow-sm border border-gray-100" style={{ backgroundColor: '#f7f9fc' }}>
            <div className="flex items-start space-x-3">
              <img 
                src={testimonial.avatar} 
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <h4 className="font-semibold text-sm" style={{color: '#042b5e'}}>{testimonial.name}</h4>
                  <div className="flex space-x-1 ml-2">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="ri-star-fill text-yellow-400 text-xs"></i>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
