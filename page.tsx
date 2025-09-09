
'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '../../lib/LanguageContext';

export default function WelcomePage() {
  const { language, setLanguage, t } = useLanguage();
  const [showContent, setShowContent] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  const languages = [
    { code: 'pn', label: 'PN' },
    { code: 'en', label: 'EN' },
    { code: 'hi', label: 'HI' }
  ];

  useEffect(() => {
    // Animate content appearance with staggered timing
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 300);

    // Mouse tracking for interactive effects
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Scroll tracking for parallax
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col relative overflow-hidden">
      {/* Enhanced Dynamic Background with Multiple Layers */}
      <div className="absolute inset-0">
        {/* Primary gradient layer */}
        <div 
          className="absolute inset-0 opacity-10 transition-all duration-1000"
          style={{
            background: 'linear-gradient(135deg, rgba(64, 224, 208, 0.4) 0%, rgba(4, 43, 94, 0.25) 30%, rgba(64, 224, 208, 0.15) 70%, rgba(4, 43, 94, 0.1) 100%)',
            transform: `translateY(${scrollY * 0.1}px)`
          }}
        />
        
        {/* Secondary animated gradient */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            background: 'radial-gradient(circle at 30% 40%, rgba(64, 224, 208, 0.6) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(4, 43, 94, 0.4) 0%, transparent 50%)',
            animation: 'float 20s ease-in-out infinite'
          }}
        />

        {/* Interactive mouse-following gradient */}
        <div 
          className="absolute w-96 h-96 opacity-3 rounded-full blur-3xl transition-all duration-500 ease-out"
          style={{
            background: 'radial-gradient(circle, rgba(64, 224, 208, 0.2) 0%, transparent 70%)',
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            pointerEvents: 'none'
          }}
        />

        {/* Subtle geometric patterns */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(64, 224, 208, 0.1) 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, rgba(4, 43, 94, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px, 80px 80px'
        }} />
      </div>
      
      {/* Enhanced Language Selector */}
      <div className="absolute top-6 right-4 z-20">
        <div className="flex items-center space-x-0.5 text-xs text-gray-600 bg-white bg-opacity-80 backdrop-blur-xl rounded-full px-2 py-1.5 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105">
          {languages.map((lang, index) => (
            <React.Fragment key={lang.code}>
              <button
                onClick={() => setLanguage(lang.code as any)}
                className={`cursor-pointer transition-all duration-300 px-1.5 py-0.5 rounded-lg hover:bg-gray-50 ${
                  language === lang.code ? 'font-bold transform scale-105' : 'hover:scale-105'
                }`}
                style={{color: language === lang.code ? '#40E0D0' : undefined}}
              >
                {lang.label}
              </button>
              {index < languages.length - 1 && <span className="text-gray-300 opacity-40 text-xs">|</span>}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Main Content with Enhanced Animations */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-8 relative z-10">
        
        {/* Logo and App Name with Advanced Animations */}
        <div className={`text-center mb-16 transition-all duration-1200 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          style={{ 
            transform: showContent ? 'translateY(0)' : 'translateY(48px)',
            filter: showContent ? 'blur(0)' : 'blur(4px)'
          }}>
          
          {/* Enhanced Logo Container */}
          <div className="relative mb-8 group">
            {/* Outer glow ring */}
            <div className="absolute inset-0 w-28 h-28 rounded-full mx-auto animate-pulse opacity-30" 
              style={{
                background: 'conic-gradient(from 0deg, #40E0D0, #042b5e, #40E0D0)',
                animation: 'spin 8s linear infinite'
              }} />
            
            {/* Main logo */}
            <div className="relative w-24 h-24 rounded-full mx-auto flex items-center justify-center shadow-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12" 
              style={{
                backgroundColor: '#40E0D0',
                boxShadow: '0 20px 40px rgba(64, 224, 208, 0.3), 0 0 0 1px rgba(255,255,255,0.1)'
              }}>
              <i className="ri-leaf-line text-white text-3xl transform transition-all duration-500 group-hover:scale-125"></i>
            </div>
            
            {/* Floating particles around logo */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 rounded-full opacity-40"
                  style={{
                    backgroundColor: i % 2 === 0 ? '#40E0D0' : '#042b5e',
                    left: `${50 + 30 * Math.cos((i * 60) * Math.PI / 180)}%`,
                    top: `${50 + 30 * Math.sin((i * 60) * Math.PI / 180)}%`,
                    animation: `float ${3 + i * 0.5}s ease-in-out infinite ${i * 0.2}s`
                  }}
                />
              ))}
            </div>
          </div>

          {/* Enhanced App Name */}
          <div className="relative">
            <h1 className="text-5xl mb-3 relative transform transition-all duration-700 hover:scale-105" 
              style={{
                color: '#042b5e',
                textShadow: '0 2px 12px rgba(4, 43, 94, 0.15), 0 4px 20px rgba(4, 43, 94, 0.08)',
                letterSpacing: '0.08em',
                fontWeight: '900',
                fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
              }}>
              <span className="relative inline-block">
                {t('appName')}
                {/* Enhanced sophisticated underline */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-[#40E0D0] to-transparent transition-all duration-700 hover:w-full opacity-80" />
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#40E0D0] to-transparent opacity-0 blur-sm transition-opacity duration-500 hover:opacity-5" />
              </span>
            </h1>
            
            <p className="text-gray-600 text-lg leading-relaxed max-w-xs mx-auto transform transition-all duration-500 hover:text-gray-700 font-semibold" 
              style={{
                textShadow: '0 1px 3px rgba(0,0,0,0.08)',
                letterSpacing: '0.05em',
                fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
              }}>
              {t('yourHealthcarePartner')}
            </p>
          </div>
        </div>

        {/* Enhanced Animated CTA Section */}
        <div className={`text-center mb-12 transition-all duration-1400 delay-200 ${showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          <div className="relative">
            {/* Main CTA Text with Enhanced Animation */}
            <div className="mb-6">
              <h2 className="text-4xl font-bold mb-6 relative" 
                style={{
                  color: '#042b5e',
                  textShadow: '0 4px 12px rgba(4, 43, 94, 0.15)',
                  animation: 'breathe 3s ease-in-out infinite'
                }}>
                <span className="relative inline-block">
                  {t('letsGetStarted')}
                  {/* Animated highlight */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-turquoise to-transparent opacity-10 animate-pulse" />
                </span>
              </h2>
              
              <p className="text-gray-600 text-base leading-relaxed max-w-sm mx-auto transform transition-all duration-500 hover:scale-105 font-bold" 
                style={{
                  textShadow: '0 2px 6px rgba(0,0,0,0.05)'
                }}>
                {t('comprehensiveHealthcareServices')}
              </p>
            </div>

            {/* Enhanced Central Animated Arrow */}
            <div className="relative group mb-4">
              {/* Multiple layered ripple effects with different animations */}
              <div className="absolute inset-0 w-36 h-36 mx-auto rounded-full opacity-15 animate-ping" 
                style={{
                  backgroundColor: 'rgba(64, 224, 208, 0.4)',
                  animationDelay: '0s',
                  animationDuration: '3s'
                }} />
              <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full opacity-20 animate-ping" 
                style={{
                  backgroundColor: 'rgba(64, 224, 208, 0.5)',
                  animationDelay: '0.5s',
                  animationDuration: '2.5s'
                }} />
              <div className="absolute inset-0 w-28 h-28 mx-auto rounded-full opacity-25" 
                style={{
                  backgroundColor: 'rgba(64, 224, 208, 0.3)',
                  animation: 'pulseGlow 2s ease-in-out infinite'
                }} />
              
              {/* Rotating gradient ring */}
              <div className="absolute inset-0 w-26 h-26 mx-auto rounded-full opacity-40" 
                style={{
                  background: 'conic-gradient(from 0deg, transparent, rgba(64, 224, 208, 0.6), transparent)',
                  animation: 'spin 4s linear infinite'
                }} />
              
              {/* Inner glowing core */}
              <div className="absolute inset-0 w-20 h-20 mx-auto rounded-full opacity-50" 
                style={{
                  background: 'radial-gradient(circle, rgba(64, 224, 208, 0.8) 0%, rgba(64, 224, 208, 0.2) 70%, transparent 100%)',
                  animation: 'breatheGlow 3s ease-in-out infinite'
                }} />
              
              {/* Main arrow container with enhanced styling */}
              <div className="relative w-24 h-24 mx-auto rounded-full flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 cursor-pointer backdrop-blur-sm" 
                style={{
                  background: 'linear-gradient(135deg, rgba(64, 224, 208, 0.25) 0%, rgba(64, 224, 208, 0.1) 100%)',
                  boxShadow: '0 8px 32px rgba(64, 224, 208, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                  animation: 'float 3s ease-in-out infinite',
                  border: '1px solid rgba(64, 224, 208, 0.3)'
                }}>
                <i className="ri-arrow-down-line text-4xl transform transition-all duration-300 group-hover:translate-y-1" 
                  style={{
                    color: '#40E0D0',
                    filter: 'drop-shadow(0 2px 8px rgba(64, 224, 208, 0.5))',
                    animation: 'bounce 2s infinite'
                  }}></i>
              </div>
              
              {/* Floating particles around the arrow */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                    style={{
                      backgroundColor: '#40E0D0',
                      left: `${50 + 35 * Math.cos((i * 45) * Math.PI / 180)}%`,
                      top: `${50 + 35 * Math.sin((i * 45) * Math.PI / 180)}%`,
                      animation: `floatParticle ${2 + i * 0.3}s ease-in-out infinite ${i * 0.2}s`,
                      boxShadow: '0 0 6px rgba(64, 224, 208, 0.8)'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Get Started Button */}
        <div className={`transition-all duration-1600 delay-400 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <Link href="/login">
            <button className="group relative flex items-center space-x-3 px-6 py-3 rounded-xl text-white font-semibold text-base shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 active:scale-95 overflow-hidden" 
              style={{
                background: 'linear-gradient(135deg, #40E0D0 0%, #042b5e 100%)',
                boxShadow: '0 15px 30px rgba(64, 224, 208, 0.3), 0 6px 12px rgba(4, 43, 94, 0.2)'
              }}>
              
              {/* Button shine effect - moved upward */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 transform -skew-x-12 group-hover:translate-x-full -translate-y-2" 
                style={{ animation: 'shine 2s ease-in-out infinite 3s' }} />
              
              {/* Button content */}
              <i className="ri-stethoscope-line text-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"></i>
              <span className="relative z-10 transform transition-all duration-300 group-hover:tracking-wide">
                {t('getStarted')}
              </span>
              <i className="ri-arrow-right-line text-base transform transition-all duration-300 group-hover:translate-x-2"></i>
            </button>
          </Link>
        </div>

      </div>

      {/* Enhanced Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(-5px) rotate(-1deg); }
        }
        
        @keyframes breathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        
        @keyframes shine {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-8px); }
          60% { transform: translateY(-4px); }
        }

        @keyframes pulseGlow {
          0%, 100% { 
            transform: scale(1);
            opacity: 0.25;
          }
          50% { 
            transform: scale(1.1);
            opacity: 0.4;
          }
        }
        
        @keyframes breatheGlow {
          0%, 100% { 
            transform: scale(1);
            opacity: 0.5;
          }
          50% { 
            transform: scale(1.05);
            opacity: 0.7;
          }
        }
        
        @keyframes floatParticle {
          0%, 100% { 
            transform: translateY(0px) scale(1);
            opacity: 0.6;
          }
          33% { 
            transform: translateY(-8px) scale(1.2);
            opacity: 0.8;
          }
          66% { 
            transform: translateY(-4px) scale(1.1);
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  );
}
