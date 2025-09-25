import React from 'react';
import { Building2 } from 'lucide-react';

const ClientsMarquee = () => {
  const clients = [
    { name: "Itaú", color: "text-orange-500" },
    { name: "Banco Safra", color: "text-blue-500" },
    { name: "Ezze Seguros", color: "text-purple-500" },
    { name: "Tokio Marine", color: "text-red-500" },
    { name: "Mapfre Seguros", color: "text-green-500" },
    { name: "Unimed", color: "text-emerald-500" },
    { name: "Cliente USA", color: "text-cyan-500" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="lg:text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Empresas que marcaram minha trajetória
          </h2>
          <p className="text-xl text-gray-400">
            Experiência comprovada com grandes empresas do Brasil e exterior
          </p>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 to-transparent z-10"></div>

        {/* Animated Marquee */}
        <div className="flex animate-marquee">
          {/* First Set */}
          {clients.map((client, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 mx-8 lg:mx-12"
            >
              <div className="bg-white/5 backdrop-blur-sm ring-1 border-white/10 rounded-2xl px-8 py-6 hover:bg-white/10 transition-all duration-300 group">
                <div className="flex items-center gap-4">
                  <Building2 className={`w-8 h-8 ${client.color} group-hover:scale-110 transition-transform duration-300`} />
                  <span className="text-xl font-semibold text-gray-200 whitespace-nowrap">
                    {client.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
          
          {/* Duplicate Set for Seamless Loop */}
          {clients.map((client, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 mx-8 lg:mx-12"
            >
              <div className="bg-white/5 backdrop-blur-sm ring-1 border-white/10 rounded-2xl px-8 py-6 hover:bg-white/10 transition-all duration-300 group">
                <div className="flex items-center gap-4">
                  <Building2 className={`w-8 h-8 ${client.color} group-hover:scale-110 transition-transform duration-300`} />
                  <span className="text-xl font-semibold text-gray-200 whitespace-nowrap">
                    {client.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 10s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ClientsMarquee;