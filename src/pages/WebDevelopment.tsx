import Head from "next/head";
import { useTheme } from '../contexts/ThemeContext';

export default function WebDevelopmentSection() {
  const { isDarkMode } = useTheme();

  return (
    <>
      <Head>
        <title>Desenvolvimento Web | Sites e Landing Pages | BC Tech Solution</title>
        <meta 
          name="description" 
          content="Criação de sites profissionais, landing pages e lojas virtuais para pequenas empresas. Design responsivo, SEO otimizado. A partir de R$ 499,00" 
        />
        
        {/* Palavras-chave */}
        <meta 
          name="keywords" 
          content="desenvolvimento web, criação de sites, landing page, site institucional, loja virtual, e-commerce, site responsivo, site profissional, web design"
        />
        
        {/* Open Graph */}
        <meta property="og:title" content="Desenvolvimento Web Profissional | BC Tech Solution" />
        <meta property="og:description" content="Sites, landing pages e lojas virtuais para pequenas empresas" />
        <meta property="og:url" content="https://bctechsolutionsadvisory.com/WebDevelopment" />
        <meta property="og:type" content="website" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://bctechsolutionsadvisory.com/WebDevelopment" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Desenvolvimento Web",
              "provider": {
                "@type": "Organization",
                "name": "BC Tech Solution & Advisory",
                "url": "https://bctechsolutionsadvisory.com"
              },
              "areaServed": "BR",
              "description": "Criação de sites profissionais, landing pages e lojas virtuais para pequenas empresas. Design responsivo e SEO otimizado",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Serviços de Desenvolvimento Web",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Landing Page",
                      "description": "Página focada em divulgar seu trabalho com design impactante e carregamento rápido"
                    },
                    "price": "499.00",
                    "priceCurrency": "BRL"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Site Institucional",
                      "description": "Presença digital profissional para sua empresa com SEO otimizado"
                    },
                    "price": "2500.00",
                    "priceCurrency": "BRL"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Loja Virtual",
                      "description": "E-commerce completo para vender online com pagamento integrado"
                    },
                    "price": "4500.00",
                    "priceCurrency": "BRL"
                  }
                ]
              },
              "offers": {
                "@type": "AggregateOffer",
                "lowPrice": "499.00",
                "highPrice": "4500.00",
                "priceCurrency": "BRL",
                "availability": "https://schema.org/InStock"
              }
            })
          }}
        />
      </Head>

      <section 
        id="web-development" 
        className={`relative ${
          isDarkMode 
            ? 'bg-[#1a1a1a] text-white' 
            : 'bg-gray-50 text-gray-900'
        } py-24`}
      >
        {/* fundo com gradiente radial */}
        <div className={`absolute inset-0 ${
          isDarkMode 
            ? 'bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.08),transparent_50%)]' 
            : 'bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.05),transparent_50%)]'
        }`} />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <div className={`inline-flex items-center gap-2 ${
              isDarkMode 
                ? 'bg-blue-500/15 border-blue-500/30 text-blue-400' 
                : 'bg-blue-100 border-blue-300 text-blue-600'
            } ring-1 rounded-full px-4 py-2 text-lg font-medium mb-6 min-w-full md:min-w-sm justify-center`}>
              <span>🌐</span>
              <span>Desenvolvimento Web</span>
            </div>
            <h2 className={`text-3xl lg:text-5xl font-extrabold pb-6 ${
              isDarkMode
                ? 'bg-gradient-to-r from-white to-blue-400'
                : 'bg-gradient-to-r from-gray-900 to-blue-600'
            } bg-clip-text text-transparent text-start lg:text-center`}>
              Sites Profissionais para Pequenas Empresas
            </h2>
            <p className={`text-lg lg:text-xl ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            } max-w-3xl mx-auto leading-relaxed text-start lg:text-center`}>
              Criação de sites modernos, responsivos e otimizados para converter visitantes em clientes
            </p>
          </div>

          {/* Tipos de Sites */}
          <div className={`mb-16 ${
            isDarkMode 
              ? 'bg-white/5 border-white/10' 
              : 'bg-white border-gray-200'
          } ring-1 rounded-xl p-10 backdrop-blur`}>
            <h3 className={`text-2xl font-bold text-center mb-10 ${
              isDarkMode ? 'text-blue-400' : 'text-blue-600'
            }`}>
              🎯 Tipos de Sites que Desenvolvo
            </h3>
            <div className="grid lg:grid-cols-3 gap-6">

              {/* Landing Page */}
              <div className={`${
                isDarkMode 
                  ? 'bg-white/5 border-white/10 hover:border-blue-400/30' 
                  : 'bg-gray-50 border-gray-200 hover:border-blue-400'
              } ring-1 rounded-lg p-6 hover:translate-y-[-4px] hover:shadow-lg transition`}>
                <div className="grid xl:flex items-center justify-between mb-4">
                  <div className="text-3xl">🎯</div>
                  <div className={`font-bold ml-2 flex-1 ${
                    isDarkMode ? 'text-gray-200' : 'text-gray-900'
                  }`}>
                    Landing Page
                  </div>
                  <div className={`${
                    isDarkMode 
                      ? 'bg-blue-500/20 text-blue-400' 
                      : 'bg-blue-100 text-blue-600'
                  } px-3 py-1 rounded-full text-sm font-semibold`}>
                    A partir de R$ 499,00
                  </div>
                </div>
                <p className={`${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                } mb-4`}>
                  Página focada em divulgar seu trabalho
                </p>
                <ul className={`space-y-2 text-sm ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  <li>📈 Divulgação do Produto ou Serviço</li>
                  <li>⚡ Carregamento Ultra-Rápido</li>
                  <li>🎨 Design Impactante</li>
                  <li>📊 Portal Adm para consultar os formulários</li>
                  <li>📄 Informações por e-mail</li>
                  <li>🔑 Simples e Direto</li>
                  <li>👉 Entrega em até quatro dias</li>
                  <li>🌐 Custo com o domínio do seu site</li>
                  <li>🔗 Manutenção simplificada</li>
                  <li>📝 Até cinco sessões para seu site</li>
                </ul>
              </div>

              {/* Institucional */}
              <div className={`${
                isDarkMode 
                  ? 'bg-white/5 border-white/10 hover:border-blue-400/30' 
                  : 'bg-gray-50 border-gray-200 hover:border-blue-400'
              } ring-1 rounded-lg p-6 hover:translate-y-[-4px] hover:shadow-lg transition`}>
                <div className="grid xl:flex items-center justify-between mb-4">
                  <div className="text-3xl">🏢</div>
                  <div className={`font-bold ml-2 flex-1 ${
                    isDarkMode ? 'text-gray-200' : 'text-gray-900'
                  }`}>
                    Site Institucional
                  </div>
                  <div className={`${
                    isDarkMode 
                      ? 'bg-blue-500/20 text-blue-400' 
                      : 'bg-blue-100 text-blue-600'
                  } px-3 py-1 rounded-full text-sm font-semibold`}>
                    A partir de R$ 2.500
                  </div>
                </div>
                <p className={`${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                } mb-4`}>
                  Presença digital profissional para sua empresa
                </p>
                <ul className={`space-y-2 text-sm ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  <li>📱 Design Responsivo</li>
                  <li>🔍 Otimização SEO</li>
                  <li>⚡ Carregamento Rápido</li>
                  <li>📧 Formulário de Contato</li>
                  <li>🗺️ Integração Google Maps</li>
                  <li>👉 Entrega conforme o fluxo do Processo de desenvolvimento logo abaixo</li>
                  <li>🌐 Custo com o domínio do seu site</li>
                  <li>🔗 Manutenção simplificada</li>
                </ul>
              </div>

              {/* E-commerce */}
              <div className={`${
                isDarkMode 
                  ? 'bg-white/5 border-white/10 hover:border-blue-400/30' 
                  : 'bg-gray-50 border-gray-200 hover:border-blue-400'
              } ring-1 rounded-lg p-6 hover:translate-y-[-4px] hover:shadow-lg transition`}>
                <div className="grid xl:flex items-center justify-between mb-4">
                  <div className="text-3xl">🛒</div>
                  <div className={`font-bold ml-2 flex-1 ${
                    isDarkMode ? 'text-gray-200' : 'text-gray-900'
                  }`}>
                    Loja Virtual
                  </div>
                  <div className={`${
                    isDarkMode 
                      ? 'bg-blue-500/20 text-blue-400' 
                      : 'bg-blue-100 text-blue-600'
                  } px-3 py-1 rounded-full text-sm font-semibold`}>
                    A partir de R$ 4.500
                  </div>
                </div>
                <p className={`${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                } mb-4`}>
                  E-commerce completo para vender online
                </p>
                <ul className={`space-y-2 text-sm ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  <li>💳 Pagamento</li>
                  <li>📦 Controle de Estoque</li>
                  <li>🚚 Cálculo de Frete</li>
                  <li>👤 Área do Cliente</li>
                  <li>📊 Dashboard Admin</li>
                  <li>🛢️Conexão com Banco de Dados</li>
                  <li>👉 Entrega conforme o fluxo do Processo de desenvolvimento logo abaixo</li>
                  <li>🌐 Custo com o domínio do seu site</li>
                  <li>🔗 Manutenção simplificada</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Processo de Desenvolvimento */}
          <div className={`${
            isDarkMode 
              ? 'bg-white/5 border-white/10' 
              : 'bg-white border-gray-200'
          } ring-1 rounded-xl p-10 backdrop-blur`}>
            <h3 className={`text-2xl font-bold text-center mb-10 ${
              isDarkMode ? 'text-blue-400' : 'text-blue-600'
            }`}>
              🚀 Processo de Desenvolvimento
            </h3>
            <div className="grid md:grid-cols-4 gap-8 text-center relative">
              {[
                { step: "1", title: "Briefing & Planejamento", desc: "Entendimento do negócio, objetivos e definição da estrutura do site", time: "2-3 dias" },
                { step: "2", title: "Design & Wireframe", desc: "Criação do layout visual e experiência do usuário (UX/UI)", time: "5-7 dias" },
                { step: "3", title: "Desenvolvimento", desc: "Codificação, integração de funcionalidades e testes de qualidade", time: "10-15 dias" },
                { step: "4", title: "Deploy & Otimização", desc: "Publicação do site, configuração SEO e otimizações finais", time: "2-3 dias" },
              ].map((s, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-white text-xl font-bold mb-4 shadow-lg">
                    {s.step}
                  </div>
                  <h4 className={`font-bold mb-2 ${
                    isDarkMode ? 'text-gray-200' : 'text-gray-900'
                  }`}>
                    {s.title}
                  </h4>
                  <p className={`text-sm mb-2 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {s.desc}
                  </p>
                  <span className={`${
                    isDarkMode 
                      ? 'text-blue-400 bg-blue-500/10' 
                      : 'text-blue-600 bg-blue-100'
                  } px-3 py-1 rounded-full text-xs font-semibold`}>
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