import Head from "next/head";

export default function SocialMedia() {
  return (
    <>
      <Head>
        <title>Gestão de Redes Sociais | Instagram e Facebook | BC Tech Solution</title>
        <meta 
          name="description" 
          content="Criação e gestão profissional de perfis no Instagram e Facebook para pequenas empresas. Identidade visual, posts estratégicos, feeds harmoniosos, reels e planejamento de conteúdo completo." 
        />
        
        {/* Palavras-chave */}
        <meta 
          name="keywords" 
          content="gestão redes sociais, instagram empresarial, facebook empresarial, posts profissionais, feeds, reels, social media, marketing digital, identidade visual, design posts, planejamento conteúdo, gestão instagram"
        />
        
        {/* Open Graph */}
        <meta property="og:title" content="Gestão de Redes Sociais | BC Tech Solution" />
        <meta property="og:description" content="Criação de perfis profissionais e gestão estratégica de Instagram e Facebook" />
        <meta property="og:url" content="https://bctechsolutionsadvisory.com/redes-sociais" />
        <meta property="og:type" content="website" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://bctechsolutionsadvisory.com/redes-sociais" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Gestão de Redes Sociais",
              "provider": {
                "@type": "Organization",
                "name": "BC Tech Solution & Advisory",
                "url": "https://bctechsolutionsadvisory.com"
              },
              "areaServed": "BR",
              "description": "Criação profissional de perfis no Instagram e Facebook com identidade visual consistente, primeiros posts estratégicos, feeds harmoniosos, reels de apresentação e planejamento editorial completo",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Serviços de Redes Sociais",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Criação de Perfis Profissionais",
                      "description": "Instagram e Facebook empresariais com bio otimizada, fotos personalizadas e configurações profissionais completas"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Identidade Visual para Redes Sociais",
                      "description": "Design consistente e profissional para sua marca nas redes sociais com templates personalizados"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Conteúdo Inicial Estratégico",
                      "description": "Primeiros 5-10 posts criados com feed harmonioso, textos persuasivos e planejamento editorial"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Produção de Reels",
                      "description": "Reels de apresentação e conteúdo em vídeo para engajamento nas redes sociais"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Planejamento de Conteúdo",
                      "description": "Estratégia de conteúdo definida com calendário editorial e diretrizes para posts futuros"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Gestão Continuada de Redes Sociais",
                      "description": "Acompanhamento mensal com posts regulares, gestão de comentários e relatórios de desempenho"
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

      <section id="social-media" className="relative bg-[#1a1a1a] py-24 text-white">
        {/* Fundo com gradiente radial */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.08),transparent_50%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-500/15 ring-1 border-blue-500/30 rounded-full px-4 py-2 text-lg text-blue-400 font-medium mb-6 min-w-full md:min-w-sm justify-center">
              <span>📱</span>
              <span>Redes Sociais</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-extrabold pb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent text-start lg:text-center">
              Presença Digital Profissional nas Redes Sociais
            </h2>
            <p className="text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed text-start lg:text-center">
              Criamos seu perfil profissional no Instagram e Facebook com identidade visual, primeiros posts estratégicos e planejamento de conteúdo
            </p>
          </div>

          {/* Texto Explicativo Introdutório */}
          <div className="bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 ring-1 border-pink-500/20 rounded-xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-pink-300 mb-4 flex items-center gap-3">
              <span>🎯</span>
              <span>Por Que Sua Empresa Precisa Estar nas Redes Sociais?</span>
            </h3>
            <p className='text-base text-gray-300 leading-relaxed mb-4'>
              Hoje em dia, <strong className="text-white">não estar nas redes sociais é perder clientes</strong> todos os dias. Mas criar um perfil profissional vai muito além de apenas ter uma conta:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-500/10 ring-1 border-red-500/20 rounded-lg p-5">
                <div className="text-red-400 font-bold mb-3 flex items-center gap-2">
                  <span>❌</span>
                  <span>Perfil Amador (Feito Sem Estratégia):</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Posts sem padrão visual</li>
                  <li>• Bio confusa e desorganizada</li>
                  <li>• Fotos de baixa qualidade</li>
                  <li>• Sem identidade da marca</li>
                  <li>• Conteúdo aleatório sem estratégia</li>
                  <li>• Pouco ou nenhum engajamento</li>
                </ul>
              </div>
              <div className="bg-green-500/10 ring-1 border-green-500/20 rounded-lg p-5">
                <div className="text-green-400 font-bold mb-3 flex items-center gap-2">
                  <span>✅</span>
                  <span>Perfil Profissional (Nossa Abordagem):</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Feed harmonioso e atrativo</li>
                  <li>• Bio otimizada que converte</li>
                  <li>• Identidade visual consistente</li>
                  <li>• Branding forte da empresa</li>
                  <li>• Conteúdo estratégico planejado</li>
                  <li>• Maior credibilidade e vendas</li>
                </ul>
              </div>
            </div>
            <p className='text-sm text-pink-300 mt-6 italic'>
              💡 <strong>A Verdade:</strong> Seu cliente pesquisa sua empresa nas redes sociais ANTES de comprar. Um perfil profissional transmite confiança!
            </p>
          </div>

          {/* O Que Fazemos */}
          <div className="mb-16 bg-white/5 ring-1 border-white/10 rounded-xl p-10 backdrop-blur">
            <h3 className="text-2xl font-bold text-blue-400 text-center mb-10">
              🎯 Como Te Ajudamos a Entrar no Digital
            </h3>
            <div className="grid lg:grid-cols-2 gap-6">

              {/* Criação do Perfil */}
              <div className="bg-white/5 ring-1 border-white/10 rounded-lg p-6 hover:translate-y-[-4px] hover:shadow-lg hover:border-blue-400/30 transition">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl">✨</div>
                  <div className="font-bold text-gray-200 text-xl">Criação do Perfil</div>
                </div>
                <p className="text-gray-400 mb-4">Estruturamos sua presença digital do zero</p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>📱 Instagram e Facebook Empresariais</li>
                  <li>✏️ Bio otimizada e profissional</li>
                  <li>📸 Fotos de perfil e capa personalizadas</li>
                  <li>🎨 Identidade visual da marca</li>
                  <li>🔗 Links estratégicos configurados</li>
                  <li>⚙️ Configurações profissionais ativadas</li>
                </ul>
              </div>

              {/* Conteúdo Inicial */}
              <div className="bg-white/5 ring-1 border-white/10 rounded-lg p-6 hover:translate-y-[-4px] hover:shadow-lg hover:border-blue-400/30 transition">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl">🎬</div>
                  <div className="font-bold text-gray-200 text-xl">Conteúdo Inicial</div>
                </div>
                <p className="text-gray-400 mb-4">Posts estratégicos para começar com o pé direito</p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>📝 Primeiros 5-10 posts criados</li>
                  <li>📊 Feed visual harmonioso</li>
                  <li>🎥 Reels de apresentação (se aplicável)</li>
                  <li>💡 Estratégia de conteúdo definida</li>
                  <li>📅 Planejamento editorial básico</li>
                  <li>✍️ Textos persuasivos e engajadores</li>
                </ul>
              </div>

            </div>
          </div>

          {/* O Que Você Recebe - Detalhamento */}
          <div className="mb-16 bg-blue-500/10 ring-1 border-blue-500/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-blue-300 mb-6 text-center flex items-center justify-center gap-3">
              <span>📦</span>
              <span>O Que Está Incluído no Pacote</span>
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-all">
                <div className="text-4xl mb-4 text-center">🎨</div>
                <h4 className="text-lg font-bold text-white mb-3 text-center">Design Profissional</h4>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li>✅ Logo e cores da marca aplicados</li>
                  <li>✅ Templates personalizados</li>
                  <li>✅ Fotos de capa e perfil</li>
                  <li>✅ Destaques organizados (Stories)</li>
                  <li>✅ Feed com identidade visual única</li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-all">
                <div className="text-4xl mb-4 text-center">📝</div>
                <h4 className="text-lg font-bold text-white mb-3 text-center">Conteúdo Estratégico</h4>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li>✅ 5-10 posts prontos para publicar</li>
                  <li>✅ Textos que geram engajamento</li>
                  <li>✅ Hashtags estratégicas</li>
                  <li>✅ Call-to-actions eficazes</li>
                  <li>✅ Calendário de publicações</li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-all">
                <div className="text-4xl mb-4 text-center">🎯</div>
                <h4 className="text-lg font-bold text-white mb-3 text-center">Estratégia Definida</h4>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li>✅ Análise do público-alvo</li>
                  <li>✅ Pilares de conteúdo definidos</li>
                  <li>✅ Tom de voz da marca</li>
                  <li>✅ Frequência de posts sugerida</li>
                  <li>✅ Objetivos e metas claras</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Opções de Continuidade */}
          <div className="bg-white/5 ring-1 border-white/10 rounded-xl p-10 backdrop-blur">
            <h3 className="text-2xl font-bold text-blue-400 text-center mb-6">
              🚀 E Depois? Você Decide!
            </h3>
            
            {/* Texto Explicativo */}
            <div className="bg-purple-500/10 ring-1 border-purple-500/20 rounded-lg p-6 mb-8">
              <p className="text-gray-300 text-center leading-relaxed">
                Depois de criar seu perfil profissional e publicar os primeiros posts, <strong className="text-white">você escolhe</strong> como quer continuar:
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              
              {/* Opção 1: Autonomia */}
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-700/10 ring-1 ring-blue-500/30 rounded-lg p-8 text-center">
                <div className="text-5xl mb-4">💪</div>
                <h4 className="text-xl font-bold text-white mb-3">Você Assume o Controle</h4>
                <p className="text-gray-300 text-sm mb-4">
                  Com tudo estruturado e os primeiros posts publicados, você pode dar continuidade ao seu perfil de forma independente
                </p>
                <div className="bg-white/5 rounded-lg p-4 text-left text-sm space-y-2">
                  <p className="text-gray-400">✅ Perfil profissional criado</p>
                  <p className="text-gray-400">✅ Identidade visual definida</p>
                  <p className="text-gray-400">✅ Primeiros posts estratégicos</p>
                  <p className="text-gray-400">✅ Planejamento de conteúdo</p>
                  <p className="text-gray-400">✅ Templates para usar</p>
                </div>
                <div className="mt-6 text-blue-300 text-sm italic">
                  💡 Ideal para quem tem tempo e quer economizar!
                </div>
              </div>

              {/* Opção 2: Gestão Continuada */}
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-700/10 ring-1 ring-purple-500/30 rounded-lg p-8 text-center">
                <div className="text-5xl mb-4">🤝</div>
                <h4 className="text-xl font-bold text-white mb-3">Gestão pela Nossa Equipe</h4>
                <p className="text-gray-300 text-sm mb-4">
                  Prefere focar no seu negócio? Nossa equipe cuida de tudo para você crescer nas redes sociais
                </p>
                <div className="bg-white/5 rounded-lg p-4 text-left text-sm space-y-2">
                  <p className="text-gray-400">📅 Posts regulares e programados</p>
                  <p className="text-gray-400">💬 Gestão de comentários e DMs</p>
                  <p className="text-gray-400">📊 Relatórios mensais de performance</p>
                  <p className="text-gray-400">🎯 Estratégias de crescimento</p>
                  <p className="text-gray-400">📈 Aumento de seguidores e vendas</p>
                </div>
                <div className="mt-6 text-purple-300 text-sm italic">
                  💡 Ideal para quem quer resultados sem preocupação!
                </div>
              </div>

            </div>
          </div>

          {/* Processo */}
          <div className="mt-16 bg-white/5 ring-1 border-white/10 rounded-xl p-10 backdrop-blur">
            <h3 className="text-2xl font-bold text-blue-400 text-center mb-10">
              📋 Nosso Processo
            </h3>
            <div className="grid md:grid-cols-4 gap-8 text-center relative">
              {[
                { 
                  step: "1", 
                  title: "Briefing", 
                  desc: "Entendemos seu negócio, público-alvo e objetivos nas redes sociais", 
                  time: "1 dia" 
                },
                { 
                  step: "2", 
                  title: "Criação", 
                  desc: "Desenvolvemos identidade visual e criamos os perfis profissionais", 
                  time: "3-5 dias" 
                },
                { 
                  step: "3", 
                  title: "Conteúdo", 
                  desc: "Produzimos os primeiros posts, feed e planejamento estratégico", 
                  time: "5-7 dias" 
                },
                { 
                  step: "4", 
                  title: "Lançamento", 
                  desc: "Publicamos o conteúdo inicial e definimos próximos passos", 
                  time: "1-2 dias" 
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

        </div>
      </section>
    </>
  );
}