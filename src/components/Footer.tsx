
import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = () => {
    if (email) {
      alert('Obrigado! Você foi inscrito na nossa newsletter.');
      setEmail('');
    }
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-800 via-gray-900 to-gray-900 text-white">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/5 via-transparent to-transparent"></div>
      
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          
          {/* Coluna 1 - Empresa */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-lg lg:text-xl font-bold text-white">
                TD
              </div>
              <div className="text-xl lg:text-2xl font-bold text-blue-400">
                TechData Solutions
              </div>
            </div>
            
            {/* Tagline */}
            <p className="text-gray-400 mb-6 text-base lg:text-lg font-medium">
              Transformando dados em decisões estratégicas
            </p>
            
            {/* Description */}
            <p className="text-gray-300 text-sm lg:text-base leading-relaxed mb-6 max-w-md">
              Especialista em Engenharia de Dados, Power BI e desenvolvimento web 
              para pequenas empresas que querem crescer com inteligência.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 lg:gap-4">
              <a 
                href="https://wa.me/5511999999999" 
                className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-500/10 border border-blue-500/20 rounded-lg flex items-center justify-center text-lg lg:text-xl hover:bg-blue-500/20 hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-300"
                aria-label="WhatsApp"
              >
                📱
              </a>
              <a 
                href="mailto:contato@techdatasolutions.com.br" 
                className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-500/10 border border-blue-500/20 rounded-lg flex items-center justify-center text-lg lg:text-xl hover:bg-blue-500/20 hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-300"
                aria-label="Email"
              >
                📧
              </a>
              <a 
                href="#" 
                className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-500/10 border border-blue-500/20 rounded-lg flex items-center justify-center text-lg lg:text-xl hover:bg-blue-500/20 hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-300"
                aria-label="LinkedIn"
              >
                💼
              </a>
              <a 
                href="#" 
                className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-500/10 border border-blue-500/20 rounded-lg flex items-center justify-center text-lg lg:text-xl hover:bg-blue-500/20 hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-300"
                aria-label="Instagram"
              >
                📸
              </a>
            </div>
          </div>

          {/* Coluna 2 - Serviços */}
          <div>
            <h3 className="text-lg lg:text-xl font-bold text-gray-200 mb-6">
              Serviços
            </h3>
            <ul className="space-y-3 lg:space-y-4">
              <li>
                <a 
                  href="#data-engineering" 
                  className="text-gray-400 hover:text-blue-400 text-sm lg:text-base transition-colors duration-300 block"
                >
                  Engenharia de Dados
                </a>
              </li>
              <li>
                <a 
                  href="#bi-architecture" 
                  className="text-gray-400 hover:text-blue-400 text-sm lg:text-base transition-colors duration-300 block"
                >
                  Power BI
                </a>
              </li>
              <li>
                <a 
                  href="#web-development" 
                  className="text-gray-400 hover:text-blue-400 text-sm lg:text-base transition-colors duration-300 block"
                >
                  Desenvolvimento Web
                </a>
              </li>
              <li>
                <a 
                  href="#consulting" 
                  className="text-gray-400 hover:text-blue-400 text-sm lg:text-base transition-colors duration-300 block"
                >
                  Consultoria BI
                </a>
              </li>
              <li>
                <a 
                  href="#training" 
                  className="text-gray-400 hover:text-blue-400 text-sm lg:text-base transition-colors duration-300 block"
                >
                  Treinamentos
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3 - Empresa */}
          <div>
            <h3 className="text-lg lg:text-xl font-bold text-gray-200 mb-6">
              Empresa
            </h3>
            <ul className="space-y-3 lg:space-y-4">
              <li>
                <a 
                  href="#about" 
                  className="text-gray-400 hover:text-blue-400 text-sm lg:text-base transition-colors duration-300 block"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a 
                  href="#portfolio" 
                  className="text-gray-400 hover:text-blue-400 text-sm lg:text-base transition-colors duration-300 block"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a 
                  href="#testimonials" 
                  className="text-gray-400 hover:text-blue-400 text-sm lg:text-base transition-colors duration-300 block"
                >
                  Depoimentos
                </a>
              </li>
              <li>
                <a 
                  href="#blog" 
                  className="text-gray-400 hover:text-blue-400 text-sm lg:text-base transition-colors duration-300 block"
                >
                  Blog
                </a>
              </li>
              <li>
                <a 
                  href="#career" 
                  className="text-gray-400 hover:text-blue-400 text-sm lg:text-base transition-colors duration-300 block"
                >
                  Carreiras
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Coluna 4 - Contato (Full width on mobile) */}
        <div className="mb-12 lg:mb-16">
          <h3 className="text-lg lg:text-xl font-bold text-gray-200 mb-6">
            Contato
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Email */}
            <div className="flex items-start gap-4">
              <span className="text-xl lg:text-2xl mt-1">📧</span>
              <div>
                <div className="text-xs lg:text-sm text-gray-400 mb-1">Email</div>
                <a 
                  href="mailto:contato@techdatasolutions.com.br" 
                  className="text-gray-200 text-sm lg:text-base hover:text-blue-400 transition-colors duration-300 break-all"
                >
                  contato@techdatasolutions.com.br
                </a>
              </div>
            </div>
            
            {/* WhatsApp */}
            <div className="flex items-start gap-4">
              <span className="text-xl lg:text-2xl mt-1">📱</span>
              <div>
                <div className="text-xs lg:text-sm text-gray-400 mb-1">WhatsApp</div>
                <a 
                  href="https://wa.me/5511999999999" 
                  className="text-gray-200 text-sm lg:text-base hover:text-blue-400 transition-colors duration-300"
                >
                  (11) 99999-9999
                </a>
              </div>
            </div>
            
            {/* Location */}
            <div className="flex items-start gap-4">
              <span className="text-xl lg:text-2xl mt-1">📍</span>
              <div>
                <div className="text-xs lg:text-sm text-gray-400 mb-1">Localização</div>
                <div className="text-gray-200 text-sm lg:text-base">
                  São Paulo, SP
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl lg:rounded-2xl p-6 lg:p-8 mb-8 lg:mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-8">
            <div className="lg:max-w-md">
              <h3 className="text-lg lg:text-2xl font-bold text-gray-200 mb-2 lg:mb-3">
                📊 Newsletter Tech
              </h3>
              <p className="text-gray-400 text-sm lg:text-base">
                Receba dicas exclusivas sobre BI, dados e tecnologia para pequenas empresas
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 lg:min-w-80">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-3 lg:px-5 lg:py-4 bg-white/5 border border-white/10 rounded-lg lg:rounded-xl text-white text-sm lg:text-base placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all duration-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button 
                onClick={handleNewsletterSubmit}
                className="px-6 py-3 lg:px-8 lg:py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg lg:rounded-xl hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 text-sm lg:text-base whitespace-nowrap"
              >
                Inscrever-se
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-6 lg:pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 lg:gap-6">
            <div className="text-gray-400 text-sm lg:text-base text-center sm:text-left">
              © 2025 TechData Solutions. Todos os direitos reservados.
            </div>
            <div className="flex flex-wrap justify-center sm:justify-end gap-4 lg:gap-8">
              <a 
                href="#privacy" 
                className="text-gray-400 hover:text-blue-400 text-sm lg:text-base transition-colors duration-300"
              >
                Política de Privacidade
              </a>
              <a 
                href="#terms" 
                className="text-gray-400 hover:text-blue-400 text-sm lg:text-base transition-colors duration-300"
              >
                Termos de Uso
              </a>
              <a 
                href="#cookies" 
                className="text-gray-400 hover:text-blue-400 text-sm lg:text-base transition-colors duration-300"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;