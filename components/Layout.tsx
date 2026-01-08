import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Globe, ArrowRight, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Imóveis', path: '/imoveis' },
    { name: 'Vender', path: '/vender' },
    { name: 'Sobre', path: '/sobre' },
  ];

  const isHome = location.pathname === '/';
  // Transparent on home until scrolled, always solid on other pages
  const bgClass = isHome && !scrolled ? 'bg-transparent text-white' : 'bg-[#F9F7F2]/95 backdrop-blur-md text-primary shadow-sm';
  const logoClass = isHome && !scrolled ? 'text-white' : 'text-primary';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${bgClass} h-20 flex items-center`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className={`font-serif text-2xl font-bold tracking-tight z-50 transition-colors ${logoClass}`}>
          Francisco Imóveis
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`text-sm font-medium uppercase tracking-widest hover:text-accent transition-colors relative group`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-6">
          <button className="hover:text-accent transition-colors" aria-label="Favorites">
            <Heart className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-1 text-sm font-medium cursor-pointer hover:text-accent">
            <span>PT</span>
          </div>
          <Link to="/vender" className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-accent transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Pedir Avaliação
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          className="md:hidden z-50 focus:outline-none"
        >
          {mobileMenuOpen ? 
            <X className="w-6 h-6 text-primary" /> : 
            <Menu className={`w-6 h-6 ${isHome && !scrolled ? 'text-white' : 'text-primary'}`} />
          }
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed inset-0 bg-[#F9F7F2] z-40 flex flex-col pt-24 px-8"
            >
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    to={link.path}
                    className="text-3xl font-serif text-primary"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="w-full h-px bg-gray-200 my-4"></div>
                <Link to="/vender" className="text-xl font-medium text-accent">
                  Pedir Avaliação Gratuita
                </Link>
                <div className="flex gap-4 mt-8">
                  <a href="#" className="p-3 bg-white rounded-full shadow-sm"><Instagram className="w-5 h-5" /></a>
                  <a href="#" className="p-3 bg-white rounded-full shadow-sm"><Phone className="w-5 h-5" /></a>
                  <a href="#" className="p-3 bg-white rounded-full shadow-sm"><Mail className="w-5 h-5" /></a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-[#1A1A1A] text-white pt-20 pb-10">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-1">
          <h3 className="font-serif text-2xl mb-6">Francisco Imóveis</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            O seu parceiro de confiança no mercado imobiliário português. 
            Casas com alma, negócios transparentes.
          </p>
          <div className="flex gap-4">
            <Instagram className="w-5 h-5 hover:text-accent cursor-pointer transition-colors" />
            <Linkedin className="w-5 h-5 hover:text-accent cursor-pointer transition-colors" />
          </div>
        </div>
        
        <div>
          <h4 className="font-medium text-lg mb-6">Explorar</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><Link to="/imoveis" className="hover:text-white transition-colors">Comprar Casa</Link></li>
            <li><Link to="/vender" className="hover:text-white transition-colors">Vender Propriedade</Link></li>
            <li><Link to="/sobre" className="hover:text-white transition-colors">Sobre Nós</Link></li>
            <li><Link to="/" className="hover:text-white transition-colors">Testemunhos</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium text-lg mb-6">Contacto</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4" /> +351 912 345 678
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4" /> ola@francisco.pt
            </li>
            <li>Av. da Liberdade 100, Lisboa</li>
            <li>AMI: 12345</li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium text-lg mb-6">Newsletter</h4>
          <div className="flex flex-col gap-4">
            <input 
              type="email" 
              placeholder="O seu email" 
              className="bg-white/10 border border-white/20 p-3 rounded-lg text-sm text-white focus:outline-none focus:border-accent transition-colors"
            />
            <button className="bg-white text-primary px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-wider hover:bg-accent hover:text-white transition-colors">
              Subscrever
            </button>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} Francisco Imóveis. Todos os direitos reservados.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Termos</a>
          <a href="#" className="hover:text-white">Privacidade</a>
          <a href="#" className="hover:text-white">Livro de Reclamações</a>
        </div>
      </div>
    </div>
  </footer>
);

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-sand flex flex-col font-sans selection:bg-accent selection:text-white overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};
