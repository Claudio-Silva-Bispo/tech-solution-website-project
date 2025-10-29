import Head from 'next/head';
import React, { useEffect, useState } from 'react';

const DataEngineering = () => {
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

    const section = document.getElementById('data-engineering');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const sourceItems = [
    { icon: '📊', label: 'Excel/CSV', tooltip: 'Planilhas Excel e arquivos CSV' },
    { icon: '📄', label: 'TXT/Logs', tooltip: 'Arquivos de texto e logs de sistema' },
    { icon: '🔗', label: 'APIs', tooltip: 'APIs e Web Services diversos' },
    { icon: '💾', label: 'HDs Locais', tooltip: 'Arquivos salvos em computadores e HDs' }
  ];

  const processSteps = [
    { icon: '📥', title: 'Extract', desc: 'Coleta automatizada de fontes diversas' },
    { icon: '⚙️', title: 'Transform', desc: 'Limpeza e padronização dos dados' },
    { icon: '📤', title: 'Load', desc: 'Carregamento na nuvem estruturada' }
  ];

  const resultCards = [
    { icon: '⚡', title: 'Performance', desc: 'Consultas 10x mais rápidas' },
    { icon: '🔄', title: 'Automação', desc: 'Atualizações em tempo real' },
    { icon: '📊', title: 'Qualidade', desc: 'Dados consistentes e confiáveis' },
    { icon: '☁️', title: 'Cloud', desc: 'Acesso de qualquer lugar' }
  ];

  return (
    <>
      <Head>
        <title>Engenharia de Dados - Pipeline ETL e Arquitetura | BC Tech Solution</title>
        <meta 
          name="description" 
          content="Criação de pipelines de dados (ETL), arquitetura de dados, integração de múltiplas fontes e estruturação de bancos de dados. Soluções em engenharia de dados para pequenas empresas." 
        />
        
        {/* Palavras-chave */}
        <meta 
          name="keywords" 
          content="engenharia de dados, etl, pipeline de dados, arquitetura de dados, integração de dados, excel, api, banco de dados, transformação de dados"
        />
        
        {/* Open Graph */}
        <meta property="og:title" content="Engenharia de Dados - Pipeline ETL | BC Tech Solution" />
        <meta property="og:description" content="Pipeline de dados automatizado e arquitetura de dados profissional" />
        <meta property="og:url" content="https://bctechsolutionsadvisory.com/engenharia-dados" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://bctechsolutionsadvisory.com/engenharia-dados" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Engenharia de Dados e ETL",
              "provider": {
                "@type": "Organization",
                "name": "BC Tech Solution & Advisory",
                "url": "https://bctechsolutionsadvisory.com"
              },
              "areaServed": "BR",
              "description": "Pipeline de dados automatizado (ETL), integração com múltiplas fontes (Excel, APIs, Bancos de Dados) e estruturação de dados para análise",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Serviços de Engenharia de Dados",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Extração de Dados",
                      "description": "Extração de dados de Excel, APIs e Bancos de Dados"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Transformação ETL",
                      "description": "Limpeza e padronização de dados para análise"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Carregamento de Dados",
                      "description": "Estruturação em bancos locais ou na nuvem"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Arquitetura de Dados",
                      "description": "Desenho de projeto e estruturas simples de dados"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Documentação e Treinamento",
                      "description": "Documentação completa e treinamento da equipe"
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
        id="data-engineering" 
        className="relative bg-gradient-to-br from-gray-800 to-gray-900 text-white py-20 lg:py-32 overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center justify-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-lg text-blue-400 font-medium mb-6 min-w-full md:min-w-sm">
                  <span className='p-3'>☁️</span> <p className='p-3'>Engenharia de Dados</p>
            </div>
            
            <h2 className="text-3xl md:text-5xl lg:text-4xl xl:text-5xl font-extrabold mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent pt-10 text-start lg:text-center">
              Do caos dos dados à Arquitetura Inteligente
            </h2>
            
            <p className="text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed text-start lg:text-center">
              Transformo informações desestruturadas armazenadas em computadores e HDs em uma arquitetura robusta na nuvem ou em modelos que atendem às necessidades da sua empresa. Todo o processo é documentado e acompanhado de treinamento para a equipe que dará continuidade à operação após a criação da estrutura.
            </p>
          </div>

          {/* Data Flow */}
          <div className="space-y-12 lg:space-y-16">
            
            {/* Sources */}
            <div className={`bg-white/5 backdrop-blur-sm rounded-2xl p-10 lg:p-10 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <h3 className="text-xl lg:text-2xl  font-bold text-white-400 mb-8 text-center">
                Fontes de Dados Desestruturadas
              </h3>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                {sourceItems.map((source, index) => (
                  <div
                    key={index}
                    className={`bg-blue-500/10 ring-1 border-blue-500/20 rounded-xl p-4 lg:p-6 text-center transition-all duration-500 hover:bg-blue-500/20 hover:scale-105 cursor-pointer group ${
                      isVisible ? 'animate-pulse' : ''
                    }`}
                    style={{ animationDelay: `${index * 200}ms` }}
                    title={source.tooltip}
                  >
                    <div className="text-3xl lg:text-4xl mb-3 group-hover:scale-110 transition-transform duration-300 p-5">
                      {source.icon}
                    </div>
                    <div className="text-gray-300 font-semibold text-sm lg:text-base">
                      {source.label}
                    </div>
                    
                    {/* Data Stream Animation */}
                    <div className="relative mt-4">
                      <div className="w-0.5 h-6 bg-gradient-to-b from-blue-500 to-transparent mx-auto animate-pulse"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Flow Arrow */}
            <div className="flex items-center justify-center my-8 lg:my-12">
              <div className="relative">
                <div className="w-60 lg:w-80 h-1 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full relative overflow-hidden mt-10 ">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse"></div>
                </div>
                <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-blue-400 border-t-3 border-t-transparent border-b-3 border-b-transparent mt-5"></div>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900/90 px-6 py-3 rounded-full text-sm md:text-md text-white-400 w-[20vh] md:w-[20vh] text-center font-bold">
                  ETL Pipeline
                </div>
              </div>
            </div>

            {/* Processing */}
            <div className={`bg-white/5 backdrop-blur-sm  border-white/10 rounded-2xl p-6 lg:p-8 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <h3 className="text-xl lg:text-2xl font-bold text-white-400 mb-8 text-center">
                Processamento Inteligente
              </h3>
              
              <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8">
                {processSteps.map((step, index) => (
                  <React.Fragment key={index}>
                    <div className="bg-blue-500/10 ring-1 border-blue-500/20 rounded-xl p-6 lg:p-8 text-center flex-1 max-w-xs lg:max-w-sm transition-all duration-300 hover:bg-blue-500/20 hover:scale-105">
                      <div className="text-3xl lg:text-4xl mb-4">
                        {step.icon}
                      </div>
                      <div className="text-gray-300 font-bold text-lg mb-2">
                        {step.title}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {step.desc}
                      </div>
                    </div>
                    
                    {index < processSteps.length - 1 && (
                      <div className="text-2xl lg:text-3xl text-blue-500 font-bold rotate-90 lg:rotate-0 my-4 lg:my-0 animate-pulse">
                        →
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Flow Arrow */}
            <div className="flex items-center justify-center my-8 lg:my-12">
              <div className="relative">
                <div className="w-60 lg:w-80 h-1 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full relative overflow-hidden mt-10 ">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse"></div>
                </div>
                <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-blue-400 border-t-3 border-t-transparent border-b-3 border-b-transparent mt-5"></div>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900/90 px-6 py-3 rounded-full text-sm md:text-md text-white-400 w-[20vh] md:w-[20vh] text-center font-bold">
                  Estrutura dos Dados
                </div>
              </div>
            </div>

            {/* Database Architecture */}
            <div className={`bg-white/5 backdrop-blur-sm border-white/10 rounded-2xl p-6 lg:p-8 transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <h3 className="text-xl lg:text-2xl font-bold text-white-400 mb-8 text-center">
                Arquitetura final na Nuvem
              </h3>
              
              <div className="space-y-6 lg:space-y-8">
                
                {/* Staging Area */}
                <div className="bg-blue-500/5 ring-1 border-blue-500/20 rounded-xl p-6">
                  <div className="text-center mb-6">
                    <h4 className="text-lg font-bold text-blue-400 mb-2">☁️ Staging Area (Nuvem)</h4>
                    <p className="text-sm text-gray-400">Área temporária de processamento, onde realizamos todas as etapas principais de tratamento e transformação dos dados antes de inseri-los nas tabelas utilizadas pelo Power BI ou por outras ferramentas de análise.</p>
                  </div>
                  <div className="flex flex-wrap justify-center gap-3">
                    {['tabela_staging_cliente', 'tabela_staging_venda', 'tabela_staging_produto'].map((table, idx) => (
                      <div key={idx} className="bg-white/10 px-4 py-2 rounded-lg text-sm text-gray-300">
                        {table}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-400 pt-10 md:p-10">Nesse momento, o usuário também pode validar se as decisões de tratamento dos dados estão corretas antes de seguir para as próximas fases.</p>
                </div>

                {/* Data Warehouse */}
                <div className="bg-blue-500/5 border-blue-500/20 rounded-xl p-6">
                  <div className="text-center mb-6">
                    <h4 className="text-lg font-bold text-blue-400 mb-2">🏢 Data Warehouse</h4>
                    <p className="text-sm text-gray-400">Estrutura otimizada para análises</p>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Dimension Tables */}
                    <div className="lg:col-span-2">
                      <h5 className="text-center text-green-400 font-semibold mb-4">Tabelas Dimensão</h5>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {['dim_usuario', 'dim_produto', 'dim_prazo'].map((dim, idx) => (
                          <div key={idx} className="bg-green-500/10 border border-green-500/30 p-4 rounded-lg text-center">
                            <div className="text-green-400 font-semibold text-sm p-5">{dim}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Fact Table */}
                    <div>
                      <h5 className="text-center text-red-400 font-semibold mb-4">Tabela Fato</h5>
                      <div className="bg-red-500/10 border-red-500/30 p-4 rounded-lg text-center">
                        <div className="text-red-400 font-bold mb-3">fato_venda</div>
                        <div className="space-y-2">
                          {['nome', 'idade', 'genero', 'data'].map((metric, idx) => (
                            <div key={idx} className="bg-white/10 px-3 py-1 rounded text-xs text-gray-300">
                              {metric}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Data Marts */}
                <div className="bg-blue-500/5 border-blue-500/20 rounded-xl p-6">
                  <div className="text-center mb-6">
                    <h4 className="text-lg font-bold text-blue-400 mb-2">📊 Data Marts Especializados</h4>
                    <p className="text-sm text-gray-400">Dados organizados por área de negócio</p>
                  </div>
                  <div className="flex flex-wrap justify-center gap-4">
                    {[
                      { icon: '📈', name: 'Venda Mart' },
                      { icon: '👥', name: 'Usuario Mart' },
                      { icon: '📦', name: 'Perfil Mart' }
                    ].map((mart, idx) => (
                      <div key={idx} className="bg-purple-500/10 border-purple-500/30 px-6 py-4 rounded-xl text-center w-full">
                        <div className="text-2xl mb-2">{mart.icon}</div>
                        <div className="text-white font-semibold text-sm">{mart.name}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className={`transition-all duration-700 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <h3 className="text-xl lg:text-2xl font-bold text-center text-white mb-8">
                Resultados Transformadores
              </h3>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                {resultCards.map((result, index) => (
                  <div
                    key={index}
                    className="bg-white/5 border-white/10 rounded-xl p-6 text-center transition-all duration-300 hover:bg-blue-500/10 hover:border-blue-500/30 hover:scale-105"
                  >
                    <div className="text-3xl lg:text-4xl mb-4">
                      {result.icon}
                    </div>
                    <h4 className="text-blue-400 font-bold text-lg mb-2">
                      {result.title}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {result.desc}
                    </p>
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

export default DataEngineering;