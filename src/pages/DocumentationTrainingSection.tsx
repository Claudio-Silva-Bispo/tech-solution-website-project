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
        <title>Documentação e Treinamento em TI | BC Tech Solution</title>
        <meta 
          name="description" 
          content="Criação de documentação técnica completa e treinamento personalizado para sua equipe. Capacitação em Power BI, Engenharia de Dados, Sistemas e Tecnologia." 
        />
        
        {/* Palavras-chave */}
        <meta 
          name="keywords" 
          content="documentação técnica, treinamento ti, capacitação, treinamento power bi, treinamento etl, documentação de sistemas, manuais técnicos, conhecimento transferência"
        />
        
        {/* Open Graph */}
        <meta property="og:title" content="Documentação e Treinamento em TI | BC Tech Solution" />
        <meta property="og:description" content="Documentação técnica e treinamento personalizado para sua equipe" />
        <meta property="og:url" content="https://bctechsolutionsadvisory.com/documentacao-treinamento" />
        
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
              "description": "Criação de documentação técnica completa e treinamento personalizado para capacitar sua equipe a conduzir projetos de tecnologia com autonomia",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Serviços de Documentação e Treinamento",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Documentação Técnica",
                      "description": "Manuais completos, conceitos e processos documentados"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Treinamento em Power BI",
                      "description": "Capacitação da equipe para criar e manter dashboards"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Treinamento em ETL",
                      "description": "Ensino de processos de extração, transformação e carga de dados"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Transferência de Conhecimento",
                      "description": "Capacitação para a equipe conduzir projetos após a entrega"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Manuais de Sistemas",
                      "description": "Documentação de sistemas personalizados e fluxos de trabalho"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Suporte Pós-Treinamento",
                      "description": "Acompanhamento e suporte após a capacitação inicial"
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
            <h2 className="text-4xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
              Documentação & Treinamento
            </h2>
            <p className="text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Não apenas entregamos soluções, mas garantimos que sua equipe tenha autonomia 
              para gerenciar e evoluir a arquitetura de dados criada
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