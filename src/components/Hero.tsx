import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [activePanel, setActivePanel] = useState<'powerbi' | 'pipeline' | 'website'>('powerbi');
  const [currentPanelIndex, setCurrentPanelIndex] = useState(0);

  const panels = ['powerbi', 'pipeline', 'website'] as const;

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentPanelIndex + 1) % panels.length;
      setCurrentPanelIndex(nextIndex);
      setActivePanel(panels[nextIndex]);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentPanelIndex]);

  const handlePanelChange = (panelType: typeof activePanel, index: number) => {
    setActivePanel(panelType);
    setCurrentPanelIndex(index);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section id="home" className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex items-center relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-1/5 left-1/5 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/4 right-1/5 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          </div>
        </div>

        <div className="container mx-auto px-5 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Hero Text */}
            <div className="animate-fadeInUp pt-10 xl:pt-0">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-sm text-blue-400 font-medium mb-6 min-w-full md:min-w-sm">
                <span className='p-3'>⚡</span> <p className='p-3'>Tecnologia para Pequenos Negócios</p>
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-4xl xl:text-5xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent pt-5 xl:pt-0">
                Soluções para Pequenas Empresas que podem ajudar seu Negócio
              </h1>
              
              <p className="md:text-xl text-gray-400 mb-10 leading-relaxed">
                Transformo dados em insights, crio dashboards inteligentes e desenvolvo sites profissionais para impulsionar o crescimento da sua empresa.
              </p>
              
              <div className="mb-10">
                <div className="flex flex-col gap-4">
                  {[
                    { icon: '🔧', text: 'Engenharia de Dados - Pipeline e Arquitetura' },
                    { icon: '📊', text: 'Power BI - Dashboards e Relatórios Inteligentes' },
                    { icon: '🌐', text: 'Desenvolvimento Web - Sites Profissionais' }
                  ].map((service, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-4 p-3 bg-blue-500/5 border border-blue-500/20 rounded-lg transition-all duration-300 hover:bg-blue-500/10 hover:translate-x-2"
                    >
                      <div className="text-2xl w-10 text-center p-3">{service.icon}</div>
                      <div className="text-gray-300 font-medium">{service.text}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/25 flex items-center gap-2"
                >
                  🚀 Explore Projetos
                </button>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="text-gray-300 font-semibold flex items-center gap-2 hover:text-blue-500 transition-colors duration-300"
                >
                  Método →
                </button>
              </div>
            </div>
            
      
                  <div className="animate-fadeInRight w-full">
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 lg:p-8 shadow-2xl relative overflow-hidden">
        
        {/* Tabs */}
        <div className="flex gap-2 lg:gap-3 justify-center flex-wrap pt-6 min-w-full  h-24 md:h-16 xl:h-16 md:mb-8 lg:mb-5 xl:mb-5">
          {[
            { key: "powerbi", label: "📊 Power BI" },
            { key: "pipeline", label: "🔧 ETL" },
            { key: "website", label: "🌐 Sites" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActivePanel(tab.key as typeof activePanel)}
              className={`px-4 py-2 lg:px-10 lg:py-3 rounded-full text-sm lg:text-xl font-medium transition-all duration-300 border w-[15vh] md:w-[20vh] ${
                activePanel === tab.key
                  ? "bg-blue-500/30 border-blue-500/50 text-white"
                  : "bg-blue-500/10 border-blue-500/20 text-blue-400 hover:bg-blue-500/20"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

          {/* Panels */}
          <div className="min-h-[60vh] relative w-full">
            
            {/* Power BI Panel */}
            {activePanel === "powerbi" && (
              <div className="transition-all duration-500 p-4 space-y-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-3 border-b border-blue-500/20 pb-3">
                  <div className="text-gray-300 font-semibold text-base lg:text-lg">
                    Dashboard Executivo
                  </div>
                  <div className="flex items-center gap-2 text-green-400 text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>Online</span>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 text-center">
                    <div className="text-blue-400 text-xl lg:text-2xl font-bold mb-1">
                      R$ 2.5M
                    </div>
                    <div className="text-gray-400 text-xs">Faturamento</div>
                  </div>
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 text-center">
                    <div className="text-blue-400 text-xl lg:text-2xl font-bold mb-1">
                      +35%
                    </div>
                    <div className="text-gray-400 text-xs">Crescimento</div>
                  </div>
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 text-center">
                    <div className="text-blue-400 text-xl lg:text-2xl font-bold mb-1">
                      120k
                    </div>
                    <div className="text-gray-400 text-xs">Clientes</div>
                  </div>
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 text-center">
                    <div className="text-blue-400 text-xl lg:text-2xl font-bold mb-1">
                      98%
                    </div>
                    <div className="text-gray-400 text-xs">Satisfação</div>
                  </div>
                </div>

                {/* Chart */}
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <div className="text-gray-300 text-sm font-medium mb-4 p-10">
                    Vendas Mensais
                  </div>
                  <div className="flex items-end justify-between gap-2 h-48 sm:h-64 p-5">
                    {[
                      { value: 40, label: "Jan" },
                      { value: 70, label: "Fev" },
                      { value: 55, label: "Mar" },
                      { value: 85, label: "Abr" },
                      { value: 62, label: "Mai" },
                      { value: 90, label: "Jun" },
                    ].map((bar, index) => (
                      <div key={index} className="flex flex-col items-center flex-1">
                        <div
                          className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded opacity-80 transition-all duration-700 ease-out"
                          style={{ height: `${bar.value}%` }}
                        />
                        <div className="text-gray-400 text-xs mt-1">{bar.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Pipeline Panel */}
            {activePanel === "pipeline" && (
              <div className="transition-all duration-500 flex flex-col">
                {[
                  { icon: "📥", title: "Extração das Informações", desc: "Informações salvas em Excel, APIs ou Bancos de Dados" },
                  { icon: "⚙️", title: "Transformação dos Dados", desc: "Limpeza e Padronização dos dados" },
                  { icon: "📤", title: "Carregar os dados", desc: "Criação de bancos estruturados e de fácil uso pelo usuário" },
                ].map((step, index) => (
                  <div key={index} className="flex flex-col items-center text-center p-5">
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6 w-full mb-3">
                      <div className="flex items-center justify-center gap-2 p-3 md:mb-2 md:p-5">
                        <span className="text-xl">{step.icon}</span>
                        <span className="text-gray-300 font-semibold">{step.title}</span>
                      </div>
                      <div className="text-gray-400 text-sm mb-5">{step.desc}</div>
                    </div>
                    {index < 2 && (
                      <div className="text-blue-500 text-xl my-2 animate-bounce">↓</div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Website Panel */}
            {activePanel === "website" && (
              <div className="transition-all duration-500 p-5">
                <div className="bg-slate-900 rounded-lg p-4 font-mono h-[60vh]">
                  {/* Terminal Header */}
                  <div className="flex gap-2 mb-4 pb-2 border-b border-blue-500/20">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>

                  {/* Code */}
                  <div className="text-sm leading-relaxed space-y-1 text-gray-300">
                    <div>&lt;header&gt;</div>
                    <div className="pl-4">&lt;nav class="navbar"&gt; Crie o site da sua Empresa &lt;/nav&gt;</div>
                    <div>&lt;/header&gt;</div>
                    <div>&lt;main class="hero"&gt;</div>
                    <div className="pl-4">&lt;h1&gt;Bem-vindos&lt;/h1&gt;</div>
                    <div className="pl-4">&lt;h1&gt;ao novo e faça tudo diferente utilizando a internet para alavancar seus negócios&lt;/h1&gt;</div>
                    <div>&lt;/main&gt;</div>
                  </div>

                  {/* Preview */}
                  <div className="flex justify-end mt-6">
                    <div className="w-28 h-20 bg-white rounded shadow-lg overflow-hidden">
                      <div className="bg-gray-100 h-5 flex items-center px-2 gap-1">
                        <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                        <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                        <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                      </div>
                      <div className="p-2 text-gray-800 text-xs text-center">
                        <strong>Sua Empresa</strong>
                        <br />
                        Serviços Profissionais
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
      </div>
    </div>
          </div>
        </div>
        
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes barGrow {
          from { 
            height: 0;
            opacity: 0;
          }
          to { 
            height: var(--height);
            opacity: 1;
          }
        }
        
        @keyframes typeCode {
          from { 
            opacity: 0; 
            transform: translateX(-10px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 1s ease;
        }
        
        .animate-fadeInRight {
          animation: fadeInRight 1s ease 0.5s both;
        }
      `}</style>
    </div>
  );
};

export default Hero;