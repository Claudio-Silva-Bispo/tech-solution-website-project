import React from 'react';
import { BookOpen, Users, Wrench, FileText, Video, CheckCircle } from 'lucide-react'; /*Instalar npm install lucide-react */
import Head from 'next/head';

const DocumentationTrainingSection = () => {
  const services = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Documentação Completa",
      description: "Criamos documentação técnica detalhada de toda a arquitetura de dados e dashboards Power BI",
      features: [
        "Dicionário de dados e métricas",
        "Fluxo de ETL documentado",
        "Guias de uso dos dashboards",
        "Boas práticas e padrões"
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Treinamento de Equipe",
      description: "Capacitamos sua equipe para usar e manter as soluções desenvolvidas de forma autônoma",
      features: [
        "Treinamento prático em Power BI",
        "Capacitação em análise de dados",
        "Sessões personalizadas",
        "Material de apoio completo"
      ]
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Manutenção da Arquitetura",
      description: "Garantimos a continuidade e evolução da sua infraestrutura de dados",
      features: [
        "Suporte técnico contínuo",
        "Atualizações e melhorias",
        "Monitoramento de performance",
        "Troubleshooting rápido"
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Documentação Técnica e Treinamento em TI | BC Tech Solution</title>
        <meta 
          name="description" 
          content="Criação de documentação técnica completa, treinamento personalizado em Power BI, ETL e Engenharia de Dados. Capacitação da equipe para autonomia operacional e transferência de conhecimento com suporte pós-treinamento." 
        />
        
        {/* Palavras-chave */}
        <meta 
          name="keywords" 
          content="documentação técnica, treinamento ti, capacitação, treinamento power bi, treinamento etl, documentação de sistemas, manuais técnicos, transferência de conhecimento, capacitação em dados, treinamento dax, modelagem de dados"
        />
        
        {/* Open Graph */}
        <meta property="og:title" content="Documentação Técnica e Treinamento em TI | BC Tech Solution" />
        <meta property="og:description" content="Documentação completa e treinamento personalizado para capacitar sua equipe em Power BI e Engenharia de Dados" />
        <meta property="og:url" content="https://bctechsolutionsadvisory.com/documentacao-treinamento" />
        <meta property="og:type" content="website" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://bctechsolutionsadvisory.com/documentacao-treinamento" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Documentação Técnica e Treinamento",
              "provider": {
                "@type": "Organization",
                "name": "BC Tech Solution & Advisory",
                "url": "https://bctechsolutionsadvisory.com"
              },
              "areaServed": "BR",
              "description": "Criação de documentação técnica completa, treinamento personalizado em Power BI, DAX, ETL e Engenharia de Dados para capacitar sua equipe a conduzir projetos de tecnologia com autonomia",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Serviços de Documentação e Treinamento",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Documentação Técnica Completa",
                      "description": "Manuais detalhados com dicionário de dados, fluxo ETL documentado, guias de uso e boas práticas"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Treinamento em Power BI e DAX",
                      "description": "Capacitação completa desde o básico até recursos avançados incluindo DAX, modelagem de dados e otimização de performance"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Treinamento em ETL e Engenharia de Dados",
                      "description": "Ensino prático de processos de extração, transformação e carga de dados com pipeline automatizado"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Transferência de Conhecimento Estruturada",
                      "description": "Capacitação completa da equipe interna para conduzir projetos após a entrega com autonomia operacional"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Documentação de Arquitetura de Dados",
                      "description": "Documentação completa de sistemas personalizados, fluxos de trabalho, Data Warehouse e Data Marts"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Suporte e Manutenção Contínua",
                      "description": "Acompanhamento pós-treinamento com SLA de resposta garantido, troubleshooting rápido e monitoramento de performance"
                    }
                  }
                ]
              },
              "offers": {
                "@type": "AggregateOffer",
                "availability": "https://schema.org/InStock",
                "priceCurrency": "BRL"
              },
              "educationalCredentialAwarded": "Certificado de Conclusão"
            })
          }}
        />
      </Head>
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 lg:py-32" id='document-training'>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="lg:text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-500/15 ring-1 border-blue-500/30 rounded-full px-4 py-2 text-lg text-blue-400 font-medium mb-6 min-w-full md:min-w-sm justify-center">
              <span>📚</span>
              <span>Documentação & Treinamento</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
              Sua Equipe Preparada Para o Futuro
            </h2>
            <p className="text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Não apenas entregamos soluções, mas garantimos que sua equipe tenha autonomia 
              para gerenciar e evoluir a arquitetura de dados criada
            </p>
          </div>

          {/* Texto Explicativo Introdutório */}
          <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-green-500/10 ring-1 border-blue-500/20 rounded-2xl p-8 mb-16 max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-blue-300 mb-4 flex items-center gap-3">
              <span>🎯</span>
              <span>Por Que Documentação e Treinamento São Essenciais?</span>
            </h3>
            <p className='text-base text-gray-300 leading-relaxed mb-4'>
              Muitas empresas investem em tecnologia mas <strong className="text-red-400">ficam dependentes</strong> de consultores externos. 
              Nós fazemos diferente:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-500/10 ring-1 border-red-500/20 rounded-lg p-5">
                <div className="text-red-400 font-bold mb-3 flex items-center gap-2">
                  <span>❌</span>
                  <span>Sem Documentação e Treinamento:</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Dependência total do fornecedor</li>
                  <li>• Equipe não sabe usar as ferramentas</li>
                  <li>• Custos altos para qualquer mudança</li>
                  <li>• Conhecimento perdido ao trocar funcionários</li>
                  <li>• Impossível fazer melhorias internas</li>
                </ul>
              </div>
              <div className="bg-green-500/10 ring-1 border-green-500/20 rounded-lg p-5">
                <div className="text-green-400 font-bold mb-3 flex items-center gap-2">
                  <span>✅</span>
                  <span>Com Nossa Abordagem:</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Autonomia completa da sua equipe</li>
                  <li>• Conhecimento internalizado na empresa</li>
                  <li>• Economia em consultorias futuras</li>
                  <li>• Documentação para novos funcionários</li>
                  <li>• Capacidade de evoluir sozinhos</li>
                </ul>
              </div>
            </div>
            <p className='text-sm text-blue-300 mt-6 italic'>
              💡 <strong>Nosso Compromisso:</strong> Você não fica refém! Entregamos tudo documentado e sua equipe treinada para seguir sem nós.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm ring-1 border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* O Que Você Recebe - Texto Explicativo */}
          <div className="bg-blue-500/10 ring-1 border-blue-500/20 rounded-2xl p-8 mb-12 max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-blue-300 mb-6 text-center flex items-center justify-center gap-3">
              <span>📦</span>
              <span>O Que Você Recebe na Prática</span>
            </h3>
            
            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-5 hover:bg-white/10 transition-all">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">📄</div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">1. Documentação Técnica Completa</h4>
                    <p className="text-gray-300 text-sm mb-2">
                      Manuais detalhados explicando cada parte do projeto:
                    </p>
                    <ul className="text-gray-400 text-sm space-y-1 ml-4">
                      <li>• Como os dados são extraídos, tratados e carregados (ETL)</li>
                      <li>• Significado de cada métrica e KPI dos dashboards</li>
                      <li>• Estrutura das tabelas e relacionamentos</li>
                      <li>• Guia passo a passo para atualizar e manter</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-5 hover:bg-white/10 transition-all">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">🎓</div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">2. Treinamento Prático e Personalizado</h4>
                    <p className="text-gray-300 text-sm mb-2">
                      Sessões de capacitação focadas nas necessidades da sua equipe:
                    </p>
                    <ul className="text-gray-400 text-sm space-y-1 ml-4">
                      <li>• Treinamento hands-on usando os seus próprios dashboards</li>
                      <li>• Ensino de DAX para criar novas métricas</li>
                      <li>• Como modificar e criar novos relatórios</li>
                      <li>• Resolução de problemas comuns</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-5 hover:bg-white/10 transition-all">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">🛠️</div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">3. Suporte Pós-Implementação</h4>
                    <p className="text-gray-300 text-sm mb-2">
                      Acompanhamento para garantir que tudo continue funcionando:
                    </p>
                    <ul className="text-gray-400 text-sm space-y-1 ml-4">
                      <li>• Período de suporte após a entrega</li>
                      <li>• Planos opcionais de manutenção mensal</li>
                      <li>• SLA de resposta garantido</li>
                      <li>• Monitoramento preventivo de performance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Power BI Training Card */}
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 ring-1 border-blue-500/30 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-500/20 p-3 rounded-lg">
                  <BookOpen className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold">Treinamento Power BI</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Capacitação completa desde o básico até recursos avançados do Power BI, 
                incluindo DAX, modelagem de dados e otimização de performance.
              </p>
              <div className="bg-blue-500/10 ring-1 border-blue-500/20 rounded-lg p-4 mb-4">
                <div className="text-sm text-gray-300 space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Módulo 1: Fundamentos do Power BI</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Módulo 2: DAX Básico e Avançado</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Módulo 3: Modelagem e Relacionamentos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Módulo 4: Otimização e Performance</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-blue-400">
                <Video className="w-4 h-4" />
                <span>Formato online após criação da arquitetura e dos Dashboards</span>
              </div>
            </div>

            {/* Architecture Maintenance Card */}
            <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 ring-1 border-green-500/30 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-green-500/20 p-3 rounded-lg">
                  <Wrench className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-bold">Manutenção Contínua</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Planos de suporte mensais para garantir que sua arquitetura de dados 
                continue funcionando perfeitamente e evoluindo com seu negócio.
              </p>
              <div className="bg-green-500/10 ring-1 border-green-500/20 rounded-lg p-4 mb-4">
                <div className="text-sm text-gray-300 space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Suporte técnico prioritário</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Atualizações e melhorias mensais</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Monitoramento proativo 24/7</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Troubleshooting em até 4 horas</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-green-400">
                <CheckCircle className="w-4 h-4" />
                <span>SLA de resposta garantido</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default DocumentationTrainingSection;