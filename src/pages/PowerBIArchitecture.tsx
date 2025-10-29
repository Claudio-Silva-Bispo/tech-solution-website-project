import Head from 'next/head';
import React, { useEffect, useState } from 'react';

const PowerBIArchitecture = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('bi-architecture');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const workspaces = [
    {
      icon: '🔧',
      name: 'Desenvolvimento',
      users: '👤 Desenvolvedores',
      purpose: 'Criação e testes',
      type: 'development'
    },
    {
      icon: '🧪',
      name: 'Homologação',
      users: '👥 Key Users',
      purpose: 'Validação e homologação',
      type: 'staging'
    },
    {
      icon: '🚀',
      name: 'Produção',
      users: '🌍 Todos os usuários',
      purpose: 'Relatórios finais',
      type: 'production'
    }
  ];

  const datasets = [
    {
      name: '📈 Vendas Dataset',
      mode: 'Import Mode',
      refresh: '🔄 6x/dia',
      size: '2.5GB'
    },
    {
      name: '👥 Usuários Dataset',
      mode: 'DirectQuery',
      refresh: '⚡ Real-time',
      size: 'Live'
    },
    {
      name: '📦 Estoque Dataset',
      mode: 'Composite',
      refresh: '🔄 2x/dia',
      size: '800MB'
    }
  ];

  const reportCategories = [
    {
      icon: '👔',
      name: 'Executivo',
      access: 'Premium Users',
      type: 'executive',
      color: 'amber',
      reports: [
        {
          name: '📊 Dashboard CEO',
          features: ['Real-time KPIs', 'Atualizações frequentes', 'Segurança em cada Página']
        },
        {
          name: '💰 Financial Overview',
          features: ['Segurança em cada Página', 'Auto-refresh','Controle de uso']
        }
      ]
    },
    {
      icon: '⚙️',
      name: 'Operacional',
      access: 'Pro Users',
      type: 'operational',
      color: 'blue',
      reports: [
        {
          name: '📈 Sales Performance',
          features: ['Drill-through', 'Bookmarks']
        },
        {
          name: '🎯 Campanhas e Metas',
          features: ['Regras', 'Controle de entrega']
        }
      ]
    },
    {
      icon: '🔍',
      name: 'Self-Service',
      access: 'Free Users',
      type: 'self-service',
      color: 'emerald',
      reports: [
        {
          name: '📊 Reltórios básicos',
          features: ['Atualização controlada', 'Restrições por regras','Visualização simplificada', 'Entrega garantinda']
        }
      ]
    }
  ];

  const optimizationFeatures = [
    {
      icon: '🔄',
      title: 'Refresh Inteligente',
      desc: 'Agendamento otimizado para reduzir consumo de recursos'
    },
    {
      icon: '🗜️',
      title: 'Compressão Avançada',
      desc: 'Datasets até 70% menores com mesma performance'
    },
    {
      icon: '🎯',
      title: 'RLS Estratégico',
      desc: 'Segurança por linha reduzindo necessidade de múltiplos datasets'
    },
    {
      icon: '📱',
      title: 'Mobile First',
      desc: 'Apps móveis nativos para usuários sem licença'
    }
  ];

  return (
    <>
      <Head>
        <title>Power BI - Dashboards e Relatórios Inteligentes | BC Tech Solution</title>
        <meta 
          name="description" 
          content="Criação de dashboards profissionais em Power BI, relatórios personalizados e análise de dados para pequenas empresas. Transforme dados em insights estratégicos." 
        />
        
        {/* Palavras-chave */}
        <meta 
          name="keywords" 
          content="power bi, dashboard, relatórios, análise de dados, business intelligence, visualização de dados, kpis, métricas"
        />
        
        {/* Open Graph */}
        <meta property="og:title" content="Power BI - Dashboards Inteligentes | BC Tech Solution" />
        <meta property="og:description" content="Dashboards profissionais e relatórios personalizados em Power BI" />
        <meta property="og:url" content="https://bctechsolutionsadvisory.com/power-bi" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://bctechsolutionsadvisory.com/power-bi" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Power BI e Business Intelligence",
              "provider": {
                "@type": "Organization",
                "name": "BC Tech Solution & Advisory",
                "url": "https://bctechsolutionsadvisory.com"
              },
              "areaServed": "BR",
              "description": "Criação de dashboards inteligentes e relatórios personalizados em Power BI para análise de dados e tomada de decisões estratégicas",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Serviços de Power BI e Business Intelligence",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Dashboard Executivo",
                      "description": "Relatórios personalizados com KPIs e métricas importantes"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Análise de Dados",
                      "description": "Transformação de dados em insights estratégicos"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Treinamento Power BI",
                      "description": "Capacitação da equipe para conduzir projetos após a entrega"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Documentação e Conceitos",
                      "description": "Documentação completa do projeto e conceitos aplicados"
                    }
                  }
                ]
              },
              "offers": {
                "@type": "AggregateOffer",
                "availability": "https://schema.org/InStock",
                "priceCurrency": "BRL"
              }
            })
          }}
        />
      </Head>
      <section 
        id="bi-architecture" 
        className="relative bg-gray-900 text-white py-20 lg:py-32 overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 bg-blue-500/15 ring-1 border-blue-500/30 rounded-full px-4 py-2 text-lg text-blue-400 font-medium mb-6 min-w-full md:min-w-sm justify-center">
              <span>📈</span>
              <span>Arquitetura do Power BI</span>
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-extrabold pb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent text-start lg:text-center">
              Ambiente BI otimizado para máxima Eficiência
            </h2>
            
            <p className="text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed text-start lg:text-center">
              Estruturo seu Power BI com foco em performance e economia de licenças, garantindo uma melhor Arquitetura e Controle pelos demais usuários
            </p>
          </div>

          <div className="space-y-16 lg:space-y-20">
            
            {/* Workspace Structure */}
            <div className={`bg-white/3 backdrop-blur-sm ring-1 border-white/10 rounded-2xl p-6 lg:p-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <h3 className="text-xl lg:text-2xl font-bold text-blue-400 mb-8 text-center">
                🏢 Estrutura de Workspaces
              </h3>

              <p className='text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed text-start lg:text-center mb-5'>Imagine ter espaços seguros onde você e sua equipe podem trabalhar sem afetar os Relatórios que estão em Produção e garantindo as alterações necessárias conforme a solicitação da sua área de Negócio</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {workspaces.map((workspace, index) => (
                  <div
                    key={index}
                    className={`bg-blue-500/10 ring-1 border-blue-500/20 rounded-xl p-6 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl ${
                      workspace.type === 'production' ? 'border-green-500/40 bg-green-500/10' : ''
                    }`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl">{workspace.icon}</div>
                      <div className="flex items-center gap-3">
                        <div className="font-bold text-gray-200">{workspace.name}</div>
                        <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                          workspace.type === 'production' 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-blue-500/20 text-blue-400'
                        }`}>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm text-gray-400">
                      <div>{workspace.users}</div>
                      <div>{workspace.purpose}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Data Architecture */}
            <div className={`bg-white/3 backdrop-blur-sm ring-1 border-white/10 rounded-2xl p-6 lg:p-8 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <h3 className="text-xl lg:text-2xl font-bold text-blue-400 mb-8 text-center">
                🗃️ Arquitetura de Dados
              </h3>
              
              <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
                
                {/* Gateway Layer */}
                <div className="bg-white/5 ring-1 border-white/10 rounded-xl p-6 min-w-64">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-2xl">🌐</div>
                    <div className="font-bold text-gray-200">Configuração do Gateway</div>
                  </div>
                  <div className="space-y-3">
                    {['SQL Server', 'Oracle DB', 'Arquivos de Sistema', 'MongoDb', 'API', 'Outros'].map((item, idx) => (
                      <div key={idx} className="bg-purple-500/10 ring-1 border-purple-500/20 px-4 py-2 rounded-lg text-center text-purple-400 text-sm font-medium">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Flow Arrow */}
                <div className="flex items-center">
                  <div className="w-20 lg:w-24 h-0.5 bg-gradient-to-r from-blue-500 to-blue-400"></div>
                </div>

                {/* Datasets Layer */}
                <div className="bg-white/5 ring-1 border-white/10 rounded-xl p-6 min-w-72">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-2xl">📊</div>
                    <div className="font-bold text-gray-200">Datasets Otimizados</div>
                  </div>
                  <div className="space-y-4">
                    {datasets.map((dataset, idx) => (
                      <div key={idx} className="bg-green-500/10 ring-1 border-green-500/20 rounded-lg p-4">
                        <div className="font-bold text-green-400 mb-2">{dataset.name}</div>
                        <div className="space-y-1 text-xs text-gray-400">
                          <div>{dataset.mode}</div>
                          <div>{dataset.refresh}</div>
                          <div>{dataset.size}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Report Catalog */}
            <div className={`bg-white/3 backdrop-blur-sm ring-1 border-white/10 rounded-2xl p-6 lg:p-8 transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <h3 className="text-xl lg:text-2xl font-bold text-blue-400 mb-8 text-center">
                📋 Catálogo de Relatórios
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                {reportCategories.map((category, index) => (
                  <div
                    key={index}
                    className={`bg-white/5 rounded-xl p-6 border-l-4 ${
                      category.color === 'amber' ? 'border-l-amber-500' :
                      category.color === 'blue' ? 'border-l-blue-500' :
                      'border-l-emerald-500'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl">{category.icon}</div>
                        <div className="font-bold text-gray-200">{category.name}</div>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                        category.color === 'amber' ? 'bg-amber-500/20 text-amber-400' :
                        category.color === 'blue' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-emerald-500/20 text-emerald-400'
                      }`}>
                        {category.access}
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {category.reports.map((report, idx) => (
                        <div key={idx} className="bg-white/5 rounded-lg p-4">
                          <div className="font-semibold text-gray-200 mb-3">{report.name}</div>
                          <div className="flex flex-wrap gap-2">
                            {report.features.map((feature, featureIdx) => (
                              <span key={featureIdx} className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs font-medium">
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>

  );
};

export default PowerBIArchitecture;