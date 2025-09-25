import React from 'react';
import { BookOpen, Users, Wrench, FileText, Video, CheckCircle } from 'lucide-react'; /*Instalar npm install lucide-react */

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
    <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 lg:py-32">
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

        {/* CTA */}
        <div className="text-center mt-16">
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
          >
            <span>Conheça Nossos Planos</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DocumentationTrainingSection;