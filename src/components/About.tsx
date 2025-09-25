import React, { useEffect, useState } from 'react';

const About = () => {
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

    const section = document.getElementById('about');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const experience = [
    {
      period: 'Fev 2024 - Presente',
      role: 'Analista de BI e Negócios Sênior',
      company: 'Seguradora',
      description: 'Desenvolvimento de pipelines ETL para mineração e processamento de dados, criação de dashboards estratégicos e implementação de modelos de Machine Learning.',
      achievements: [
        'Pipelines ETL em diversos Sistemas e Datamarts',
        'Engenharia de Dados',
        'Dashboards e relatórios usando Power BI e Python',
        'Modelos de Machine Learning para análise preditiva',
        'Automação com Power Automate e Python',
        'APIs para gestão e integração de dados',
        'Criação de especificações funcionais',
        'Homologação e Testes das Aplicações'
      ],
      icon: '🎯'
    },
    {
      period: 'Out 2022 - Fev 2024',
      role: 'Analista de BI e Negócios',
      company: 'Seguradora',
      description: 'Gestão de indicadores operacionais, desenvolvimento de soluções automatizadas e criação de dashboards interativos para análise de dados complexos.',
      achievements: [
        'Gestão de indicadores operacionais complexos',
        'Soluções automatizadas com Python e Microsoft',
        'Dashboards interativos e relatórios de BI',
        'Otimização de processos com análise de dados',
        'Trabalho com Oracle e SQL Server'
      ],
      icon: '📊'
    },
   {
    period: 'Out 2017 - Out 2021',
    role: 'Gerente de Relacionamento',
    company: 'Banco',
    description: 'Responsável pela gestão de carteiras de clientes, análise de dados financeiros e avaliação de cenários para suporte estratégico às decisões de negócios.',
    achievements: [
        'Gerenciamento de carteira de clientes e relacionamento estratégico',
        'Análise de dados financeiros e de comportamento de clientes',
        'Estudos de cenários e identificação de riscos e oportunidades',
        'Elaboração de relatórios e especificações funcionais',
        'Apoio à tomada de decisão com base em dados e indicadores'
    ],
    icon: '🏦'
    },
    {
    period: 'Set 2011 - Out 2017',
    role: 'Consultor de Negócios',
    company: 'Seguradora',
    description: 'Suporte a projetos e condução de treinamentos para equipes, com elaboração de materiais de apoio e documentação técnica.',
    achievements: [
        'Condução de treinamentos para equipes de negócio e TI',
        'Criação de materiais de apoio e guias de referência',
        'Documentação técnica e funcional de processos',
        'Análise de cenários e levantamento de requisitos',
        'Homologação e validação de projetos'
    ],
    icon: '📘'
    }
  ];

  const skills = [
    { name: 'Power BI', level: 95, category: 'BI & Analytics' },
    { name: 'Python', level: 90, category: 'Programação' },
    { name: 'SQL Server', level: 92, category: 'Banco de Dados' },
    { name: 'Oracle', level: 88, category: 'Banco de Dados' },
    { name: 'React/Next.js', level: 85, category: 'Frontend' },
    { name: 'ETL/ELT', level: 93, category: 'Eng. Dados' },
    { name: 'Machine Learning', level: 80, category: 'Data Science' },
    { name: 'MongoDB', level: 82, category: 'NoSQL' }
  ];

  const education = [
    {
      institution: 'FIAP',
      degree: 'Desenvolvimento de Sistema - Full Stack',
      period: '2023 - 2025',
      focus: 'Apps & Artificial Intelligence',
      icon: '🎓'
    },
    {
      institution: 'Estácio',
      degree: 'MBA em Big Data, BI e Analytics',
      period: '2022 - 2023',
      focus: 'Analytics para Negócios',
      icon: '📊'
    },
    {
      institution: 'Mackenzie',
      degree: 'MBA em Gestão Financeira',
      period: '2019 - 2021',
      focus: 'Administração e Negócios',
      icon: '💰'
    },
    {
      institution: 'FATEC',
      degree: 'Bacharelado em Administração',
      period: '2011 - 2016',
      focus: 'Administração e Negócios',
      icon: '🎯'
    }
  ];

  const techStack = {
    'Engenharia de Dados': [
      'Python', 'SQL', 'Java', 'C#', 'Oracle', 'MySQL', 
      'SQL Server', 'MongoDB', 'Power BI', 'ETL', 'Machine Learning'
    ],
    'Desenvolvimento Full Stack': [
      'React', 'Next.js', 'TypeScript', 'Tailwind CSS',
      'Java', 'C#', 'APIs REST', 'React Native', 'Git/GitHub'
    ],
    'Automação & Tools': [
      'Selenium', 'BeautifulSoup', 'Power Automate', 
      'Figma', 'Metodologias Ágeis'
    ]
  };

  const contactLinks = [
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/claudiosbispo/',
      icon: '💼',
      description: 'Conecte-se comigo profissionalmente',
      color: 'blue'
    },
    {
      platform: 'GitHub',
      url: 'https://github.com/Claudio-Silva-Bispo',
      icon: '👨‍💻',
      description: 'Veja meus repositórios e projetos',
      color: 'gray'
    },
    {
      platform: 'E-mail',
      url: 'mailto:claudio_cssp@hotmail.com',
      icon: '📧',
      description: 'Entre em contato diretamente',
      color: 'green'
    },
    {
      platform: 'WhatsApp',
      url: 'https://wa.me/5511958757740',
      icon: '📱',
      description: 'Fale comigo via WhatsApp',
      color: 'green'
    }
  ];

  return (
    <section 
      id="about" 
      className="relative bg-gradient-to-br from-gray-800 to-gray-900 text-white py-20 lg:py-32 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-500/15 ring-1 border-blue-500/30 rounded-full px-4 py-2 text-sm text-blue-400 font-medium mb-6">
            <span>👨‍💼</span>
            <span>Sobre Mim</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-4xl xl:text-5xl font-extrabold mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent pt-10 text-start lg:text-center">
            Transformando Dados em valor há mais de 12 Anos
          </h2>
          
          <p className="text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed text-start lg:text-center">
            Desenvolvedor Full Stack e Engenheiro de Dados especializado em criar soluções end-to-end para empresas
          </p>
        </div>

        {/* Personal Intro */}
        <div className={`bg-white/5 backdrop-blur-sm ring-1 border-white/10 rounded-2xl p-8 lg:p-12 mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
            
            {/* Avatar/Profile */}
            <div className="text-center lg:text-left">
              <div className="w-32 h-32 lg:w-40 lg:h-40 mx-auto lg:mx-0 mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-5xl lg:text-6xl">
                👨‍💻
              </div>
              <div className="text-blue-400 font-medium mb-4">Senior BI Analyst & Full Stack Developer</div>
              <div className="text-gray-400 text-sm">São Paulo, Brasil</div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-2 space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Sou Desenvolvedor Full Stack e Engenheiro de Dados, com experiência em criar sistemas e trabalhar com dados. Transformo informações em soluções práticas, como sites, aplicativos e relatórios que ajudam empresas a tomar decisões.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Já trabalhei em análises de dados, integração de sistemas e desenvolvimento de aplicações completas. Tenho formação em Desenvolvimento Full Stack e especializações em Big Data, BI e Gestão Financeira, o que me permite unir conhecimento técnico com visão de negócio.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Abaixo eu conto um pouco sobre minha experiência profissional.
              </p>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className={`mb-16 transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-2xl lg:text-3xl font-bold text-center mb-12 text-white">
            Experiência Profissional
          </h3>
          
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Line */}
                {index < experience.length - 1 && (
                  <div className="absolute left-6 lg:left-12 top-16 w-0.5 h-full bg-gradient-to-b from-blue-500 to-transparent"></div>
                )}
                
                <div className="flex gap-6 lg:gap-12">
                  {/* Timeline Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-2xl lg:text-3xl shadow-lg">
                      {exp.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-white/5 backdrop-blur-sm ring-1 border-white/10 rounded-xl p-6 lg:p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h4 className="text-xl lg:text-2xl font-bold text-white mb-1">{exp.role}</h4>
                        <p className="text-blue-400 font-medium">{exp.company}</p>
                      </div>
                      <div className="mt-2 lg:mt-0">
                        <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                          {exp.period}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                    
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-sm text-gray-400">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16">
          
          {/* Skills */}
          <div className={`bg-white/5 backdrop-blur-sm ring-1 border-white/10 rounded-2xl p-6 lg:p-8 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-8 text-center">
              Principais Habilidades
            </h3>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-blue-400 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-blue-400 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 100}ms`
                      }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{skill.category}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className={`bg-white/5 backdrop-blur-sm ring-1 border-white/10 rounded-2xl p-6 lg:p-8 transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-8 text-center">
              Formação Acadêmica
            </h3>
            
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="bg-white/5 ring-1 border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">{edu.icon}</div>
                    <div className="flex-1 mb-5">
                      <h4 className="font-semibold text-white mb-1">{edu.degree}</h4>
                      <p className="text-blue-400 text-sm mb-1">{edu.institution}</p>
                      <p className="text-gray-400 text-xs mb-1">{edu.period}</p>
                      <p className="text-gray-500 text-xs">{edu.focus}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className={`bg-white/5 backdrop-blur-sm ring-1 border-white/10 rounded-2xl p-6 lg:p-8 mb-16 transition-all duration-700 delay-900 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8 text-center">
            Stack Tecnológica
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {Object.entries(techStack).map(([category, technologies], index) => (
              <div key={index} className="bg-white/5 ring-1 border-white/10 rounded-xl p-6">
                <h4 className="text-lg font-bold text-blue-400 mb-4">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-500/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Links */}
        <div className={`text-center transition-all duration-700 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8">
            Vamos nos Conectar?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target={link.platform !== 'E-mail' ? '_blank' : '_self'}
                rel={link.platform !== 'E-mail' ? 'noopener noreferrer' : ''}
                className="group bg-white/5 backdrop-blur-sm ring-1 border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-blue-500/30 hover:scale-105 transition-all duration-300"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {link.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{link.platform}</h4>
                <p className="text-gray-400 text-sm">{link.description}</p>
                <div className="mt-4 text-blue-400 text-sm font-medium group-hover:text-blue-300">
                  Conectar →
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;