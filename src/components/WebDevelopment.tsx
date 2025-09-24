export default function WebDevelopmentSection() {
  return (
    <section id="web-development" className="relative bg-[#1a1a1a] py-24 text-white">
      {/* fundo com gradiente radial */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.08),transparent_50%)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/15 ring-1 border-blue-500/30 rounded-full px-4 py-2 text-lg text-blue-400 font-medium mb-6 min-w-full md:min-w-sm justify-center">
            <span>🌐</span>
            <span>Desenvolvimento Web</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent text-start lg:text-center">
            Sites Profissionais para Pequenas Empresas
          </h2>
          <p className="text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed text-start lg:text-center">
            Criação de sites modernos, responsivos e otimizados para converter visitantes em clientes
          </p>
        </div>

        {/* Tipos de Sites */}
        <div className="mb-16 bg-white/5 ring-1 border-white/10 rounded-xl p-10 backdrop-blur">
          <h3 className="text-2xl font-bold text-blue-400 text-center mb-10">
            🎯 Tipos de Sites que Desenvolvo
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Institucional */}
            <div className="bg-white/5 ring-1 border-white/10 rounded-lg p-6 hover:translate-y-[-4px] hover:shadow-lg hover:border-blue-400/30 transition">
              <div className="grid xl:flex items-center justify-between mb-4">
                <div className="text-3xl">🏢</div>
                <div className="font-bold text-gray-200 ml-2 flex-1">Site Institucional</div>
                <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-semibold">
                  A partir de R$ 2.500
                </div>
              </div>
              <p className="text-gray-400 mb-4">Presença digital profissional para sua empresa</p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>📱 Design Responsivo</li>
                <li>🔍 Otimização SEO</li>
                <li>⚡ Carregamento Rápido</li>
                <li>📧 Formulário de Contato</li>
                <li>🗺️ Integração Google Maps</li>
                <li>👉 Entrega conforme o fluxo do Processo de desenvolvimento logo abaixo</li>
              </ul>
            </div>

            {/* E-commerce */}
            <div className="bg-white/5 ring-1 border-white/10 rounded-lg p-6 hover:translate-y-[-4px] hover:shadow-lg hover:border-blue-400/30 transition">
              <div className="grid xl:flex   items-center justify-between mb-4">
                <div className="text-3xl">🛒</div>
                <div className="font-bold text-gray-200 ml-2 flex-1">Loja Virtual</div>
                <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-semibold">
                  A partir de R$ 4.500
                </div>
              </div>
              <p className="text-gray-400 mb-4">E-commerce completo para vender online</p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>💳 Pagamento</li>
                <li>📦 Controle de Estoque</li>
                <li>🚚 Cálculo de Frete</li>
                <li>👤 Área do Cliente</li>
                <li>📊 Dashboard Admin</li>
                <li>🛢️Conexão com Banco de Dados</li>
                <li>👉 Entrega conforme o fluxo do Processo de desenvolvimento logo abaixo</li>
              </ul>
            </div>

            {/* Landing Page */}
            <div className="bg-white/5 ring-1 border-white/10 rounded-lg p-6 hover:translate-y-[-4px] hover:shadow-lg hover:border-blue-400/30 transition">
              <div className="grid xl:flex items-center justify-between mb-4">
                <div className="text-3xl">🎯</div>
                <div className="font-bold text-gray-200 ml-2 flex-1">Landing Page</div>
                <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-semibold">
                  A partir de R$ 499,00
                </div>
              </div>
              <p className="text-gray-400 mb-4">Página focada em divulgar seu trabalho</p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>📈 Divulgação do Produto ou Serviço</li>
                <li>⚡ Carregamento Ultra-Rápido</li>
                <li>🎨 Design Impactante</li>
                <li>📊 Portal Adm</li>
                <li>🔑 Simples e Direto</li>
                <li>👉 Entrega em até quatro dias</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Processo de Desenvolvimento */}
        <div className="bg-white/5 ring-1 border-white/10 rounded-xl p-10 backdrop-blur">
          <h3 className="text-2xl font-bold text-blue-400 text-center mb-10">
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
  );
}
