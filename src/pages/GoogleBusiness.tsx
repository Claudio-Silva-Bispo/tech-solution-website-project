import Head from "next/head";

export default function GoogleBusinessSection() {
  return (
    <>
      <Head>
        <title>Google Meu Negócio - Apareça no Google Maps | BC Tech Solution</title>
        <meta 
          name="description" 
          content="Cadastro e otimização completa do Google Meu Negócio. Deixe sua empresa visível no Google Maps e nos resultados de busca local. Atraia mais clientes da sua região." 
        />
        
        {/* Palavras-chave */}
        <meta 
          name="keywords" 
          content="google meu negócio, google maps, busca local, seo local, perfil empresarial google, aparecer no google, cadastro google, visibilidade local"
        />
        
        {/* Open Graph */}
        <meta property="og:title" content="Google Meu Negócio - Apareça no Maps | BC Tech Solution" />
        <meta property="og:description" content="Cadastro completo no Google Meu Negócio para sua empresa aparecer no Maps" />
        <meta property="og:url" content="https://bctechsolutionsadvisory.com/google-meu-negocio" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://bctechsolutionsadvisory.com/google-meu-negocio" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Google Meu Negócio e SEO Local",
              "provider": {
                "@type": "Organization",
                "name": "BC Tech Solution & Advisory",
                "url": "https://bctechsolutionsadvisory.com"
              },
              "areaServed": "BR",
              "description": "Cadastro completo e otimização do perfil no Google Meu Negócio para aumentar a visibilidade local da sua empresa no Google Maps e resultados de busca",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Serviços de Google Meu Negócio",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Cadastro Completo",
                      "description": "Criação e verificação da conta no Google Meu Negócio"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Otimização do Perfil",
                      "description": "Preenchimento completo com informações, fotos e categorias"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Configuração de Horários",
                      "description": "Horários de funcionamento e informações de contato"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Visibilidade no Maps",
                      "description": "Sua empresa visível no Google Maps e buscas locais"
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

      <section id="google-business" className="relative bg-[#1a1a1a] py-24 text-white">
        {/* Fundo com gradiente radial */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.08),transparent_50%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-500/15 ring-1 border-blue-500/30 rounded-full px-4 py-2 text-lg text-blue-400 font-medium mb-6 min-w-full md:min-w-sm justify-center">
              <span>📍</span>
              <span>Google Meu Negócio</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-extrabold pb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent text-start lg:text-center">
              Apareça no Google Maps e Atraia Clientes Locais
            </h2>
            <p className="text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed text-start lg:text-center">
              Cadastramos e otimizamos seu perfil no Google Meu Negócio para sua empresa ser encontrada facilmente por clientes da sua região
            </p>
          </div>

          {/* Por Que é Importante */}
          <div className="mb-16 bg-white/5 ring-1 border-white/10 rounded-xl p-10 backdrop-blur">
            <h3 className="text-2xl font-bold text-blue-400 text-center mb-10">
              🎯 Por Que Sua Empresa Precisa Estar no Google?
            </h3>
            <div className="grid lg:grid-cols-3 gap-6">

              {/* Visibilidade */}
              <div className="bg-white/5 ring-1 border-white/10 rounded-lg p-6 hover:translate-y-[-4px] hover:shadow-lg hover:border-blue-400/30 transition">
                <div className="text-center mb-4">
                  <div className="text-5xl mb-3">🔍</div>
                  <div className="font-bold text-gray-200 text-xl">Visibilidade Local</div>
                </div>
                <p className="text-gray-400 text-center text-sm">
                  Apareça quando pessoas da sua região buscam pelos seus serviços no Google e no Maps
                </p>
              </div>

              {/* Credibilidade */}
              <div className="bg-white/5 ring-1 border-white/10 rounded-lg p-6 hover:translate-y-[-4px] hover:shadow-lg hover:border-blue-400/30 transition">
                <div className="text-center mb-4">
                  <div className="text-5xl mb-3">⭐</div>
                  <div className="font-bold text-gray-200 text-xl">Credibilidade</div>
                </div>
                <p className="text-gray-400 text-center text-sm">
                  Perfil completo com fotos, avaliações e informações passa confiança para novos clientes
                </p>
              </div>

              {/* Mais Clientes */}
              <div className="bg-white/5 ring-1 border-white/10 rounded-lg p-6 hover:translate-y-[-4px] hover:shadow-lg hover:border-blue-400/30 transition">
                <div className="text-center mb-4">
                  <div className="text-5xl mb-3">📈</div>
                  <div className="font-bold text-gray-200 text-xl">Mais Clientes</div>
                </div>
                <p className="text-gray-400 text-center text-sm">
                  Facilite o contato com botões de ligação, mensagem, rotas e acesso ao site
                </p>
              </div>

            </div>
          </div>

          {/* O Que Fazemos */}
          <div className="mb-16 bg-white/5 ring-1 border-white/10 rounded-xl p-10 backdrop-blur">
            <h3 className="text-2xl font-bold text-blue-400 text-center mb-10">
              ✨ O Que Fazemos Por Você
            </h3>
            <div className="grid lg:grid-cols-2 gap-8">

              {/* Coluna 1 */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-white/5 ring-1 ring-white/10 rounded-lg p-4">
                  <div className="text-2xl mt-1">✅</div>
                  <div>
                    <h4 className="font-semibold text-gray-200 mb-1">Criação da Conta</h4>
                    <p className="text-gray-400 text-sm">Cadastramos sua empresa no Google de forma simples e rápida</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white/5 ring-1 ring-white/10 rounded-lg p-4">
                  <div className="text-2xl mt-1">📝</div>
                  <div>
                    <h4 className="font-semibold text-gray-200 mb-1">Preenchimento Completo</h4>
                    <p className="text-gray-400 text-sm">Todas as informações da empresa preenchidas corretamente</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white/5 ring-1 ring-white/10 rounded-lg p-4">
                  <div className="text-2xl mt-1">📸</div>
                  <div>
                    <h4 className="font-semibold text-gray-200 mb-1">Fotos Profissionais</h4>
                    <p className="text-gray-400 text-sm">Upload de fotos do negócio, produtos e ambiente</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white/5 ring-1 ring-white/10 rounded-lg p-4">
                  <div className="text-2xl mt-1">🔐</div>
                  <div>
                    <h4 className="font-semibold text-gray-200 mb-1">Verificação da Conta</h4>
                    <p className="text-gray-400 text-sm">Processo completo para sua empresa aparecer no Maps</p>
                  </div>
                </div>
              </div>

              {/* Coluna 2 */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-white/5 ring-1 ring-white/10 rounded-lg p-4">
                  <div className="text-2xl mt-1">🕐</div>
                  <div>
                    <h4 className="font-semibold text-gray-200 mb-1">Horários de Funcionamento</h4>
                    <p className="text-gray-400 text-sm">Configuração correta dos horários e dias de atendimento</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white/5 ring-1 ring-white/10 rounded-lg p-4">
                  <div className="text-2xl mt-1">📍</div>
                  <div>
                    <h4 className="font-semibold text-gray-200 mb-1">Localização Precisa</h4>
                    <p className="text-gray-400 text-sm">Pin no mapa posicionado exatamente no seu endereço</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white/5 ring-1 ring-white/10 rounded-lg p-4">
                  <div className="text-2xl mt-1">🏷️</div>
                  <div>
                    <h4 className="font-semibold text-gray-200 mb-1">Categorias e Serviços</h4>
                    <p className="text-gray-400 text-sm">Seleção das categorias certas para ser encontrado</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white/5 ring-1 ring-white/10 rounded-lg p-4">
                  <div className="text-2xl mt-1">📞</div>
                  <div>
                    <h4 className="font-semibold text-gray-200 mb-1">Informações de Contato</h4>
                    <p className="text-gray-400 text-sm">Telefone, WhatsApp, site e links configurados</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Resultado Final */}
          <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 ring-1 ring-green-500/30 rounded-xl p-10 backdrop-blur mb-16">
            <div className="text-center mb-8">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Resultado: Sua Empresa Visível no Google!
              </h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Com tudo configurado, sua empresa aparecerá nas buscas do Google e no Maps quando clientes procurarem pelos seus serviços na região
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div className="bg-white/5 rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">🗺️</div>
                <p className="text-gray-300 text-sm font-medium">Presença no Google Maps</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">📱</div>
                <p className="text-gray-300 text-sm font-medium">Fácil Contato pelo Celular</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">⭐</div>
                <p className="text-gray-300 text-sm font-medium">Avaliações dos Clientes</p>
              </div>
            </div>
          </div>

          {/* Processo */}
          <div className="bg-white/5 ring-1 border-white/10 rounded-xl p-10 backdrop-blur">
            <h3 className="text-2xl font-bold text-blue-400 text-center mb-10">
              🚀 Nosso Processo
            </h3>
            <div className="grid md:grid-cols-4 gap-8 text-center relative">
              {[
                { 
                  step: "1", 
                  title: "Coleta de Dados", 
                  desc: "Reunimos todas as informações da sua empresa e fotos necessárias", 
                  time: "1 dia" 
                },
                { 
                  step: "2", 
                  title: "Cadastro", 
                  desc: "Criamos e configuramos o perfil completo no Google Meu Negócio", 
                  time: "1-2 dias" 
                },
                { 
                  step: "3", 
                  title: "Verificação", 
                  desc: "Realizamos o processo de verificação com o Google", 
                  time: "3-5 dias" 
                },
                { 
                  step: "4", 
                  title: "Otimização", 
                  desc: "Ajustes finais e sua empresa visível no Google Maps", 
                  time: "1 dia" 
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