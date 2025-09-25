import React, { useState, useEffect } from 'react';

const ContactForm = () => {
  const [activePanel, setActivePanel] = useState<'powerbi' | 'data' | 'website'>('powerbi');
  const [currentPanelIndex, setCurrentPanelIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    contactPref: 'whatsapp'
  });

  const panels = ['powerbi', 'data', 'website'] as const;

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentPanelIndex + 1) % panels.length;
      setCurrentPanelIndex(nextIndex);
      setActivePanel(panels[nextIndex]);
    }, 10000); // 10 segundos

    return () => clearInterval(interval);
  }, [currentPanelIndex]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
    alert('Solicitação enviada! Entraremos em contato em breve.');
    setFormData({
      name: '',
      phone: '',
      email: '',
      date: '',
      contactPref: 'whatsapp'
    });
  };

  return (
    <section 
      id="contact" 
      className="relative bg-gradient-to-br from-gray-800 to-gray-900 text-white py-20 lg:py-32 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          
          {/* Left Side - Content & Visualizations */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <h2 className="text-3xl lg:text-6xl pb-5 font-extrabold mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
                Solicite um Orçamento
              </h2>
              <p className="text-lg lg:text-xl text-gray-400 leading-relaxed">
                Preencha o formulário ao lado e entraremos em contato para entender sua necessidade. 
                Podemos falar por telefone, WhatsApp ou e-mail, como for melhor para você.
              </p>
            </div>

            {/* Visualizations Container - ALTURA FIXA */}
            <div className="bg-white/5 backdrop-blur-sm ring-1 border-white/10 rounded-2xl p-6 lg:p-8" style={{ height: '450px' }}>
              
              {/* Indicators */}
              <div className="flex justify-center gap-2 mb-6">
                {panels.map((panel, index) => (
                  <div
                    key={panel}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentPanelIndex ? 'bg-blue-400 w-8' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>

              {/* Panels Container */}
              <div className="relative w-full h-full">
                
                {/* Power BI Panel */}
                <div className={`absolute inset-0 transition-opacity duration-500 ${
                  activePanel === 'powerbi' ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}>
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-blue-400 mb-2">📊 Power BI Analytics</h3>
                    <p className="text-gray-400 text-sm">Dashboards e relatórios inteligentes</p>
                  </div>
                  
                  {/* Line Chart */}
                  <div className="bg-white/5 ring-1 border-white/10 rounded-lg p-4 h-64">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-gray-300 text-sm font-medium">Crescimento de Vendas</span>
                      <span className="text-green-400 text-sm">+35% ↗</span>
                    </div>
                    
                    <div className="relative h-48">
                      {/* Grid Lines */}
                      <div className="absolute inset-0 grid grid-rows-4 opacity-20">
                        {[...Array(4)].map((_, i) => (
                          <div key={i} className="ring-1-b border-gray-600"></div>
                        ))}
                      </div>
                      
                      {/* Line Chart SVG */}
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 180">
                        <defs>
                          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{stopColor:'#3b82f6', stopOpacity:1}} />
                            <stop offset="100%" style={{stopColor:'#60a5fa', stopOpacity:1}} />
                          </linearGradient>
                        </defs>
                        
                        {/* Line Path */}
                        <path
                          d="M 20 140 Q 70 120 100 100 T 180 80 Q 220 60 260 40"
                          stroke="url(#lineGradient)"
                          strokeWidth="3"
                          fill="none"
                          className="animate-pulse"
                          style={{
                            strokeDasharray: '300',
                            strokeDashoffset: '300',
                            animation: 'drawLine 2s ease-in-out forwards'
                          }}
                        />
                        
                        {/* Data Points */}
                        {[
                          { x: 20, y: 140 },
                          { x: 70, y: 120 },
                          { x: 100, y: 100 },
                          { x: 140, y: 90 },
                          { x: 180, y: 80 },
                          { x: 220, y: 60 },
                          { x: 260, y: 40 }
                        ].map((point, i) => (
                          <circle
                            key={i}
                            cx={point.x}
                            cy={point.y}
                            r="4"
                            fill="#3b82f6"
                            className="animate-pulse"
                            style={{ animationDelay: `${i * 0.3}s` }}
                          />
                        ))}
                      </svg>
                      
                      {/* Labels */}
                      <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500 px-2">
                        <span>Jan</span>
                        <span>Mar</span>
                        <span>Mai</span>
                        <span>Jul</span>
                        <span>Set</span>
                        <span>Nov</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Data Engineering Panel */}
                <div className={`absolute inset-0 transition-opacity duration-500 ${
                  activePanel === 'data' ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}>
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-blue-400 mb-2">🔧 Engenharia de Dados</h3>
                    <p className="text-gray-400 text-sm">Pipeline e arquitetura de dados</p>
                  </div>
                  
                  {/* Database Flow */}
                  <div className="h-64 flex flex-col justify-center items-center space-y-4">
                    {/* Sources */}
                    <div className="flex justify-center space-x-4">
                      {[
                        { icon: '📊', label: 'Excel' },
                        { icon: '🔗', label: 'API' },
                        { icon: '🗄️', label: 'DB' }
                      ].map((source, i) => (
                        <div key={i} className="bg-purple-500/20 ring-1 border-purple-500/30 rounded-lg p-3 text-center">
                          <div className="text-2xl mb-1">{source.icon}</div>
                          <div className="text-xs text-purple-300">{source.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Flow Arrow */}
                    <div className="text-blue-400 text-2xl animate-bounce">↓</div>
                    
                    {/* ETL Process */}
                    <div className="bg-blue-500/20 ring-1 border-blue-500/30 rounded-lg p-4 w-full max-w-xs text-center">
                      <div className="text-xl mb-2">⚙️</div>
                      <div className="text-sm font-medium text-blue-300">Manipulação dos dados</div>
                      <div className="text-xs text-gray-400 mt-1">Criar significado e Resultado</div>
                    </div>
                    
                    {/* Flow Arrow */}
                    {/* <div className="text-blue-400 text-2xl animate-bounce">↓</div> */}
                    
                    {/* Data Warehouse
                    <div className="bg-green-500/20 ring-1 border-green-500/30 rounded-lg p-4 w-full max-w-xs text-center">
                      <div className="text-xl mb-2">🏢</div>
                      <div className="text-sm font-medium text-green-300">Data Warehouse</div>
                      <div className="text-xs text-gray-400 mt-1">Dados Estruturados</div>
                    </div> */}
                  </div>
                </div>

                {/* Website Development Panel */}
                <div className={`absolute inset-0 transition-opacity duration-500 ${
                  activePanel === 'website' ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}>
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-blue-400 mb-2">🌐 Desenvolvimento Web</h3>
                    <p className="text-gray-400 text-sm">Sites profissionais e responsivos</p>
                  </div>
                  
                  {/* Interactive Navigation */}
                  <div className="h-72 lg:h-64 bg-white/5 ring-1 border-white/10 rounded-lg overflow-hidden">
                    {/* Browser Header */}
                    <div className="bg-gray-800 px-4 py-2 flex items-center gap-2 ring-1-b border-gray-700">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="flex-1 bg-gray-700 rounded px-3 py-1 text-xs text-gray-300">
                        www.suaempresa.com.br
                      </div>
                    </div>
                    
                    {/* Website Content */}
                    <div className="p-4 bg-white text-gray-800 h-full">
                      {/* Header */}
                      <div className="flex justify-between items-center mb-4 pb-2 ring-1-b border-gray-200">
                        <div className="font-bold text-blue-600">Sua Empresa</div>
                        <div className="flex gap-4 text-sm">
                          <span className="hover:text-blue-600 cursor-pointer transition-colors">Home</span>
                          <span className="hover:text-blue-600 cursor-pointer transition-colors">Sobre</span>
                          <span className="hover:text-blue-600 cursor-pointer transition-colors">Serviços</span>
                          <span className="hover:text-blue-600 cursor-pointer transition-colors">Contato</span>
                        </div>
                      </div>
                      
                      {/* Hero Section */}
                      <div className="text-center py-6">
                        <h1 className="text-xl font-bold mb-2">Bem-vindos ao Futuro</h1>
                        <p className="text-gray-600 text-sm mb-4">Soluções digitais para seu negócio crescer</p>
                        <div className="bg-blue-600 text-white px-4 py-2 rounded text-sm inline-block cursor-pointer hover:bg-blue-700 transition-colors">
                          Saiba Mais
                        </div>
                      </div>
                      
                      {/* Features */}
                      <div className="grid grid-cols-3 gap-2 mt-4">
                        {['⚡ Rápido', '📱 Responsivo', '🔒 Seguro'].map((feature, i) => (
                          <div key={i} className="text-center p-2 bg-gray-50 rounded text-xs">
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white/5 backdrop-blur-sm ring-1 border-white/10 rounded-2xl p-6 lg:p-8 min-h-full">
            <div className="space-y-6">
              {/* Nome */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nome *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Digite seu nome completo"
                  className="w-full px-4 py-3 bg-white/10 ring-1 border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-orange-500 outline-none transition-all duration-300"
                />
              </div>

              {/* Telefone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Telefone *
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="(00) 00000-0000"
                  className="w-full px-4 py-3 bg-white/10 ring-1 border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-orange-500 outline-none transition-all duration-300"
                />
              </div>

              {/* E-mail */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  E-mail *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="seu@email.com"
                  className="w-full px-4 py-3 bg-white/10 ring-1 border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-orange-500 outline-none transition-all duration-300"
                />
              </div>

              {/* Data */}
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-300 mb-2">
                  Melhor data para contato
                </label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 ring-1 border-white/20 rounded-lg text-white focus:border-blue-500 focus:ring-2 focus:ring-orange-500 outline-none transition-all duration-300"
                />
              </div>

              {/* Preferência de Contato */}
              <div>
                <label htmlFor="contactPref" className="block text-sm font-medium text-gray-300  mb-2">
                  Como prefere ser contatado?
                </label>
                <select
                  id="contactPref"
                  name="contactPref"
                  value={formData.contactPref}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-600 ring-1 border-white rounded-lg text-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500 outline-none transition-all duration-300"
                >
                  <option value="whatsapp">WhatsApp</option>
                  <option value="email">E-mail</option>
                  <option value="telefone">Telefone</option>
                </select>
              </div>

              {/* Botão */}
              <button
                onClick={handleSubmit}
                className="w-full py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-2"
              >
                🚀 Enviar Solicitação
              </button>
            </div>

            {/* Header */}
            <div>
              <p className="text-lg pt-5 text-gray-400 leading-relaxed">
                Nosso prazo de resposta é de até 24 horas após o envio do formulário. Para agilizar a comunicação com nossa equipe, informe claramente como você prefere receber o retorno.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes drawLine {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactForm;