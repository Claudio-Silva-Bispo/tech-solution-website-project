import React from 'react';
import { Building2, Shield, Heart, Globe, Landmark, Briefcase, TrendingUp } from 'lucide-react';

const ClientsMarquee = () => {
  const clients = [
    { name: "Itaú", icon: Landmark, color: "text-orange-500", bgGradient: "from-orange-500/20 to-orange-600/20" },
    { name: "Banco Safra", icon: Building2, color: "text-blue-500", bgGradient: "from-blue-500/20 to-blue-600/20" },
    { name: "Ezze Seguros", icon: Shield, color: "text-purple-500", bgGradient: "from-purple-500/20 to-purple-600/20" },
    { name: "Tokio Marine", icon: Shield, color: "text-red-500", bgGradient: "from-red-500/20 to-red-600/20" },
    { name: "Mapfre Seguros", icon: Shield, color: "text-green-500", bgGradient: "from-green-500/20 to-green-600/20" },
    { name: "Unimed", icon: Heart, color: "text-emerald-500", bgGradient: "from-emerald-500/20 to-emerald-600/20" },
    { name: "Cliente USA", icon: Globe, color: "text-cyan-500", bgGradient: "from-cyan-500/20 to-cyan-600/20" },
  ];

  // Criar um array maior para loop contínuo
  const repeatedClients = [...clients, ...clients, ...clients];

   const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Empresas que marcaram minha trajetória
          </h2>
          <p className="text-lg sm:text-xl text-gray-400">
            Experiência comprovada com grandes empresas do Brasil e exterior
          </p>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none"></div>

        {/* Animated Marquee */}
        <div className="flex gap-6 sm:gap-8 lg:gap-12 animate-marquee">
          {repeatedClients.map((client, index) => {
            const Icon = client.icon;
            return (
              <div
                key={index}
                className="flex-shrink-0"
              >
                <div className={`relative bg-gradient-to-br ${client.bgGradient} backdrop-blur-sm ring-1 border-white/10 rounded-2xl px-6 py-5 sm:px-8 sm:py-6 hover:scale-105 hover:shadow-xl hover:shadow-white/5 transition-all duration-300 group cursor-pointer min-w-[200px] sm:min-w-[240px]`}>
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${client.bgGradient} rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300`}></div>
                  
                  <div className="relative flex items-center gap-3 sm:gap-4">
                    <div className={`p-2 sm:p-3 bg-white/10 rounded-xl group-hover:rotate-12 transition-transform duration-300`}>
                      <Icon className={`w-6 h-6 sm:w-8 sm:h-8 ${client.color}`} />
                    </div>
                    <span className="text-lg sm:text-xl font-semibold text-gray-200 whitespace-nowrap">
                      {client.name}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 items-center pt-20 justify-center">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/25 flex items-center gap-2"
                >
                  🚀 Faça um orçamento
                </button>
                <button 
                  onClick={() => scrollToSection('complete-service')}
                  className="text-gray-300 font-semibold flex items-center gap-2 hover:text-blue-500 transition-colors duration-300"
                >
                  Saiba sobre minha trajetória →
                </button>
              </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
          width: max-content;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }

        @media (max-width: 640px) {
          .animate-marquee {
            animation: marquee 25s linear infinite;
          }
        }
      `}</style>
    </section>
  );
};

export default ClientsMarquee;