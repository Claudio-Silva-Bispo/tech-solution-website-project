import Head from "next/head";

export default function AppSystemsSection() {
  return (
    <>
      <Head>
        <title>Desenvolvimento de Aplicativos e Sistemas | BC Tech Solution</title>
        <meta 
          name="description" 
          content="Criação de aplicativos mobile (Android e iOS) e sistemas personalizados para pequenas empresas. Soluções sob medida para automatizar e digitalizar seu negócio." 
        />
        
        {/* Palavras-chave */}
        <meta 
          name="keywords" 
          content="desenvolvimento de aplicativos, app mobile, sistemas personalizados, software sob medida, aplicativo android, aplicativo ios, sistema web, automação"
        />
        
        {/* Open Graph */}
        <meta property="og:title" content="Aplicativos e Sistemas Personalizados | BC Tech Solution" />
        <meta property="og:description" content="Desenvolvimento de apps e sistemas sob medida para pequenas empresas" />
        <meta property="og:url" content="https://bctechsolutionsadvisory.com/aplicativos-sistemas" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://bctechsolutionsadvisory.com/aplicativos-sistemas" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Desenvolvimento de Aplicativos e Sistemas",
              "provider": {
                "@type": "Organization",
                "name": "BC Tech Solution & Advisory",
                "url": "https://bctechsolutionsadvisory.com"
              },
              "areaServed": "BR",
              "description": "Desenvolvimento de aplicativos mobile (Android e iOS) e sistemas personalizados sob medida para pequenas empresas",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Serviços de Desenvolvimento",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Aplicativo Mobile",
                      "description": "Apps nativos ou híbridos para Android e iOS"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Sistema Web Personalizado",
                      "description": "Sistemas sob medida para gestão do seu negócio"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Automação de Processos",
                      "description": "Automatize tarefas repetitivas e ganhe eficiência"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Integração de Sistemas",
                      "description": "Conecte diferentes ferramentas e plataformas"
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

      <section id="apps-systems" className="relative bg-[#1a1a1a] py-24 text-white">
        {/* Fundo com gradiente radial */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.08),transparent_50%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-500/15 ring-1 border-blue-500/30 rounded-full px-4 py-2 text-lg text-blue-400 font-medium mb-6 min-w-full md:min-w-sm justify-center">
              <span>📱</span>
              <span>Aplicativos e Sistemas</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-extrabold pb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent text-start lg:text-center">
              Soluções Digitais Sob Medida Para Seu Negócio
            </h2>
            <p className="text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed text-start lg:text-center">
              Desenvolvimento de aplicativos mobile e sistemas personalizados que automatizam processos e impulsionam o crescimento da sua empresa
            </p>
          </div>

          {/* Tipos de Soluções */}
          <div className="mb-16 bg-white/5 ring-1 border-white/10 rounded-xl p-10 backdrop-blur">
            <h3 className="text-2xl font-bold text-blue-400 text-center mb-10">
              💡 Soluções que Desenvolvemos
            </h3>
            <div className="grid lg:grid-cols-2 gap-6">

              {/* Aplicativos Mobile */}
              <div className="bg-white/5 ring-1 border-white/10 rounded-lg p-6 hover:translate-y-[-4px] hover:shadow-lg hover:border-blue-400/30 transition">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl">📱</div>
                  <div className="font-bold text-gray-200 text-xl">Aplicativos Mobile</div>
                </div>
                <p className="text-gray-400 mb-4">Apps profissionais para Android e iOS</p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>🔹 Apps nativos ou híbridos</li>
                  <li>🔹 Interface intuitiva e moderna</li>
                  <li>🔹 Funciona offline (quando aplicável)</li>
                  <li>🔹 Notificações push</li>
                  <li>🔹 Integração com APIs</li>
                  <li>🔹 Publicação nas lojas (Google Play e App Store)</li>
                  <li>🔹 Manutenção e atualizações</li>
                </ul>
              </div>

              {/* Sistemas Web */}
              <div className="bg-white/5 ring-1 border-white/10 rounded-lg p-6 hover:translate-y-[-4px] hover:shadow-lg hover:border-blue-400/30 transition">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl">💻</div>
                  <div className="font-bold text-gray-200 text-xl">Sistemas Personalizados</div>
                </div>
                <p className="text-gray-400 mb-4">Plataformas web sob medida para seu negócio</p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>🔹 Sistema de gestão online ou local</li>
                  <li>🔹 Controle de estoque</li>
                  <li>🔹 Gestão de clientes e vendas</li>
                  <li>🔹 Automação de processos</li>
                  <li>🔹 Relatórios e dashboards</li>
                  <li>🔹 Múltiplos níveis de acesso</li>
                  <li>🔹 Banco de dados seguro</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Casos de Uso */}
          <div className="mb-16 bg-white/5 ring-1 border-white/10 rounded-xl p-10 backdrop-blur">
            <h3 className="text-2xl font-bold text-blue-400 text-center mb-10">
              🎯 Exemplos de Soluções Para Pequenas Empresas
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

              {/* Caso 1 */}
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-700/10 ring-1 ring-blue-500/20 rounded-lg p-6">
                <div className="text-3xl mb-3">🍕</div>
                <h4 className="font-bold text-gray-200 mb-2">Restaurantes</h4>
                <p className="text-gray-400 text-sm">App de delivery, cardápio digital, sistema de pedidos e controle de cozinha</p>
              </div>

              {/* Caso 2 */}
              <div className="bg-gradient-to-br from-purple-500/10 to-purple-700/10 ring-1 ring-purple-500/20 rounded-lg p-6">
                <div className="text-3xl mb-3">💇</div>
                <h4 className="font-bold text-gray-200 mb-2">Salões & Clínicas</h4>
                <p className="text-gray-400 text-sm">Sistema de agendamento online, gestão de clientes e histórico de atendimentos</p>
              </div>

              {/* Caso 3 */}
              <div className="bg-gradient-to-br from-green-500/10 to-green-700/10 ring-1 ring-green-500/20 rounded-lg p-6">
                <div className="text-3xl mb-3">📦</div>
                <h4 className="font-bold text-gray-200 mb-2">Varejo</h4>
                <p className="text-gray-400 text-sm">Sistema de vendas, controle de estoque, emissão de notas e relatórios</p>
              </div>

              {/* Caso 4 */}
              <div className="bg-gradient-to-br from-orange-500/10 to-orange-700/10 ring-1 ring-orange-500/20 rounded-lg p-6">
                <div className="text-3xl mb-3">🏋️</div>
                <h4 className="font-bold text-gray-200 mb-2">Academias</h4>
                <p className="text-gray-400 text-sm">App de treinos, controle de frequência, pagamentos e comunicação com alunos</p>
              </div>

              {/* Caso 5 */}
              <div className="bg-gradient-to-br from-pink-500/10 to-pink-700/10 ring-1 ring-pink-500/20 rounded-lg p-6">
                <div className="text-3xl mb-3">🚗</div>
                <h4 className="font-bold text-gray-200 mb-2">Serviços</h4>
                <p className="text-gray-400 text-sm">Agendamento de serviços, gestão de ordens de serviço e controle financeiro</p>
              </div>

              {/* Caso 6 */}
              <div className="bg-gradient-to-br from-teal-500/10 to-teal-700/10 ring-1 ring-teal-500/20 rounded-lg p-6">
                <div className="text-3xl mb-3">📚</div>
                <h4 className="font-bold text-gray-200 mb-2">Educação</h4>
                <p className="text-gray-400 text-sm">Plataforma de ensino, gestão de alunos, aulas online e acompanhamento</p>
              </div>

            </div>
          </div>

          {/* Diferenciais */}
          <div className="mb-16 bg-white/5 ring-1 border-white/10 rounded-xl p-10 backdrop-blur">
            <h3 className="text-2xl font-bold text-blue-400 text-center mb-10">
              ✨ Por Que Escolher Nossos Serviços
            </h3>
            <div className="grid lg:grid-cols-4 gap-6">

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-500/20 flex items-center justify-center text-3xl">
                  🎨
                </div>
                <h4 className="font-bold text-gray-200 mb-2">Sob Medida</h4>
                <p className="text-gray-400 text-sm">Desenvolvemos exatamente o que seu negócio precisa</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-500/20 flex items-center justify-center text-3xl">
                  💰
                </div>
                <h4 className="font-bold text-gray-200 mb-2">Custo-Benefício</h4>
                <p className="text-gray-400 text-sm">Soluções acessíveis para pequenas empresas</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center text-3xl">
                  🚀
                </div>
                <h4 className="font-bold text-gray-200 mb-2">Tecnologia Moderna</h4>
                <p className="text-gray-400 text-sm">Usamos as melhores tecnologias do mercado</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-500/20 flex items-center justify-center text-3xl">
                  🤝
                </div>
                <h4 className="font-bold text-gray-200 mb-2">Suporte Contínuo</h4>
                <p className="text-gray-400 text-sm">Acompanhamento após a entrega do projeto</p>
              </div>

            </div>
          </div>

          {/* Processo de Desenvolvimento */}
          <div className="bg-white/5 ring-1 border-white/10 rounded-xl p-10 backdrop-blur">
            <h3 className="text-2xl font-bold text-blue-400 text-center mb-10">
              🚀 Processo de Desenvolvimento
            </h3>
            <div className="grid md:grid-cols-5 gap-6 text-center relative">
              {[
                { 
                  step: "1", 
                  title: "Descoberta", 
                  desc: "Entendemos suas necessidades e definimos os requisitos do projeto", 
                  time: "1-2 semanas" 
                },
                { 
                  step: "2", 
                  title: "Planejamento", 
                  desc: "Criamos wireframes, arquitetura e planejamento técnico detalhado", 
                  time: "1-2 semanas" 
                },
                { 
                  step: "3", 
                  title: "Desenvolvimento", 
                  desc: "Codificação das funcionalidades e integração de sistemas", 
                  time: "4-12 semanas" 
                },
                { 
                  step: "4", 
                  title: "Testes", 
                  desc: "Testes de qualidade, correção de bugs e validação com usuários", 
                  time: "1-2 semanas" 
                },
                { 
                  step: "5", 
                  title: "Lançamento", 
                  desc: "Deploy, treinamento da equipe e acompanhamento inicial", 
                  time: "1 semana" 
                },
              ].map((s, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-white text-xl font-bold mb-4 shadow-lg">
                    {s.step}
                  </div>
                  <h4 className="font-bold text-gray-200 mb-2">{s.title}</h4>
                  <p className="text-gray-400 text-sm mb-2">{s.desc}</p>
                  <span className="text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full text-xs font-semibold">
                    {s.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Final */}
          <div className="mt-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 ring-1 ring-blue-500/30 rounded-xl p-10 text-center backdrop-blur">
            <div className="text-5xl mb-4">💡</div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Tem uma Ideia? Vamos Transformá-la em Realidade!
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto mb-6">
              Conte-nos sobre seu projeto e desenvolveremos a solução perfeita para automatizar e digitalizar seu negócio
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              🚀 Solicitar Orçamento
            </button>
          </div>

        </div>
      </section>
    </>
  );
}