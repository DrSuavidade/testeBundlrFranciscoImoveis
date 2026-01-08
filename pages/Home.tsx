import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, ArrowRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MOCK_LISTINGS } from '../data/mockData';
import { ListingCard } from '../components/ListingCard';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate asset load
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <video 
          src="/607251_Drone_Mountains_Nature_3840x2160 (1).mp4"
          autoPlay
          muted
          loop
          className="w-full h-full object-cover filter blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <AnimatePresence>
          {loaded && (
            <>
              <motion.h1 
                initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 1, delay: 0.5 }}
                className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold tracking-tight mb-6"
              >
                Francisco Imóveis
              </motion.h1>

              <motion.div 
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: '100px' }}
                transition={{ duration: 1, delay: 1 }}
                className="h-1 bg-white mb-8"
              />

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="text-white/90 text-lg md:text-2xl font-light tracking-wide max-w-2xl mb-10"
              >
                Casas com alma. Negócios com confiança. <br/>
                O seu parceiro imobiliário em Portugal.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="flex flex-col md:flex-row gap-4"
              >
                <Link to="/imoveis" className="px-8 py-4 bg-white text-primary font-bold tracking-wider uppercase text-sm rounded-sm hover:bg-accent hover:text-white transition-all duration-300">
                  Ver Imóveis
                </Link>
                <Link to="/vender" className="px-8 py-4 bg-transparent border border-white text-white font-bold tracking-wider uppercase text-sm rounded-sm hover:bg-white hover:text-primary transition-all duration-300">
                  Vender Casa
                </Link>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce"
      >
        <ArrowDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
};

export const Home = () => {
  const featuredListings = MOCK_LISTINGS.filter(l => l.isFeatured).slice(0, 3);

  return (
    <div>
      <Hero />
      
      {/* Introduction */}
      <section className="py-24 bg-sand">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <span className="text-accent font-bold uppercase tracking-widest text-xs mb-4 block">Sobre Mim</span>
          <h2 className="font-serif text-3xl md:text-5xl font-medium mb-8 leading-tight">
            "Não vendo apenas casas,<br/> crio novos começos."
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-10">
            Com mais de 10 anos de experiência no mercado de luxo de Lisboa e Cascais, 
            acredito numa abordagem personalizada, onde cada cliente e cada imóvel tem uma história única.
            A minha missão é simplificar o complexo e garantir que faz o melhor negócio possível.
          </p>
          <Link to="/sobre" className="inline-flex items-center gap-2 text-primary font-bold border-b-2 border-primary pb-1 hover:text-accent hover:border-accent transition-colors">
            Ler a minha história <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-24 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-sand"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-serif text-4xl mb-4">Destaques</h2>
              <p className="text-gray-500">Curadoria de imóveis exclusivos</p>
            </div>
            <Link to="/imoveis" className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:text-accent transition-colors">
              Ver todos <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredListings.map(listing => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link to="/imoveis" className="btn-primary">Ver todos</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#1A1A1A] text-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <Quote className="w-12 h-12 text-accent mx-auto mb-8 opacity-50" />
          <h2 className="font-serif text-3xl md:text-4xl mb-12">O que dizem os nossos clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm">
              <p className="text-lg font-light italic mb-6">"O Francisco foi incansável na procura da nossa casa de sonho. Profissionalismo e dedicação fora de série."</p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-10 h-10 bg-gray-500 rounded-full overflow-hidden">
                  <img src="https://i.pravatar.cc/150?u=1" alt="User" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-sm">Ana Silva</p>
                  <p className="text-xs text-gray-400">Comprou em Cascais</p>
                </div>
              </div>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm">
              <p className="text-lg font-light italic mb-6">"Vender a nossa casa de família foi emotivo, mas o Francisco tratou de tudo com sensibilidade e eficiência."</p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-10 h-10 bg-gray-500 rounded-full overflow-hidden">
                  <img src="https://i.pravatar.cc/150?u=2" alt="User" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-sm">João & Maria</p>
                  <p className="text-xs text-gray-400">Vendeu em Lisboa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sell CTA */}
      <section className="py-24 bg-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Quer saber quanto vale a sua casa?</h2>
          <p className="text-white/80 text-xl max-w-2xl mx-auto mb-10">
            Ofereço uma avaliação de mercado detalhada, sem compromisso, baseada em dados reais e na minha experiência local.
          </p>
          <Link to="/vender" className="inline-block bg-white text-accent px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Pedir Avaliação Gratuita
          </Link>
        </div>
      </section>
    </div>
  );
};
