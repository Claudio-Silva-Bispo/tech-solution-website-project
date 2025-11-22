import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPersonIndex, setCurrentPersonIndex] = useState(0);
  const [showPhoto, setShowPhoto] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [imageError, setImageError] = useState<{[key: number]: boolean}>({});
  
  const { isDarkMode } = useTheme();
  const router = useRouter();
  
  // Dados das quatro pessoas
  const people = [
    {
      name: "Claudio Bispo",
      role: "Senior BI Analyst & Full Stack Developer",
      location: "São Paulo, Brasil",
      photo: "/assets/perfil/foto.png",
      bio: [
        "Desenvolvedor Full Stack e Engenheiro de Dados, com experiência em criar sistemas e trabalhar com dados. Transformo informações em soluções práticas, como sites, aplicativos e relatórios que ajudam empresas a tomar decisões.",
        "Já trabalhei em análises de dados, integração de sistemas e desenvolvimento de aplicações completas. Tenho formação em Desenvolvimento Full Stack e especializações em Big Data, BI e Gestão Financeira, o que me permite unir conhecimento técnico com visão de negócio.",
        "Abaixo eu conto um pouco sobre minha experiência profissional."
      ],
      emoji: "👨‍💻"
    },
    {
      name: "Wando Villar",
      role: "Data Engineer & Analista de BI",
      location: "São Paulo, Brasil",
      photo: "/assets/perfil/foto2.png",
      bio: [
        "Analista de BI e Especialista em Banco de Dados, com experiência em trabalhar diretamente com dados, realizando consultas SQL, tratamento, automação e organização estratégica de informações. Utilizo Python e boas práticas de engenharia para transformar dados brutos em insights valiosos que ajudam empresas a tomarem decisões com segurança e velocidade.",
        "Desenvolvo painéis completos e interativos no Power BI, estruturando indicadores, métricas e modelos de negócio para áreas como Financeiro, Administrativo, RH, Operações e Logística. Minha atuação envolve desde a coleta e organização dos dados até a modelagem e entrega final dos dashboards.",
        "Conheça mais sobre minha trajetória e projetos realizados."
      ],
      emoji: "👨‍💼"
    },
    {
      name: "Sara Galdino",
      role: "Gestão de Redes Sociais & Marketing Digital",
      location: "Minas Gerais, Brasil",
      photo: "/assets/perfil/foto3.png",
      bio: [
        "Faço Gestão de Redes Sociais e Marketing Digital, com foco em criar presença online estratégica e engajadora. Transformo marcas através de conteúdo visual impactante e estratégias personalizadas para cada plataforma.",
        "Cuido de todo o processo criativo: desde a criação de posts e stories, passando pela definição de paleta de cores e tipografias, até a identidade visual completa das redes sociais. Experiência em crescimento orgânico, análise de métricas e gestão de comunidades.",
        "Descubra como posso fortalecer a presença digital da sua marca."
      ],
      emoji: "👩‍💻"
    },
    {
      name: "Leandro Silva",
      role: "Especialista em Tráfego Pago & Performance",
      location: "São Paulo, Brasil",
      photo: "/assets/perfil/foto4.png",
      bio: [
        "Cuido do Tráfego Pago e Marketing de Performance, com experiência em gerar resultados mensuráveis através de campanhas estratégicas. Transformo investimento em anúncios em conversões reais e crescimento sustentável para o negócio.",
        "Gerencio campanhas em Google Ads, Meta Ads (Facebook e Instagram), LinkedIn Ads e outras plataformas, com foco em otimização de ROI, redução de custo por aquisição e aumento de conversões. Especializado em análise de dados, testes A/B e estratégias de funil completo.",
        "Veja como posso acelerar o crescimento da sua empresa através de anúncios estratégicos."
      ],
      emoji: "📈"
    }
  ];

  const currentPerson = people[currentPersonIndex];

  // Carrossel automático
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentPersonIndex((prevIndex) => (prevIndex + 1) % people.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, people.length]);

  // Animação de entrada
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

  // Mostrar foto após 2 segundos
  useEffect(() => {
    setShowPhoto(false);
    const timer = setTimeout(() => {
      setShowPhoto(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, [currentPersonIndex]);

  // Navegação manual
  const goToNext = () => {
    setCurrentPersonIndex((prevIndex) => (prevIndex + 1) % people.length);
  };

  const goToPrev = () => {
    setCurrentPersonIndex((prevIndex) => 
      prevIndex === 0 ? people.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentPersonIndex(index);
  };

  // Handler para erro de imagem
  const handleImageError = () => {
    setImageError(prev => ({
      ...prev,
      [currentPersonIndex]: true
    }));
  };

  // Reset do erro de imagem quando muda de pessoa
  useEffect(() => {
    // Não reseta o erro, mantém o estado para não tentar carregar novamente
  }, [currentPersonIndex]);

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
            <span>Sobre Nós</span>
          </div>
          
          <h2 className={`text-3xl md:text-5xl lg:text-4xl xl:text-5xl font-extrabold mb-6 ${
            isDarkMode
              ? 'bg-gradient-to-r from-white to-blue-400'
              : 'bg-gradient-to-r from-gray-900 to-blue-600'
          } bg-clip-text text-transparent pt-10 text-start lg:text-center`}>
            Transformando Dados e Soluções Tecnológicas em valor há mais de 12 Anos
          </h2>
          
          <p className={`text-lg lg:text-xl ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          } max-w-3xl mx-auto leading-relaxed text-start lg:text-center`}>
            Time de especialistas em criar soluções end-to-end para empresas
          </p>
        </div>

        {/* Carrossel */}
        <div 
          className={`${
            isDarkMode 
              ? 'bg-white/5 border-white/10' 
              : 'bg-white border-gray-200'
          } backdrop-blur-sm ring-1 rounded-2xl p-8 lg:p-12 mb-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } relative`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
            
            {/* Avatar/Profile */}
            <div className="text-center lg:text-left">
              <div className="w-32 h-32 lg:w-40 lg:h-40 mx-auto lg:mx-0 mb-6 rounded-2xl overflow-hidden flex items-center justify-center transition-all duration-500">
                {showPhoto && !imageError[currentPersonIndex] ? (
                  <img
                    src={currentPerson.photo} 
                    alt={`Foto de ${currentPerson.name}`}
                    className="w-full h-full object-cover"
                    onError={handleImageError}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-5xl lg:text-6xl bg-gradient-to-br from-blue-500 to-blue-600">
                    {currentPerson.emoji}
                  </div>
                )}
              </div>

              <h3 className={`text-xl font-bold mb-2 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {currentPerson.name}
              </h3>

              <div className={`${
                isDarkMode ? 'text-blue-400' : 'text-blue-600'
              } font-medium mb-4`}>
                {currentPerson.role}
              </div>
              <div className={`${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              } text-sm`}>
                {currentPerson.location}
              </div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-2 space-y-4">
              {currentPerson.bio.map((paragraph, index) => (
                <p 
                  key={index}
                  className={`${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  } leading-relaxed transition-opacity duration-500`}
                >
                  {paragraph}
                </p>
              ))}
              
              <div className="flex flex-col sm:flex-row gap-4 items-center pt-4">
                <button 
                  onClick={() => goToPage('/About')}
                  className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-4 py-4 lg:px-8 lg:py-4 rounded-lg font-semibold md:text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/25 flex items-center w-full justify-center"
                >
                  💼 Jornada Profissional
                </button>
              </div>
            </div>
          </div>

          {/* Botões de navegação */}
          <button
            onClick={goToPrev}
            className={`hidden md:absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 ${
              isDarkMode 
                ? 'bg-white/10 hover:bg-white/20 text-white' 
                : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
            } p-3 rounded-full transition-all duration-300 hover:scale-110`}
            aria-label="Anterior"
          >
            ←
          </button>
          
          <button
            onClick={goToNext}
            className={`hidden md:absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 ${
              isDarkMode 
                ? 'bg-white/10 hover:bg-white/20 text-white' 
                : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
            } p-3 rounded-full transition-all duration-300 hover:scale-110`}
            aria-label="Próximo"
          >
            →
          </button>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center gap-3">
          {people.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentPersonIndex
                  ? isDarkMode
                    ? 'w-12 h-3 bg-blue-400'
                    : 'w-12 h-3 bg-blue-600'
                  : isDarkMode
                  ? 'w-3 h-3 bg-white/30 hover:bg-white/50'
                  : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Ir para perfil ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;