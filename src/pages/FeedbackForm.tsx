import React, { useState } from 'react';
import { Star, Send, CheckCircle } from 'lucide-react';

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    company: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (rating === 0 || !formData.name || !formData.role || !formData.company || !formData.message) return;
    
    try {
      const res = await fetch('/api/sendFeedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          rating,
          type: 'feedback' 
        })
      });

      if (res.ok) {
        setSubmitted(true);
        
        // Reset após 3 segundos
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ name: '', role: '', company: '', message: '' });
          setRating(0);
        }, 3000);
      } else {
        alert('Erro ao enviar o feedback. Tente novamente.');
      }
    } catch (err) {
      console.error(err);
      alert('Erro ao enviar o feedback. Tente novamente.');
    }
  };

interface FormData {
    name: string;
    role: string;
    company: string;
    message: string;
}

const handleChange = (field: keyof FormData, value: string): void => {
    setFormData({
        ...formData,
        [field]: value
    });
};

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" id="feedback">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="lg:text-center mb-16">
          <h2 className="text-3xl lg:text-6xl font-extrabold pb-6 bg-gradient-to-r from-white via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Compartilhe sua Experiência
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Seu feedback é muito importante para nós! Conte como foi trabalhar conosco
          </p>
        </div>

        {/* Form */}
        <div className="max-w-3xl mx-auto">
          {!submitted ? (
            <div className="bg-white/5 backdrop-blur-sm ring-1 border-white/10 rounded-3xl p-8 lg:p-12">
              
              {/* Rating Stars */}
              <div className="mb-8">
                <label className="block text-white font-semibold mb-4 text-lg">
                  Como você avalia nosso serviço? *
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      className="transition-transform hover:scale-110"
                    >
                      <Star
                        className={`w-10 h-10 ${
                          star <= (hoveredRating || rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-500'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Name */}
              <div className="mb-6">
                <label className="block text-white font-semibold mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className="w-full bg-white/10 ring-1 border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Seu nome"
                />
              </div>

              {/* Role & Company */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Cargo *
                  </label>
                  <input
                    type="text"
                    value={formData.role}
                    onChange={(e) => handleChange('role', e.target.value)}
                    className="w-full bg-white/10 ring-1 border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Ex: Diretor de TI"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Empresa *
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleChange('company', e.target.value)}
                    className="w-full bg-white/10 ring-1 border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Nome da empresa"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="mb-8">
                <label className="block text-white font-semibold mb-2">
                  Seu Depoimento *
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  rows={6}
                  className="w-full bg-white/10 ring-1 border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Conte sua experiência trabalhando conosco..."
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={rating === 0 || !formData.name || !formData.role || !formData.company || !formData.message}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Enviar Feedback
              </button>
            </div>
          ) : (
            // Success Message
            <div className="bg-white/5 backdrop-blur-sm ring-1 border-white/10 rounded-3xl p-12 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Obrigado pelo seu feedback! 🎉
              </h3>
              <p className="text-gray-300 text-lg">
                Sua opinião é muito importante para continuarmos melhorando nossos serviços.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeedbackForm;