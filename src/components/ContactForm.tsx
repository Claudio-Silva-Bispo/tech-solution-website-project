export default function ContactForm() {
  return (
    <section id="web-development" className="relative bg-[#2C394C] text-white">
       <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32">
            {/* Lado Esquerdo */}
            <div className="flex flex-col justify-between text-white">
                <div className="space-y-4">
                <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent text-start">Solicite um Orçamento</h2>
                <p className="text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed text-start">
                    Preencha o formulário ao lado e entraremos em contato para entender sua necessidade.  
                    Podemos falar por telefone, WhatsApp ou e-mail, como for melhor para você.
                </p>
                </div>
                <img src="assets/svg/doodle.svg" alt="" className="p-6 h-52 md:h-64 opacity-80" />
            </div>

            {/* Formulário */}
            <form noValidate className="space-y-6 text-white ring-1 border-white/10 rounded-xl p-5">
                {/* Nome */}
                <div>
                    <label htmlFor="name" className="text-sm font-medium">Nome</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Digite o nome para contato"
                        className="w-full p-2 mt-1 rounded-lg bg-white/10 ring-1 border-white/20 placeholder-gray-300 focus:ring-2 focus:ring-orange-400 outline-none"
                    />
                </div>

                {/* Telefone */}
                <div>
                    <label htmlFor="phone" className="text-sm font-medium">Telefone</label>
                    <input
                        id="phone"
                        type="tel"
                        placeholder="(00) 00000-0000"
                        className="w-full p-3 mt-1 rounded-lg bg-white/10 ring-1 border-white/20 placeholder-gray-300 focus:ring-2 focus:ring-orange-400 outline-none"
                    />
                </div>

                {/* E-mail */}
                <div>
                    <label htmlFor="email" className="text-sm font-medium">E-mail</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="exemplo@email.com"
                        className="w-full p-3 mt-1 rounded-lg bg-white/10 ring-1 border-white/20 placeholder-gray-300 focus:ring-2 focus:ring-orange-400 outline-none"
                    />
                </div>

                {/* Data + Hora */}
                <div className="w-full">
                    <div>
                        <label htmlFor="date" className="text-sm font-medium">Data para contato</label>
                        <input
                        id="date"
                        type="date"
                        className="w-full p-3 mt-1 rounded-lg bg-white/10 ring-1 border-white/20 placeholder-gray-300 focus:ring-2 focus:ring-orange-400 outline-none"
                        />
                    </div>
                </div>

                {/* Preferência de Contato */}
                <div>
                <label htmlFor="contactPref" className="text-sm font-medium">Preferência de contato</label>
                <select
                    id="contactPref"
                    className="w-full p-3 mt-1 rounded-lg ring-1 border-white/20 focus:ring-2 focus:ring-orange-400 outline-none bg-[#2C394C]"
                >
                    <option value="whatsapp">WhatsApp</option>
                    <option value="email">E-mail</option>
                    <option value="telefone">Telefone</option>
                </select>
                </div>

                {/* Botão */}
                <button
                type="submit"
                className="w-full py-3 mt-4 rounded-lg bg-gradient-to-r from-orange-500 to-orange-400 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
                >
                Enviar Solicitação
                </button>
            </form>
        </div>
    </section>
  );
}
