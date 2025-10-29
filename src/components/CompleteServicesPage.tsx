import React from 'react';
import { Database, BarChart3, Globe, BookOpen, ArrowRight, CheckCircle, Zap, Shield, TrendingUp, MapPin, Share2, Smartphone } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const CompleteServicesPage = () => {
  const { isDarkMode } = useTheme();

  const mainServices = [
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
      icon: <Smartphone className="w-12 h-12" />,
      title: "Aplicativos e Sistemas",
      subtitle: "Soluções Sob Medida Para Seu Negócio",
      description: "Desenvolvemos aplicativos mobile e sistemas personalizados que automatizam processos e impulsionam o crescimento da sua empresa.",
      features: [
        "Apps nativos para Android e iOS",
        "Sistemas web personalizados",
        "Automação de processos",
        "Integração com outras plataformas",
        "Suporte e manutenção contínua"
      ],
      color: "from-cyan-500 to-blue-500",
      borderColor: "border-cyan-500/30",
      link: "/AppSystems"
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
    },
    {
      icon: <Share2 className="w-12 h-12" />,
      title: "Gestão de Redes Sociais",
      subtitle: "Presença Digital Estratégica",
      description: "Criamos e gerenciamos suas redes sociais com conteúdo profissional e estratégias que engajam e convertem seguidores em clientes.",
      features: [
        "Criação de perfis profissionais",
        "Planejamento de conteúdo estratégico",
        "Design de posts e stories",
        "Gestão de interações e mensagens",
        "Criação dos textos e da Identidade visual"
      ],
      color: "from-pink-500 to-purple-500",
      borderColor: "border-pink-500/30",
      link: "/SocialMedia"
    },
    {
      icon: <MapPin className="w-12 h-12" />,
      title: "Google Meu Negócio",
      subtitle: "Apareça no Google e no Maps",
      description: "Configuramos e otimizamos seu perfil no Google para que clientes locais encontrem sua empresa facilmente nas buscas e no Google Maps.",
      features: [
        "Criação e configuração completa do perfil",
        "Otimização para buscas locais (SEO Local)",
        "Gerenciamento de avaliações",
        "Postagens regulares",
        "Atualizações e monitoramento"
      ],
      color: "from-red-500 to-yellow-500",
      borderColor: "border-red-500/30",
      link: "/GoogleBusiness"
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
    <div className={`${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white' 
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900'
    } min-h-screen`} id='complete-service'>
      
      {/* Main Services */}
      <section id="services" className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16">
            <h2 className={`text-5xl lg:text-7xl font-extrabold pb-6 ${
              isDarkMode
                ? 'bg-gradient-to-r from-white via-blue-400 to-purple-400'
                : 'bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600'
            } bg-clip-text text-transparent`}>
              Nossos Serviços
            </h2>
            <p className={`text-xl ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Soluções integradas para impulsionar seu negócio de forma simples e saudável onde seus colaboradores podem gerir depois de pronto
            </p>
          </div>

          <div className="space-y-12 max-w-7xl mx-auto">
            {mainServices.map((service, index) => (
              <div 
                key={index}
                className={`${
                  isDarkMode 
                    ? 'bg-white/5 hover:bg-white/10' 
                    : 'bg-white hover:bg-gray-50 shadow-lg'
                } backdrop-blur-sm ring-1 ${service.borderColor} rounded-3xl p-8 lg:p-12 transition-all duration-500 group`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  
                  {/* Left Side - Icon & Title */}
                  <div className={index % 2 === 0 ? 'order-1' : 'order-1 lg:order-2'}>
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} bg-opacity-20 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold mb-3">{service.title}</h3>
                    <p className={`text-xl mb-4 ${
                      isDarkMode ? 'text-blue-400' : 'text-blue-600'
                    }`}>
                      {service.subtitle}
                    </p>
                    <p className={`text-lg leading-relaxed ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {service.description}
                    </p>
                    <a 
                      href={service.link}
                      className={`font-semibold flex items-center gap-2 transition-colors duration-300 group/btn pt-5 ${
                        isDarkMode 
                          ? 'text-gray-300 hover:text-blue-400' 
                          : 'text-gray-700 hover:text-blue-600'
                      }`}
                    >
                      Saiba mais clicando aqui <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>

                  {/* Right Side - Features */}
                  <div className={index % 2 === 0 ? 'order-2' : 'order-2 lg:order-1'}>
                    <div className={`${
                      isDarkMode 
                        ? 'bg-white/5 border-white/10' 
                        : 'bg-gray-50 border-gray-200'
                    } ring-1 rounded-2xl p-6 lg:p-8`}>
                      <h4 className={`text-lg font-semibold mb-6 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        O que está incluso:
                      </h4>
                      <ul className="space-y-4">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                            <span className={isDarkMode ? 'text-gray-200' : 'text-gray-700'}>
                              {feature}
                            </span>
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
      <section className={`py-20 ${
        isDarkMode ? 'bg-white/5' : 'bg-gray-100'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16">
            <h2 className={`text-5xl lg:text-7xl font-extrabold pb-6 ${
              isDarkMode
                ? 'bg-gradient-to-r from-white via-blue-400 to-purple-400'
                : 'bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600'
            } bg-clip-text text-transparent`}>
              Como Funciona
            </h2>
            <p className={`text-xl ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Processo simples e eficiente do início ao fim
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 xl:grid-cols-5 gap-10">
              {workflow.map((item, index) => (
                <div key={index} className="relative">
                  <div className={`${
                    isDarkMode
                      ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-blue-500/30'
                      : 'bg-gradient-to-br from-blue-100 to-purple-100 border-blue-300'
                  } ring-1 rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300`}>
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 text-white">
                      {item.step}
                    </div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className={`text-sm ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {item.desc}
                    </p>
                  </div>
                  {index < workflow.length - 1 && (
                    <ArrowRight className={`hidden md:block absolute -right-8 top-1/2 -translate-y-1/2 w-6 h-6 ${
                      isDarkMode ? 'text-blue-500' : 'text-blue-600'
                    }`} />
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