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
            <div className="animate-fadeInUp pt-10 md:pt-0">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-sm text-blue-400 font-medium mb-6 min-w-full md:min-w-sm">
                <span className='p-3'>⚡</span> <p className='p-3'>Tecnologia para Pequenos Negócios</p>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent pt-5 md:pt-0">
                Soluções para Pequenas Empresas que podem ajudar seu Negócio
              </h1>
              
              <p className="md:text-xl text-gray-400 mb-10 leading-relaxed">
                Transformo dados em insights, crio dashboards inteligentes e desenvolvo sites profissionais para impulsionar o crescimento da sua empresa..
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
                  🚀 Consultoria Gratuita
                </button>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="text-gray-300 font-semibold flex items-center gap-2 hover:text-blue-500 transition-colors duration-300"
                >
                  Ver Projetos →
                </button>
              </div>
            </div>
            
            {/* Hero Visual */}
            <div className="animate-fadeInRight">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                {/* Visual Tabs */}
                <div className="flex gap-4 mb-8 justify-center flex-wrap">
                  {[
                    { key: 'powerbi', label: '📊 Power BI', index: 0 },
                    { key: 'pipeline', label: '🔧 ETL', index: 1 },
                    { key: 'website', label: '🌐 Sites', index: 2 }
                  ].map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => handlePanelChange(tab.key as typeof activePanel, tab.index)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        activePanel === tab.key
                          ? 'bg-blue-500/30 border-blue-500/50 text-white'
                          : 'bg-blue-500/10 border-blue-500/20 text-blue-400 hover:bg-blue-500/20'
                      } border`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
                
                <div className="h-80 relative">
                  {/* Power BI Panel */}
                  <div className={`absolute inset-0 transition-all duration-500 ${
                    activePanel === 'powerbi' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-6 h-full">
                      <div className="flex justify-between items-center mb-6 pb-4 border-b border-blue-500/20">
                        <div className="text-gray-300 font-semibold text-lg">Dashboard Executivo</div>
                        <div className="flex items-center gap-2 text-green-400 text-sm">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span>Atualizado</span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 text-center">
                          <div className="text-blue-400 text-2xl font-bold mb-1">R$ 2.5M</div>
                          <div className="text-gray-400 text-xs">Faturamento</div>
                        </div>
                        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 text-center">
                          <div className="text-blue-400 text-2xl font-bold mb-1">+35%</div>
                          <div className="text-gray-400 text-xs">Crescimento</div>
                        </div>
                      </div>
                      
                      <div className="bg-white/5 border border-white/5 rounded-lg h-24 relative overflow-hidden">
                        <div className="flex items-end h-full p-4 gap-1">
                          {[40, 70, 55, 85, 62, 90].map((height, index) => (
                            <div
                              key={index}
                              className="bg-gradient-to-t from-blue-500 to-blue-400 flex-1 rounded-sm opacity-80"
                              style={{ 
                                height: `${height}%`,
                                animation: `barGrow 1.5s ease-in-out ${index * 0.1}s both`
                              }}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Data Pipeline Panel */}
                  <div className={`absolute inset-0 transition-all duration-500 ${
                    activePanel === 'pipeline' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}>
                    <div className="h-full flex flex-col justify-between">
                      {[
                        { icon: '📥', title: 'Extract', desc: 'Excel, APIs, Bancos' },
                        { icon: '⚙️', title: 'Transform', desc: 'Limpeza e Padronização' },
                        { icon: '📤', title: 'Load', desc: 'Data Warehouse' }
                      ].map((step, index) => (
                        <div key={index}>
                          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 relative">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="text-xl">{step.icon}</div>
                              <div className="text-gray-300 font-semibold text-sm">{step.title}</div>
                            </div>
                            <div className="text-gray-400 text-xs">{step.desc}</div>
                            <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 text-blue-400 opacity-70">
                              →
                            </div>
                          </div>
                          {index < 2 && (
                            <div className="text-center text-blue-500 text-xl my-2 animate-bounce">↓</div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Website Development Panel */}
                  <div className={`absolute inset-0 transition-all duration-500 ${
                    activePanel === 'website' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}>
                    <div className="h-full relative">
                      <div className="bg-slate-900 border border-blue-500/30 rounded-lg h-full p-4 font-mono relative overflow-hidden">
                        <div className="flex gap-2 mb-4 pb-2 border-b border-blue-500/20">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        
                        <div className="text-xs leading-relaxed">
                          {[
                            '<header>',
                            '  <nav class="navbar">',
                            '    Sua Empresa',
                            '  </nav>',
                            '</header>',
                            '<main class="hero">'
                          ].map((line, index) => (
                            <div 
                              key={index}
                              className="mb-1 opacity-0 animate-pulse"
                              style={{ 
                                animationDelay: `${0.2 + index * 0.2}s`,
                                animationFillMode: 'forwards'
                              }}
                            >
                              {line.includes('<') ? (
                                <>
                                  <span className="text-blue-400">{line.split('=')[0]}</span>
                                  {line.includes('=') && (
                                    <>
                                      <span className="text-green-400">=</span>
                                      <span className="text-yellow-400">{line.split('=')[1]}</span>
                                    </>
                                  )}
                                </>
                              ) : (
                                <span className="text-gray-300">{line}</span>
                              )}
                            </div>
                          ))}
                        </div>
                        
                        <div className="absolute bottom-4 right-4 w-32 h-20 bg-white rounded shadow-lg overflow-hidden">
                          <div className="bg-gray-100 h-5 flex items-center px-2 gap-1">
                            <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                            <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                            <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                          </div>
                          <div className="p-2 text-gray-800 text-xs text-center">
                            <strong>Sua Empresa</strong><br />
                            Serviços Profissionais
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
          from { height: 0; }
          to { height: var(--height); }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 1s ease;
        }
        
        .animate-fadeInRight {
          animation: fadeInRight 1s ease 0.3s both;
        }
      `}</style>
    </div>
  );
};

export default Hero;