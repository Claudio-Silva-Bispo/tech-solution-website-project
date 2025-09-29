import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      role: "Gerente Geral",
      company: "Itaú",
      text: "A solução transformou completamente nossa capacidade de análise.",
      rating: 5
    },
    {
      role: "Gerente de Analytics",
      company: "Tokio Marine",
      text: "Os dashboards em Power BI nos deram uma visão 360° do negócio. A equipe foi extremamente profissional e entregou além do esperado.",
      rating: 5
    },
    {
      role: "Analista",
      company: "Ezze Seguros",
      text: "Implementação rápida, treinamento excelente e suporte impecável. Nossa equipe ganhou autonomia para tomar decisões baseadas em dados.",
      rating: 5
    },
    {
      role: "Área de Renegociação",
      company: "Banco Safra",
      text: "Profissionalismo e expertise técnica impressionantes. A documentação facilitou muito a manutenção.",
      rating: 5
    },
    {
      role: "Coordenador",
      company: "Mapfre Seguros",
      text: "Superou nossas expectativas! Sempre criando soluções mais rápido do que imaginávamos.",
      rating: 5
    },
    {
      role: "Gerente de Projetos",
      company: "Empresa nos Estados Unidos",
      text: "Excelente parceria do início ao fim. A equipe entendeu nossas necessidades e entregou uma solução que realmente resolve nossos problemas.",
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-play
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  // Calculate visible testimonials (show 3 on desktop, 1 on mobile)
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push({ ...testimonials[index], index });
    }
    return visible;
  };

  return (
    <section className="p-5 lg:p-0 py-20 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-8 lg:px-8">
        
        {/* Header */}
        <div className="lg:text-center mb-16">
          <h2 className="text-5xl lg:text-7xl font-extrabold pb-6 bg-gradient-to-r from-white via-blue-400 to-purple-400 bg-clip-text text-transparent">
            O que dizem nossos Clientes
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transformamos dados em resultados reais para empresas de diversos segmentos
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
          
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm ring-1 border-white/20 rounded-full p-3 transition-all duration-300 group"
          >
            <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm ring-1 border-white/20 rounded-full p-3 transition-all duration-300 group"
          >
            <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </button>

          {/* Testimonials - Desktop (3 cards) */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8">
            {getVisibleTestimonials().map((testimonial, i) => (
              <div
                key={i}
                className={`bg-white/5 backdrop-blur-sm ring-1 border-white/10 rounded-3xl p-8 transition-all duration-500 relative ${
                  i === 1 ? 'scale-105 bg-white/10' : 'hover:bg-white/10'
                }`}
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center opacity-80">
                  <Quote className="w-6 h-6 text-white" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, idx) => (
                    <Star key={idx} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-300 mb-6 leading-relaxed h-32">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="pt-6 border-t border-white/10">
                  <h4 className="font-semibold text-white">{testimonial.role}</h4>
                  <p className="text-sm text-blue-400">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials - Mobile (1 card) */}
          <div className="lg:hidden">
            <div className="bg-white/5 backdrop-blur-sm ring-1 border-white/10 rounded-3xl p-8 relative">
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center opacity-80">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, idx) => (
                  <Star key={idx} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonials[currentIndex].text}"
              </p>

              {/* Author Info */}
              <div className="pt-6 border-t border-white/10">
                <h4 className="font-semibold text-white">{testimonials[currentIndex].role}</h4>
                <p className="text-sm text-blue-400">{testimonials[currentIndex].company}</p>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-8 bg-blue-500' : 'w-2 bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;