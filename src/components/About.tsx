import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activePanel, setActivePanel] = useState<'powerbi' | 'pipeline' | 'website'>('powerbi');
  const [currentPanelIndex, setCurrentPanelIndex] = useState(0);
  const [showPhoto, setShowPhoto] = useState(false);
  
  const { isDarkMode } = useTheme();
  const panels = ['powerbi', 'pipeline', 'website'] as const;
  const router = useRouter();
  
  useEffect(() => {
      const interval = setInterval(() => {
        const nextIndex = (currentPanelIndex + 1) % panels.length;
        setCurrentPanelIndex(nextIndex);
        setActivePanel(panels[nextIndex]);
      }, 4000);
  
      return () => clearInterval(interval);
  }, [currentPanelIndex]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('about');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const goToPage = (path: string) => {
    router.push(path);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPhoto(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

 
  return (
    <section 
      id="about" 
      className={`relative ${
        isDarkMode 
          ? 'bg-gradient-to-br from-gray-800 to-gray-900 text-white' 
          : 'bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900'
      } py-20 lg:py-32 overflow-hidden`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className={`absolute top-1/4 right-1/4 w-96 h-96 ${
            isDarkMode ? 'bg-blue-500/20' : 'bg-blue-400/30'
          } rounded-full blur-3xl`}></div>
          <div className={`absolute bottom-1/4 left-1/4 w-80 h-80 ${
            isDarkMode ? 'bg-blue-500/15' : 'bg-blue-400/25'
          } rounded-full blur-3xl`}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className={`inline-flex items-center gap-2 ${
            isDarkMode 
              ? 'bg-blue-500/15 border-blue-500/30 text-blue-400' 
              : 'bg-blue-100 border-blue-300 text-blue-600'
          } ring-1 rounded-full px-4 py-2 text-sm font-medium mb-6`}>
            <span>👨‍💼</span>
            <span>Sobre Mim</span>
          </div>
          
          <h2 className={`text-3xl md:text-5xl lg:text-4xl xl:text-5xl font-extrabold mb-6 ${
            isDarkMode
              ? 'bg-gradient-to-r from-white to-blue-400'
              : 'bg-gradient-to-r from-gray-900 to-blue-600'
          } bg-clip-text text-transparent pt-10 text-start lg:text-center`}>
            Transformando Dados e Soluções em valor há mais de 12 Anos
          </h2>
          
          <p className={`text-lg lg:text-xl ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          } max-w-3xl mx-auto leading-relaxed text-start lg:text-center`}>
            Desenvolvedor Full Stack e Engenheiro de Dados especializado em criar soluções end-to-end para empresas
          </p>
        </div>

        {/* Personal Intro */}
        <div className={`${
          isDarkMode 
            ? 'bg-white/5 border-white/10' 
            : 'bg-white border-gray-200'
        } backdrop-blur-sm ring-1 rounded-2xl p-8 lg:p-12 mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
            
            {/* Avatar/Profile */}
            <div className="text-center lg:text-left">
              <div className="w-32 h-32 lg:w-40 lg:h-40 mx-auto lg:mx-0 mb-6 rounded-2xl overflow-hidden flex items-center justify-center">
                {showPhoto ? (
                  <img
                    src="/assets/perfil/foto.png" 
                    alt="Foto do Consultor"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-5xl lg:text-6xl bg-gradient-to-br from-blue-500 to-blue-600">
                    👨‍💻
                  </div>
                )}
              </div>

              <div className={`${
                isDarkMode ? 'text-blue-400' : 'text-blue-600'
              } font-medium mb-4`}>
                Senior BI Analyst & Full Stack Developer
              </div>
              <div className={`${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              } text-sm`}>
                São Paulo, Brasil
              </div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-2 space-y-4">
              <p className={`${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              } leading-relaxed`}>
                Sou Desenvolvedor Full Stack e Engenheiro de Dados, com experiência em criar sistemas e trabalhar com dados. Transformo informações em soluções práticas, como sites, aplicativos e relatórios que ajudam empresas a tomar decisões.
              </p>
              <p className={`${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              } leading-relaxed`}>
                Já trabalhei em análises de dados, integração de sistemas e desenvolvimento de aplicações completas. Tenho formação em Desenvolvimento Full Stack e especializações em Big Data, BI e Gestão Financeira, o que me permite unir conhecimento técnico com visão de negócio.
              </p>
              <p className={`${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              } leading-relaxed`}>
                Abaixo eu conto um pouco sobre minha experiência profissional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <button 
                  onClick={() => goToPage('/About')}
                  className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-4 py-4 lg:px-8 lg:py-4 rounded-lg font-semibold md:text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/25 flex items-center w-full justify-center"
                >
                  💼 Minha jornada Profissional
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;