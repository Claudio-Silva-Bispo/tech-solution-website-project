import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { FaArrowUp, FaWhatsapp, FaSun, FaMoon } from 'react-icons/fa';
import { MdLanguage } from 'react-icons/md';
import '../globals.css';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ThemeProvider, useTheme } from '../contexts/ThemeContext';
import { LanguageProvider, useLanguage } from '../contexts/LanguageContext';
import Head from 'next/head';

function AppContent({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Head>
        {/* Favicon */}
        <link rel="icon" type="image/png" href="logo/logo-principal/original_sem_fundo_64.png" />
        <link rel="apple-touch-icon" href="logo/logo-principal/original_sem_fundo_64.png" />
        
        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
        {/* Schema da Organização (Global) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "BC Tech Solution & Advisory",
              "url": "https://bctechsolutionsadvisory.com/",
              "logo": "https://bctechsolutionsadvisory.com/logo/logo-principal/original_sem_fundo.png",
              "description": "Soluções em Tecnologia - Desenvolvimento Web, Aplicativos, Sistemas e Consultoria",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+55-11-95875-7740",
                "contactType": "Customer Service"
              },
              "sameAs": [
                "https://www.instagram.com/bctech.solutions/",
                "https://www.linkedin.com/in/claudiosbispo/"
              ]
            })
          }}
        />

        {/* Sitelinks Navigation - Ajudar na navegação */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "itemListElement": [
                {
                  "@type": "SiteNavigationElement",
                  "position": 1,
                  "name": "Desenvolvimento Web",
                  "description": "Sites, Landing Pages e E-commerce",
                  "url": "https://bctechsolutionsadvisory.com/WebDevelopment"
                },
                {
                  "@type": "SiteNavigationElement",
                  "position": 2,
                  "name": "Desenvolvimento de Sistemas e APlicativos",
                  "description": "Crie seus aplicativos ou Sistemas para serviços ou para vender seus produtos",
                  "url": "https://bctechsolutionsadvisory.com/AppSystems"
                },
                {
                  "@type": "SiteNavigationElement",
                  "position": 3,
                  "name": "Power BI",
                  "description": "Dashboards e análise de dados",
                  "url": "https://bctechsolutionsadvisory.com/PowerBIArchitecture"
                },
                {
                  "@type": "SiteNavigationElement",
                  "position": 4,
                  "name": "Engenharia de Dados",
                  "description": "Pipeline e arquitetura de dados",
                  "url": "https://bctechsolutionsadvisory.com/DataEngineering"
                },
                {
                  "@type": "SiteNavigationElement",
                  "position": 5,
                  "name": "Documentação e Treinamento",
                  "description": "Documente seus projetos e processos, além de capacitar sua equipe para usar o Power BI e uma melhor gestão dos Dados",
                  "url": "https://bctechsolutionsadvisory.com/DocumentationTrainingSection"
                },
                {
                  "@type": "SiteNavigationElement",
                  "position": 6,
                  "name": "Google Meu Negócio",
                  "description": "Presença no Google Maps",
                  "url": "https://bctechsolutionsadvisory.com/GoogleBusiness"
                },
                {
                  "@type": "SiteNavigationElement",
                  "position": 7,
                  "name": "Redes Sociais",
                  "description": "Gestão de Mídias Sociais",
                  "url": "https://bctechsolutionsadvisory.com/SocialMedia"
                },
                {
                  "@type": "SiteNavigationElement",
                  "position": 8,
                  "name": "Sobre nós",
                  "description": "Conheça um pouco dos membros e veja suas experiências que podem contribuir para o seu negócio",
                  "url": "https://bctechsolutionsadvisory.com/About"
                }
              ]
            })
          }}
        />
      </Head>
    
      <div className="flex flex-col min-h-screen relative">
        <Navbar />
        <main className="flex-1">
          <Component {...pageProps} />
        </main>
        <Footer />

        <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
          {/* Botão de Idioma */}
          <button
            onClick={toggleLanguage}
            className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-teal-600 text-white shadow-lg hover:from-green-600 hover:to-teal-700 transition-all duration-300 hover:scale-110 flex items-center justify-center"
            aria-label={language === 'en' ? 'Mudar para Português' : 'Change to English'}
          >
            <div className="flex items-center gap-1">
              <MdLanguage size={20} />
              {/* <span className="text-xs font-bold">{language === 'en' ? 'PT' : 'EN'}</span> */}
            </div>
          </button>

          {/* Botão de Tema */}
          <button
            onClick={toggleTheme}
            className="p-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 hover:scale-110"
            aria-label={isDarkMode ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
          >
            {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>

          {/* Botão WhatsApp */}
          <a
            href="https://wa.me/+11958757740"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-400 transition"
            aria-label="Fale conosco no WhatsApp"
          >
            <FaWhatsapp size={20} />
          </a>

          {/* Botão Voltar ao Topo */}
          {showScrollTop && (
            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-500 transition"
              aria-label="Voltar ao topo"
            >
              <FaArrowUp size={20} />
            </button>
          )}
        </div>
      </div>
    </>
  );
}

function MyApp(props: AppProps) {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <AppContent {...props} />
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default MyApp;