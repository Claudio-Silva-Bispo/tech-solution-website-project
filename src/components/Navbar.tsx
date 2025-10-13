import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('');

  const menuItems: { item: string; path: string; icon: string; type: 'section' | 'page' }[] = [
    { item: 'Início', path: '/', icon: '🏠', type: 'section' },
    { item: 'Serviços', path: '#services', icon: '✨', type: 'section' },
    { item: 'Sobre', path: '#about', icon: '👥', type: 'section' },
    { item: 'Orçamento', path: '#contact', icon: '📧', type: 'section' },
  ];

  const servicePages = [
    { item: 'Engenharia de Dados', path: '/DataEngineering', icon: '🔧' },
    { item: 'Power BI', path: '/PowerBIArchitecture', icon: '📊' },
    { item: 'Sites', path: '/WebDevelopment', icon: '🌐' },
    { item: 'Google Meu Negócio', path: '/GoogleBusiness', icon: '📍' },
    { item: 'Redes Sociais', path: '/SocialMedia', icon: '📱' },
    { item: 'Documentação', path: '/DocumentationTrainingSection', icon: '📚' },
  ];

  // Detecta scroll para mostrar/ocultar navbar no mobile
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path: string, type: 'page' | 'section' = 'section') => {
    setIsMobileMenuOpen(false);
    
    if (type === 'section' && path.startsWith('#')) {
      const sectionId = path.substring(1);
      const element = document.getElementById(sectionId);
      
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
        
        window.history.replaceState(null, '', path);
        setActiveHash(path);
      }
    } else {
      // Navegação para páginas - você pode integrar com Next.js router aqui
      window.location.href = path;
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Navbar Desktop - sempre visível */}
      <header className="hidden lg:block fixed top-0 left-0 right-0 z-50 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <div className="flex items-center">
              <button 
                onClick={() => handleNavigation('#home', 'section')} 
                className="flex items-center gap-3 hover:opacity-80 transition-opacity"
              >
                <span className="text-xl font-bold text-blue-400">BC Tech Solutions</span>
              </button>
            </div>
            
            {/* Menu Desktop */}
            <nav className="flex items-center space-x-1">
              {menuItems.map((menuItem) => (
                <button
                  key={menuItem.item}
                  onClick={() => handleNavigation(menuItem.path, menuItem.type)}
                  className={`px-4 py-2 text-sm rounded-lg flex items-center space-x-2 transition-all ${
                    activeHash === menuItem.path 
                      ? 'bg-blue-500/30 text-blue-400'
                      : 'text-gray-300 hover:bg-blue-500/10 hover:text-blue-400'
                  }`}
                >
                  <span>{menuItem.icon}</span>
                  <span>{menuItem.item}</span>
                </button>
              ))}
            </nav>
            
            {/* Botão de Contato */}
            <div className="flex items-center gap-3">
              <a 
                href="tel:+5511958757740" 
                className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/25 flex items-center gap-2"
              >
                📞 (11) 95875-7740
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Navbar Mobile - aparece apenas ao fazer scroll */}
      <header 
        className={`lg:hidden fixed top-0 left-0 right-0 z-50 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 shadow-lg transition-all duration-300 ${
          isScrolled ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo Mobile */}
            <button 
              onClick={() => handleNavigation('#home', 'section')} 
              className="flex items-center gap-2"
            >
              <span className="text-lg font-bold text-blue-400">BC Tech Solutions & Advisory</span>
            </button>
            
            {/* Botão Hamburger */}
            <button 
              onClick={toggleMobileMenu} 
              className="p-2 text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="Abrir menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Menu Mobile Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-blue-900/50 backdrop-blur-sm z-50 lg:hidden">
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-gradient-to-br from-blue-50 via-sky-100 to-indigo-50 shadow-2xl overflow-y-auto">
            {/* Header do menu mobile */}
            <div className="flex items-center justify-between p-4 border-b border-blue-200">
              <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <span className="text-2xl">💼</span>
                Menu
              </h2>
              <button 
                onClick={toggleMobileMenu} 
                className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors"
                aria-label="Fechar menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Lista de menu items */}
            <nav className="flex flex-col p-4 space-y-3">
              {/* Menu Principal */}
              {menuItems.map((menuItem) => (
                <button
                  key={menuItem.item}
                  onClick={() => handleNavigation(menuItem.path, menuItem.type)}
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors text-left text-gray-800 hover:bg-blue-200/50 bg-white/70 shadow-sm"
                >
                  <span className="text-xl">{menuItem.icon}</span>
                  <span className="font-medium">{menuItem.item}</span>
                </button>
              ))}

              {/* Divisor */}
              <div className="border-t border-blue-200 my-2"></div>
              
              {/* Serviços - Grid 2 colunas */}
              <div className="grid grid-cols-2 gap-2">
                {servicePages.map((page) => (
                  <button
                    key={page.item}
                    onClick={() => handleNavigation(page.path, 'page')}
                    className="flex flex-col items-center justify-center p-3 rounded-lg transition-colors text-center bg-white/70 hover:bg-blue-200/50 shadow-sm"
                  >
                    <span className="text-2xl mb-1">{page.icon}</span>
                    <span className="text-xs font-medium text-gray-700">{page.item}</span>
                  </button>
                ))}
              </div>
              
              {/* Botão de contato no mobile */}
              <div className="pt-2">
                <a 
                  href="tel:+5511958757740" 
                  className="flex items-center justify-center w-full px-4 py-4 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white rounded-lg transition-all font-semibold shadow-lg"
                >
                  <span className="mr-2">📞</span>
                  Ligar Agora
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}