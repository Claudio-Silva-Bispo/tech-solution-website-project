import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Hero: React.FC = () => {
  const { isDarkMode } = useTheme();

  const [activePanel, setActivePanel] = useState<'powerbi' | 'pipeline' | 'website' | 'google' | 'social'>('powerbi');
  const [currentPanelIndex, setCurrentPanelIndex] = useState(0);

  const panels = ['powerbi', 'pipeline', 'website', 'google', 'social'] as const;

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentPanelIndex + 1) % panels.length;
      setCurrentPanelIndex(nextIndex);
      setActivePanel(panels[nextIndex]);
    }, 10000);

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
      <section id="home" className={`min-h-screen flex items-center relative overflow-hidden ${
        isDarkMode 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white'
          : 'bg-gradient-to-br from-blue-50 via-sky-100 to-indigo-50 text-gray-900'
      }`}>
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-1/5 left-1/5 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/4 right-1/5 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-5 lg:px-8 xl:px-12 relative z-10 py-20 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center max-w-7xl mx-auto">
            {/* Hero Text */}
            <div className="animate-fadeInUp">
              <div className={`inline-flex items-center gap-2 rounded-full text-xs sm:text-sm font-medium mb-4 lg:mb-6 px-4 py-2 ${
                isDarkMode 
                  ? 'bg-blue-500/10 ring-1 ring-blue-500/30 text-blue-400'
                  : 'bg-blue-500/20 ring-1 ring-blue-500/40 text-blue-700'
              }`}>
                <span>⚡</span> <span>Tecnologia para Pequenos Negócios</span>
              </div>
              
              <h1 className={`text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-extrabold mb-4 lg:mb-6 leading-tight ${
                isDarkMode
                  ? 'bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent'
                  : 'bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent'
              }`}>
                Soluções para Pequenas Empresas que podem ajudar seu Negócio
              </h1>
              
              <p className={`text-sm lg:text-base xl:text-lg mb-6 lg:mb-8 leading-relaxed ${
                isDarkMode ? 'text-gray-400' : 'text-gray-700'
              }`}>
                Transformo dados em insights, crio dashboards inteligentes e desenvolvo sites profissionais para impulsionar o crescimento da sua empresa.
              </p>
              
              <div className="mb-6 lg:mb-8">
                <div className="flex flex-col gap-2 lg:gap-3">
                  {[
                    { icon: '🔧', text: 'Engenharia de Dados - Pipeline e Arquitetura' },
                    { icon: '📊', text: 'Power BI - Relatórios Inteligentes' },
                    { icon: '🌐', text: 'Desenvolvimento de Sites' },
                    { icon: '📍', text: 'Google Meu Negócio - Presença no Maps' },
                    { icon: '📱', text: 'Redes Sociais - Perfis Profissionais' }
                  ].map((service, index) => (
                    <div 
                      key={index}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-300 hover:translate-x-2 ${
                        isDarkMode
                          ? 'bg-blue-500/5 ring-1 ring-blue-500/20 hover:bg-blue-500/10'
                          : 'bg-blue-500/10 ring-1 ring-blue-500/30 hover:bg-blue-500/20'
                      }`}
                    >
                      <div className="text-lg sm:text-xl">{service.icon}</div>
                      <div className={`font-medium text-xs sm:text-sm ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-800'
                      }`}>{service.text}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 items-center">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold text-sm lg:text-base transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2"
                >
                  🚀 Faça um orçamento
                </button>
                <button 
                  onClick={() => scrollToSection('complete-service')}
                  className={`font-semibold flex items-center gap-2 transition-colors duration-300 text-sm lg:text-base ${
                    isDarkMode 
                      ? 'text-gray-300 hover:text-blue-400'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  Saiba mais →
                </button>
              </div>
            </div>
            
            {/* Hero Visual */}
            <div className="animate-fadeInRight w-full">
              <div className={`backdrop-blur-sm rounded-2xl p-3 sm:p-4 lg:p-6 shadow-2xl relative overflow-hidden ${
                isDarkMode
                  ? 'bg-white/5 ring-1 ring-white/10'
                  : 'bg-white/50 ring-1 ring-blue-200/50'
              }`}>
                
                {/* Tabs - COMPACTAS */}
                <div className="flex gap-1.5 sm:gap-2 justify-center flex-wrap mb-3">
                  {[
                    { key: "powerbi", label: "📊 Power BI" },
                    { key: "pipeline", label: "🔧 ETL" },
                    { key: "website", label: "🌐 Sites" },
                    { key: "google", label: "📍 Maps" },
                    { key: "social", label: "📱 Social" },
                  ].map((tab, index) => (
                    <button
                      key={tab.key}
                      onClick={() => handlePanelChange(tab.key as typeof activePanel, index)}
                      className={`px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs lg:text-sm font-medium transition-all duration-300 ring-1 ${
                        activePanel === tab.key
                          ? isDarkMode
                            ? "bg-blue-500/30 ring-blue-500/50 text-white"
                            : "bg-blue-500/40 ring-blue-500/60 text-blue-900"
                          : isDarkMode
                            ? "bg-blue-500/10 ring-blue-500/20 text-blue-400 hover:bg-blue-500/20"
                            : "bg-blue-500/20 ring-blue-500/30 text-blue-700 hover:bg-blue-500/30"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <div className="relative w-full h-[450px] sm:h-[550px] md:h-[600px] lg:h-[550px]">
                  {/* Power BI Panel */}
                  <div className={`absolute inset-0 transition-opacity duration-500 ${
                    activePanel === "powerbi" ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}>
                    <div className="p-2 sm:p-3 space-y-3 sm:space-y-4 h-full flex flex-col">
                      {/* Header - COMPACTO */}
                      <div className={`flex justify-between items-center pb-2 border-b ${
                        isDarkMode ? 'border-blue-500/20' : 'border-blue-300/30'
                      }`}>
                        <div className={`font-semibold text-xs sm:text-sm ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-800'
                        }`}>
                          Dashboard Executivo
                        </div>
                        <div className="flex items-center gap-1.5 text-green-500 text-[10px] sm:text-xs">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                          <span>Online</span>
                        </div>
                      </div>

                      {/* Metrics - COMPACTAS */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {[
                          { value: 'R$ 2.5M', label: 'Faturamento' },
                          { value: '+35%', label: 'Crescimento' },
                          { value: '120k', label: 'Clientes' },
                          { value: '98%', label: 'Satisfação' }
                        ].map((metric, idx) => (
                          <div key={idx} className={`rounded-lg p-2 sm:p-3 text-center ${
                            isDarkMode
                              ? 'bg-blue-500/10 ring-1 ring-blue-500/20'
                              : 'bg-blue-500/20 ring-1 ring-blue-500/30'
                          }`}>
                            <div className={`text-sm sm:text-lg lg:text-xl font-bold mb-0.5 ${
                              isDarkMode ? 'text-blue-400' : 'text-blue-700'
                            }`}>
                              {metric.value}
                            </div>
                            <div className={`text-[9px] sm:text-xs ${
                              isDarkMode ? 'text-gray-400' : 'text-gray-600'
                            }`}>{metric.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* Chart - COMPACTO */}
                      <div className={`rounded-lg p-2 sm:p-3 flex-1 ${
                        isDarkMode ? 'bg-white/5' : 'bg-white/50'
                      }`}>
                        <div className={`text-[10px] sm:text-xs font-medium mb-2 ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-800'
                        }`}>
                          Vendas Mensais
                        </div>
                        <div className="flex items-end justify-between gap-1 sm:gap-2 h-24 sm:h-32 lg:h-36 px-1">
                          {[
                            { value: 40, label: "Jan", amount: "R$ 120K" },
                            { value: 70, label: "Fev", amount: "R$ 210K" },
                            { value: 55, label: "Mar", amount: "R$ 165K" },
                            { value: 85, label: "Abr", amount: "R$ 255K" },
                            { value: 62, label: "Mai", amount: "R$ 186K" },
                            { value: 90, label: "Jun", amount: "R$ 270K" },
                          ].map((bar, index) => (
                            <div key={index} className="flex flex-col items-center flex-1 group relative h-full">
                              <div className="absolute -top-6 sm:-top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-[9px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                                {bar.amount}
                              </div>
                              
                              <div className="flex-1 flex items-end w-full">
                                <div
                                  className="w-full bg-gradient-to-t from-orange-600 via-orange-500 to-orange-400 rounded-sm shadow-lg hover:from-orange-500 hover:to-orange-300 transition-all duration-300"
                                  style={{ height: `${bar.value}%`, minWidth: '8px' }}
                                />
                              </div>
                              
                              <div className={`text-[9px] sm:text-xs mt-1 font-medium ${
                                isDarkMode ? 'text-gray-400' : 'text-gray-600'
                              }`}>{bar.label}</div>
                            </div>
                          ))}
                        </div>
                        
                      </div>
                      <div className={`rounded-lg p-2 ${
                        isDarkMode
                          ? 'bg-blue-500/10 ring-1 ring-blue-500/20'
                          : 'bg-blue-500/20 ring-1 ring-blue-500/30'
                      }`}>
                        <div className={`font-semibold text-[10px] sm:text-xs mb-1 ${
                          isDarkMode ? 'text-blue-400' : 'text-blue-700'
                        }`}>✨ Te ajudo a criar</div>
                        <ul className={`text-[9px] sm:text-xs space-y-0.5 ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          <li>• Crio Relatórios personalizados</li>
                          <li>• Preencho as informações importantes</li>
                          <li>• Layouts Profissionais</li>
                          <li>• Crio Documentação e Conceitos</li>
                          <li>• Aplico Treinamento para a equipe conduzir o projeto depois de pronto </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Pipeline Panel */}
                  <div className={`absolute inset-0 transition-opacity duration-500 ${
                    activePanel === "pipeline" ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}>

                  <div className="p-2 sm:p-3 space-y-3 sm:space-y-4 h-full flex flex-col">
                    <div className="flex flex-col justify-center items-center h-full sm:space-y-4 px-2">
                      {[
                        { icon: "📥", title: "Extração", desc: "Excel, APIs ou Bancos de Dados" },
                        { icon: "⚙️", title: "Transformação", desc: "Limpeza e Padronização" },
                        { icon: "📤", title: "Carregamento", desc: "Bancos estruturados e prontos" },
                      ].map((step, index) => (
                        <div key={index} className="w-full max-w-md">
                          <div className={`rounded-lg p-2 sm:p-3 text-center ${
                            isDarkMode
                              ? 'bg-blue-500/10 ring-1 ring-blue-500/20'
                              : 'bg-blue-500/20 ring-1 ring-blue-500/30'
                          }`}>
                            <div className="flex items-center justify-center gap-2 mb-1">
                              <span className="text-lg sm:text-xl">{step.icon}</span>
                              <span className={`font-semibold text-xs sm:text-sm ${
                                isDarkMode ? 'text-gray-300' : 'text-gray-800'
                              }`}>{step.title}</span>
                            </div>
                            <div className={`text-[10px] sm:text-xs ${
                              isDarkMode ? 'text-gray-400' : 'text-gray-600'
                            }`}>{step.desc}</div>
                          </div>
                          {index < 2 && (
                            <div className={`text-xl sm:text-2xl my-1.5 sm:my-2 text-center animate-bounce ${
                              isDarkMode ? 'text-blue-400' : 'text-blue-600'
                            }`}>↓</div>
                          )}
                        </div>
                        
                      ))}
                      
                    </div>

                    <div className={`rounded-lg p-2 ${
                        isDarkMode
                          ? 'bg-blue-500/10 ring-1 ring-blue-500/20'
                          : 'bg-blue-500/20 ring-1 ring-blue-500/30'
                      }`}>
                        <div className={`font-semibold text-[10px] sm:text-xs mb-1 ${
                          isDarkMode ? 'text-blue-400' : 'text-blue-700'
                        }`}>✨ Te ajudo a criar</div>
                        <ul className={`text-[9px] sm:text-xs space-y-0.5 ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          <li>• Estruturas Simples em Bancos Locais ou na Nuvem</li>
                          <li>• Desenho o Projeto com a equipe</li>
                          <li>• Acessos via API ou acesso local</li>
                          <li>• Crio Documentação e Conceitos</li>
                          <li>• Aplico Treinamento para a equipe conduzir o projeto depois de pronto </li>
                        </ul>
                      </div>
                    </div>
                    
                  </div>
                  

                  {/* Website Panel */}
                  <div className={`absolute inset-0 transition-opacity duration-500 ${
                    activePanel === "website" ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}>
                    <div className="p-2 sm:p-3 h-full">
                      <div className={`rounded-lg p-2 sm:p-3 font-mono h-full flex flex-col ${
                        isDarkMode ? 'bg-slate-900' : 'bg-gray-800'
                      }`}>
                        <div className={`flex gap-1.5 mb-2 sm:mb-3 pb-2 border-b ${
                          isDarkMode ? 'border-blue-500/20' : 'border-gray-600'
                        }`}>
                          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                        </div>

                        <div className="text-[10px] sm:text-xs leading-relaxed space-y-0.5 sm:space-y-1 text-gray-300 flex-1">
                          <div>&lt;header&gt;</div>
                          <div className="pl-2 sm:pl-4">&lt;nav&gt; <span className='text-orange-400'>Crie o site da sua Empresa</span> &lt;/nav&gt;</div>
                          <div>&lt;/header&gt;</div>
                          <div>&lt;main&gt;</div>
                          <div className="pl-2 sm:pl-4">&lt;h1&gt;<span className='text-orange-400'>Bem-vindos ao novo</span>&lt;/h1&gt;</div>
                          <div className="pl-2 sm:pl-4"><span className='text-orange-400'>Alavanque seus negócios</span></div>
                          <div>&lt;/main&gt;</div>
                        </div>

                        <div className="flex justify-end mt-3 sm:mt-4">
                          <div className="w-20 sm:w-24 h-14 sm:h-16 bg-white rounded shadow-lg overflow-hidden">
                            <div className="bg-gray-100 h-3 sm:h-4 flex items-center px-1 sm:px-2 gap-0.5 sm:gap-1">
                              <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                              <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                              <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                            </div>
                            <div className="p-1 sm:p-2 text-gray-800 text-[8px] sm:text-[10px] text-center">
                              <strong>Sua Empresa</strong>
                              <br />
                              Serviços Pro
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Google Meu Negócio Panel */}
                  <div className={`absolute inset-0 transition-opacity duration-500 ${
                    activePanel === "google" ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}>
                    <div className="p-2 sm:p-3 space-y-2 sm:space-y-3 h-full overflow-y-auto">
                      <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                        <div className="bg-white p-2 flex items-center gap-1.5 sm:gap-2">
                          <span className="text-base sm:text-lg">📍</span>
                          <span className="text-gray-800 font-semibold text-xs sm:text-sm">Sua Empresa no Google</span>
                        </div>

                        <div className="p-2 sm:p-3 bg-gray-50">
                          <h3 className="text-gray-900 font-bold text-sm sm:text-base mb-1">Sua Empresa</h3>
                          <div className="flex items-center gap-1 mb-2">
                            <div className="flex text-yellow-400 text-xs sm:text-sm">★★★★★</div>
                            <span className="text-gray-600 text-[10px] sm:text-xs">4.9 (127)</span>
                          </div>

                          <div className="space-y-1 sm:space-y-1.5 text-[10px] sm:text-xs">
                            <div className="flex gap-1.5"><span>📍</span><span className="text-gray-700">Rua Exemplo, 123</span></div>
                            <div className="flex gap-1.5"><span>🕐</span><span className="text-green-600 font-medium">Aberto</span></div>
                            <div className="flex gap-1.5"><span>📞</span><span className="text-blue-600">(11) 9999-9999</span></div>
                          </div>

                          <div className="grid grid-cols-3 gap-1 sm:gap-1.5 mt-2 sm:mt-3">
                            <div className="bg-blue-100 h-10 sm:h-12 rounded flex items-center justify-center text-base sm:text-lg">🏢</div>
                            <div className="bg-green-100 h-10 sm:h-12 rounded flex items-center justify-center text-base sm:text-lg">✅</div>
                            <div className="bg-orange-100 h-10 sm:h-12 rounded flex items-center justify-center text-base sm:text-lg">👥</div>
                          </div>
                        </div>
                      </div>

                      <div className={`rounded-lg p-2 h-[20vh] ${
                        isDarkMode
                          ? 'bg-blue-500/10 ring-1 ring-blue-500/20'
                          : 'bg-blue-500/20 ring-1 ring-blue-500/30'
                      }`}>
                        <div className={`font-semibold text-[10px] sm:text-xs mb-1 ${
                          isDarkMode ? 'text-blue-400' : 'text-blue-700'
                        }`}>✨ Te ajudo a cadastrar</div>
                        <ul className={`text-[9px] sm:text-xs space-y-0.5 ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          <li>• Sua conta no Google de forma simples e rápida</li>
                          <li>• Preenchimento de todas informações da empresa</li>
                          <li>• Upload de fotos profissionais do negócio</li>
                          <li>• Verificação da conta para aparecer no Maps</li>
                          <li>• Configuração de horários e localização</li>
                          <li>• Configuração de categorias e serviços</li>
                          <li>• Deixo sua empresa visível no Google Maps</li>
                          <li>• Perfil completo e avaliações dos clientes</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Redes Sociais Panel */}
                  <div className={`absolute inset-0 transition-opacity duration-500 ${
                    activePanel === "social" ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}>
                    <div className="p-2 sm:p-3 space-y-2 sm:space-y-3 h-full overflow-y-auto">
                      <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-lg p-2 sm:p-3 text-white">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center text-base sm:text-lg">
                            🏢
                          </div>
                          <div>
                            <div className="font-bold text-xs sm:text-sm">@suaempresa</div>
                            <div className="text-[10px] sm:text-xs opacity-90">Oficial</div>
                          </div>
                        </div>
                        
                        <div className="flex gap-3 sm:gap-4 mb-2 text-[10px] sm:text-xs">
                          <div><strong>342</strong> posts</div>
                          <div><strong>2.8k</strong> seguidores</div>
                        </div>

                        <div className="grid grid-cols-3 gap-1">
                          <div className="aspect-square bg-white/20 rounded"></div>
                          <div className="aspect-square bg-white/20 rounded"></div>
                          <div className="aspect-square bg-white/20 rounded"></div>
                        </div>
                      </div>

                      <div className="bg-blue-600 rounded-lg p-2 sm:p-3 text-white">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-lg flex items-center justify-center text-base sm:text-lg">🏢</div>
                          <div>
                            <div className="font-bold text-xs sm:text-sm">Sua Empresa</div>
                            <div className="text-[10px] sm:text-xs opacity-90">Serviços</div>
                          </div>
                        </div>
                        <div className="text-[10px] sm:text-xs">⭐ 4.9 • 👥 1.2k curtidas</div>
                      </div>

                      <div className={`rounded-lg p-2 ${
                        isDarkMode
                          ? 'bg-blue-500/10 ring-1 ring-blue-500/20'
                          : 'bg-blue-500/20 ring-1 ring-blue-500/30'
                      }`}>
                        <div className={`font-semibold text-[10px] sm:text-xs mb-1 ${
                          isDarkMode ? 'text-blue-400' : 'text-blue-700'
                        }`}>📱 Criação de Perfis</div>
                        <ul className={`text-[9px] sm:text-xs space-y-0.5 ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          <li>• Instagram e Facebook</li>
                          <li>• Bio e fotos otimizadas</li>
                          <li>• Estratégia inicial</li>
                          <li>• Identidade visual da marca</li>
                          <li>• Primeiros posts estratégicos</li>
                          <li>• Planejamento dos conteúdos</li>
                        </ul>
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
        
        .animate-fadeInUp {
          animation: fadeInUp 1s ease;
        }
        
        .animate-fadeInRight {
          animation: fadeInRight 1s ease 0.8s both;
        }
      `}</style>
    </div>
  );
};

export default Hero;