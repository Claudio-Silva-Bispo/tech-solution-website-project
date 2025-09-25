import React from 'react';
import { Database, BarChart3, Globe, BookOpen, ArrowRight, CheckCircle, Zap, Shield, TrendingUp } from 'lucide-react';

const CompleteServicesPage = () => {
  const mainServices = [
    {
      icon: <Database className="w-12 h-12" />,
      title: "Engenharia de Dados",
      subtitle: "Fundação Sólida para Decisões Inteligentes",
      description: "Construímos toda a infraestrutura necessária para coletar, processar e organizar seus dados de forma eficiente e escalável.",
      features: [
        "Pipeline de dados automatizado",
        "Integração com múltiplas fontes (Excel, APIs, Bancos de Dados)",
        "ETL/ELT personalizado",
        "Data Warehouse estruturado",
        "Governança e qualidade de dados"
      ],
      color: "from-purple-500 to-pink-500",
      borderColor: "border-purple-500/30",
      link: "/DataEngineering"
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Power BI Analytics",
      subtitle: "Visualize Seus Dados em Tempo Real",
      description: "Desenvolvemos dashboards interativos e relatórios inteligentes que transformam dados complexos em insights acionáveis.",
      features: [
        "Dashboards personalizados e interativos",
        "KPIs e métricas estratégicas",
        "Relatórios automatizados",
        "Modelagem avançada de dados (DAX)",
        "Mobile-friendly e responsivo"
      ],
      color: "from-blue-500 to-cyan-500",
      borderColor: "border-blue-500/30",
      link: "/PowerBIArchitecture"
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Desenvolvimento Web",
      subtitle: "Presença Digital Profissional",
      description: "Criamos sites modernos, rápidos e responsivos que elevam a presença online da sua empresa com tecnologia de ponta.",
      features: [
        "Design moderno e responsivo",
        "Performance otimizada (SEO)",
        "Integração com sistemas",
        "Segurança avançada",
        "Hospedagem e manutenção"
      ],
      color: "from-green-500 to-teal-500",
      borderColor: "border-green-500/30",
      link: "/WebDevelopment"
    },
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: "Documentação & Treinamento",
      subtitle: "Autonomia para Sua Equipe",
      description: "Garantimos que sua equipe tenha todo conhecimento e documentação necessária para gerenciar e evoluir as soluções implementadas.",
      features: [
        "Documentação técnica completa",
        "Treinamento prático da equipe",
        "Manuais de uso e boas práticas",
        "Suporte contínuo",
        "Planos de manutenção"
      ],
      color: "from-orange-500 to-red-500",
      borderColor: "border-orange-500/30",
      link: "/DocumentationTrainingSection"
    }
  ];

  const workflow = [
    { step: "1", title: "Análise", desc: "Entendemos seu negócio e necessidades" },
    { step: "2", title: "Planejamento", desc: "Criamos estratégia personalizada" },
    { step: "3", title: "Desenvolvimento", desc: "Construímos a solução completa" },
    { step: "4", title: "Treinamento", desc: "Capacitamos sua equipe" },
    { step: "5", title: "Suporte", desc: "Acompanhamos continuamente" }
  ];

  const benefits = [
    { icon: <Zap className="w-6 h-6" />, title: "Resultados Rápidos", desc: "Soluções implementadas em semanas, não meses" },
    { icon: <Shield className="w-6 h-6" />, title: "Segurança Garantida", desc: "Proteção de dados e compliance assegurados" },
    { icon: <TrendingUp className="w-6 h-6" />, title: "ROI Mensurável", desc: "Acompanhe o retorno sobre investimento" }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen" id='complete-service'>
      
      {/* Hero Section */}
      {/* <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-extrabold pb-6 bg-gradient-to-r from-white via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Soluções completas em Dados e Tecnologia
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Da engenharia de dados ao treinamento da sua equipe, oferecemos um ecossistema completo 
              para transformar informação em resultados concretos
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#data-engineering" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/25">
                Serviços
              </a>
              <a href="#contact" className="px-8 py-4 bg-white/10 ring-1 border-white/20 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300">
                Orçamento
              </a>
            </div>
          </div>
        </div>
      </section> */}

      {/* Main Services */}
      <section id="services" className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-extrabold pb-6 bg-gradient-to-r from-white via-blue-400 to-purple-400 bg-clip-text text-transparent">Nossos Serviços</h2>
            <p className="text-xl text-gray-400">Soluções integradas para impulsionar seu negócio de forma simples e saudável onde seus colaboraores podem gerir depois de pronto</p>
          </div>

          <div className="space-y-12 max-w-7xl mx-auto">
            {mainServices.map((service, index) => (
              <div 
                key={index}
                className={`bg-white/5 backdrop-blur-sm ring-1 ${service.borderColor} rounded-3xl p-8 lg:p-12 hover:bg-white/10 transition-all duration-500 group`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  
                  {/* Left Side - Icon & Title */}
                  <div className={index % 2 === 0 ? 'order-1' : 'order-1 lg:order-2'}>
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} bg-opacity-20 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold mb-3">{service.title}</h3>
                    <p className="text-xl text-blue-400 mb-4">{service.subtitle}</p>
                    <p className="text-gray-300 text-lg leading-relaxed">{service.description}</p>
                    <a 
                      href={service.link}
                      className="text-gray-300 font-semibold flex items-center gap-2 hover:text-blue-400 transition-colors duration-300 group/btn pt-5"
                    >
                      Saiba mais clicando aqui <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>

                  {/* Right Side - Features */}
                  <div className={index % 2 === 0 ? 'order-2' : 'order-2 lg:order-1'}>
                    <div className="bg-white/5 ring-1 border-white/10 rounded-2xl p-6 lg:p-8">
                      <h4 className="text-lg font-semibold mb-6 text-gray-300">O que está incluso:</h4>
                      <ul className="space-y-4">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-200">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Process */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-extrabold pb-6 bg-gradient-to-r from-white via-blue-400 to-purple-400 bg-clip-text text-transparent">Como Funciona</h2>
            <p className="text-xl text-gray-400">Processo simples e eficiente do início ao fim</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
              {workflow.map((item, index) => (
                <div key={index} className="relative">
                  <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 ring-1 border-blue-500/30 rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                      {item.step}
                    </div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                  {index < workflow.length - 1 && (
                    <ArrowRight className="hidden md:block absolute -right-8 top-1/2 -translate-y-1/2 text-blue-500 w-6 h-6" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompleteServicesPage;