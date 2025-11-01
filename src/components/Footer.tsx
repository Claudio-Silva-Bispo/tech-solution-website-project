import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Head from 'next/head';

const Footer = () => {
  const { isDarkMode } = useTheme();
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = () => {
    if (email) {
      alert('Obrigado! Você foi inscrito na nossa newsletter.');
      setEmail('');
    }
  };

  return (
    <>
      <Head>
        {/* Schema LocalBusiness para SEO Local */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "BC Tech Solutions & Advisory",
              "image": "https://bctechsolutionsadvisory.com/logo/logo-principal/original_sem_fundo.png",
              "url": "https://bctechsolutionsadvisory.com",
              "telephone": "+55-11-95875-7740",
              "email": "bctechsolutionsadvisory@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "São Paulo",
                "addressLocality": "São Paulo",
                "addressRegion": "SP",
                "addressCountry": "BR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -23.5505,
                "longitude": -46.6333
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "São Paulo",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "São Paulo",
                    "addressRegion": "SP",
                    "addressCountry": "BR"
                  }
                },
                {
                  "@type": "City",
                  "name": "Seattle",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Seattle",
                    "addressRegion": "WA",
                    "addressCountry": "US"
                  }
                }
              ],
              "priceRange": "$$",
              "openingHours": "Mo-Fr 09:00-18:00",
              "sameAs": [
                "https://www.instagram.com/bctech.solutions/",
                "https://github.com/Claudio-Silva-Bispo",
                "https://www.linkedin.com/in/claudiosbispo/"
              ]
            })
          }}
        />

        {/* Schema BreadcrumbList para navegação */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://bctechsolutionsadvisory.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Serviços",
                  "item": "https://bctechsolutionsadvisory.com/#services"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Sobre",
                  "item": "https://bctechsolutionsadvisory.com/#about"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Contato",
                  "item": "https://bctechsolutionsadvisory.com/#contact"
                }
              ]
            })
          }}
        />
      </Head>

      <footer className={`relative overflow-hidden ${
        isDarkMode 
          ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-gray-900 text-white' 
          : 'bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 text-gray-900'
      }`}>
        {/* Background overlay with animation */}
        <div className={`absolute inset-0 animate-pulse-slow ${
          isDarkMode 
            ? 'bg-gradient-radial from-blue-500/5 via-transparent to-transparent'
            : 'bg-gradient-radial from-blue-500/10 via-transparent to-transparent'
        }`}></div>
        
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          
          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
            
            {/* Coluna 1 - Empresa */}
            <div className="lg:col-span-2 transform transition-all duration-500 hover:scale-[1.02]">
              {/* Logo */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`text-xl lg:text-2xl font-bold transition-colors duration-300 ${
                  isDarkMode ? 'text-blue-400' : 'text-blue-600'
                }`}>
                  BC Tech Solutions & Advisory
                </div>
              </div>
              
              {/* Tagline */}
              <p className={`mb-6 text-base lg:text-lg font-medium transition-colors duration-300 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Transformando dados em decisões estratégicas e Criação de soluções digitais simples e eficazes.
              </p>
              
              {/* Description with SEO keywords */}
              <p className={`text-sm lg:text-base leading-relaxed mb-6 max-w-md transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Experiência em Engenharia de Dados, Power BI e desenvolvimento web 
                para pequenas empresas em <strong>São Paulo, Brasil</strong> e região de <strong>Seattle, Estados Unidos</strong>. 
                Especialistas em transformação digital que querem crescer com inteligência.
              </p>
              
              {/* Social Links with hover effects */}
              <div className="flex gap-3 lg:gap-4">
                <a 
                  href="https://wa.me/5511958757740" 
                  className={`w-10 h-10 lg:w-12 lg:h-12 ${
                    isDarkMode 
                      ? 'bg-blue-500/10 border-blue-500/20 hover:bg-blue-500/20 hover:border-blue-500/40'
                      : 'bg-blue-100 border-blue-300 hover:bg-blue-200 hover:border-blue-400'
                  } border rounded-lg flex items-center justify-center text-lg lg:text-xl hover:-translate-y-2 hover:scale-110 transition-all duration-300 hover:shadow-lg`}
                  aria-label="WhatsApp"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  📱
                </a>
                <a 
                  href="mailto:bctechsolutionsadvisory@gmail.com" 
                  className={`w-10 h-10 lg:w-12 lg:h-12 ${
                    isDarkMode 
                      ? 'bg-blue-500/10 border-blue-500/20 hover:bg-blue-500/20 hover:border-blue-500/40'
                      : 'bg-blue-100 border-blue-300 hover:bg-blue-200 hover:border-blue-400'
                  } border rounded-lg flex items-center justify-center text-lg lg:text-xl hover:-translate-y-2 hover:scale-110 transition-all duration-300 hover:shadow-lg`}
                  aria-label="Email"
                >
                  📧
                </a>
                <a 
                  href="https://www.linkedin.com/in/claudiosbispo/" 
                  className={`w-10 h-10 lg:w-12 lg:h-12 ${
                    isDarkMode 
                      ? 'bg-blue-500/10 border-blue-500/20 hover:bg-blue-500/20 hover:border-blue-500/40'
                      : 'bg-blue-100 border-blue-300 hover:bg-blue-200 hover:border-blue-400'
                  } border rounded-lg flex items-center justify-center text-lg lg:text-xl hover:-translate-y-2 hover:scale-110 transition-all duration-300 hover:shadow-lg`}
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  💼
                </a>
                <a 
                  href="https://www.instagram.com/bctech.solutions/" 
                  className={`w-10 h-10 lg:w-12 lg:h-12 ${
                    isDarkMode 
                      ? 'bg-blue-500/10 border-blue-500/20 hover:bg-blue-500/20 hover:border-blue-500/40'
                      : 'bg-blue-100 border-blue-300 hover:bg-blue-200 hover:border-blue-400'
                  } border rounded-lg flex items-center justify-center text-lg lg:text-xl hover:-translate-y-2 hover:scale-110 transition-all duration-300 hover:shadow-lg`}
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📸
                </a>
              </div>
            </div>

            {/* Coluna 2 - Serviços */}
            <div className="transform transition-all duration-500 hover:scale-[1.02]">
              <h3 className={`text-lg lg:text-xl font-bold mb-6 transition-colors duration-300 ${
                isDarkMode ? 'text-gray-200' : 'text-gray-800'
              }`}>
                Serviços
              </h3>
              <ul className="space-y-3 lg:space-y-4">
                <li className="transform transition-all duration-300 hover:translate-x-2">
                  <a 
                    href="#data-engineering" 
                    className={`text-sm lg:text-base transition-all duration-300 block ${
                      isDarkMode 
                        ? 'text-gray-400 hover:text-blue-400' 
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    Engenharia de Dados
                  </a>
                </li>
                <li className="transform transition-all duration-300 hover:translate-x-2">
                  <a 
                    href="#bi-architecture" 
                    className={`text-sm lg:text-base transition-all duration-300 block ${
                      isDarkMode 
                        ? 'text-gray-400 hover:text-blue-400' 
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    Power BI & Analytics
                  </a>
                </li>
                <li className="transform transition-all duration-300 hover:translate-x-2">
                  <a 
                    href="#web-development" 
                    className={`text-sm lg:text-base transition-all duration-300 block ${
                      isDarkMode 
                        ? 'text-gray-400 hover:text-blue-400' 
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    Desenvolvimento Web
                  </a>
                </li>
                <li className="transform transition-all duration-300 hover:translate-x-2">
                  <a 
                    href="#mobile-development" 
                    className={`text-sm lg:text-base transition-all duration-300 block ${
                      isDarkMode 
                        ? 'text-gray-400 hover:text-blue-400' 
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    Aplicativos Mobile
                  </a>
                </li>
              </ul>
            </div>

            {/* Coluna 3 - Empresa */}
            <div className="transform transition-all duration-500 hover:scale-[1.02]">
              <h3 className={`text-lg lg:text-xl font-bold mb-6 transition-colors duration-300 ${
                isDarkMode ? 'text-gray-200' : 'text-gray-800'
              }`}>
                Empresa
              </h3>
              <ul className="space-y-3 lg:space-y-4">
                <li className="transform transition-all duration-300 hover:translate-x-2">
                  <a 
                    href="#about" 
                    className={`text-sm lg:text-base transition-all duration-300 block ${
                      isDarkMode 
                        ? 'text-gray-400 hover:text-blue-400' 
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    Sobre
                  </a>
                </li>
                <li className="transform transition-all duration-300 hover:translate-x-2">
                  <a 
                    href="https://github.com/Claudio-Silva-Bispo" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`text-sm lg:text-base transition-all duration-300 block ${
                      isDarkMode 
                        ? 'text-gray-400 hover:text-blue-400' 
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    Portfolio
                  </a>
                </li>
                <li className="transform transition-all duration-300 hover:translate-x-2">
                  <a 
                    href="https://www.linkedin.com/in/claudiosbispo/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`text-sm lg:text-base transition-all duration-300 block ${
                      isDarkMode 
                        ? 'text-gray-400 hover:text-blue-400' 
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    LinkedIn
                  </a>
                </li>
                <li className="transform transition-all duration-300 hover:translate-x-2">
                  <a 
                    href="https://github.com/Claudio-Silva-Bispo" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`text-sm lg:text-base transition-all duration-300 block ${
                      isDarkMode 
                        ? 'text-gray-400 hover:text-blue-400' 
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Coluna 4 - Contato com localizações */}
          <div className="mb-12 lg:mb-16">
            <h3 className={`text-lg lg:text-xl font-bold mb-6 transition-colors duration-300 ${
              isDarkMode ? 'text-gray-200' : 'text-gray-800'
            }`}>
              Contato & Localização
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Email */}
              <div className="flex items-start gap-4 transform transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                <span className="text-xl lg:text-2xl mt-1">📧</span>
                <div>
                  <div className={`text-xs lg:text-sm mb-1 transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Email
                  </div>
                  <a 
                    href="mailto:bctechsolutionsadvisory@gmail.com" 
                    className={`text-sm lg:text-base transition-all duration-300 break-all hover:underline ${
                      isDarkMode 
                        ? 'text-gray-200 hover:text-blue-400' 
                        : 'text-gray-800 hover:text-blue-600'
                    }`}
                  >
                    bctechsolutionsadvisory@gmail.com
                  </a>
                </div>
              </div>
              
              {/* WhatsApp */}
              <div className="flex items-start gap-4 transform transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                <span className="text-xl lg:text-2xl mt-1">📱</span>
                <div>
                  <div className={`text-xs lg:text-sm mb-1 transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    WhatsApp
                  </div>
                  <a 
                    href="https://wa.me/5511958757740" 
                    className={`text-sm lg:text-base transition-all duration-300 hover:underline ${
                      isDarkMode 
                        ? 'text-gray-200 hover:text-blue-400' 
                        : 'text-gray-800 hover:text-blue-600'
                    }`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +55 11 95875-7740
                  </a>
                </div>
              </div>
              
              {/* Location Brazil */}
              <div className="flex items-start gap-4 transform transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                <span className="text-xl lg:text-2xl mt-1">📍</span>
                <div>
                  <div className={`text-xs lg:text-sm mb-1 transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Brasil
                  </div>
                  <div className={`text-sm lg:text-base font-semibold ${
                    isDarkMode ? 'text-gray-200' : 'text-gray-800'
                  }`}>
                    São Paulo, SP
                  </div>
                </div>
              </div>

              {/* Location USA */}
              <div className="flex items-start gap-4 transform transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                <span className="text-xl lg:text-2xl mt-1">🌎</span>
                <div>
                  <div className={`text-xs lg:text-sm mb-1 transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Estados Unidos
                  </div>
                  <div className={`text-sm lg:text-base font-semibold ${
                    isDarkMode ? 'text-gray-200' : 'text-gray-800'
                  }`}>
                    Seattle, WA
                  </div>
                </div>
              </div>

              {/* Horário */}
              <div className="flex items-start gap-4 transform transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                <span className="text-xl lg:text-2xl mt-1">🕐</span>
                <div>
                  <div className={`text-xs lg:text-sm mb-1 transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Horário
                  </div>
                  <div className={`text-sm lg:text-base ${
                    isDarkMode ? 'text-gray-200' : 'text-gray-800'
                  }`}>
                    Seg-Sex 9h-18h BRT
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className={`pt-6 lg:pt-8 border-t transition-colors duration-300 ${
            isDarkMode ? 'border-white/10' : 'border-gray-300'
          }`}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 lg:gap-6">
              <div className={`text-sm lg:text-base text-center sm:text-left transition-colors duration-300 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                © 2025 BC Tech Solutions & Advisory. Todos os direitos reservados.
              </div>
              <div className="flex flex-wrap justify-center sm:justify-end gap-4 lg:gap-8">
                <a 
                  href="#privacy" 
                  className={`text-sm lg:text-base transition-all duration-300 hover:scale-105 ${
                    isDarkMode 
                      ? 'text-gray-400 hover:text-blue-400' 
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  Política de Privacidade
                </a>
                <a 
                  href="#terms" 
                  className={`text-sm lg:text-base transition-all duration-300 hover:scale-105 ${
                    isDarkMode 
                      ? 'text-gray-400 hover:text-blue-400' 
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  Termos de Uso
                </a>
                <a 
                  href="#cookies" 
                  className={`text-sm lg:text-base transition-all duration-300 hover:scale-105 ${
                    isDarkMode 
                      ? 'text-gray-400 hover:text-blue-400' 
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;