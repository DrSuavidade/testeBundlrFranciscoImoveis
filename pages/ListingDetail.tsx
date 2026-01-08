import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Move, CheckCircle, Calendar, MessageSquare, Phone, Share2, Heart, ArrowLeft } from 'lucide-react';
import { MOCK_LISTINGS } from '../data/mockData';

export const ListingDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [listing, setListing] = useState(MOCK_LISTINGS.find(l => l.id === id));
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    // In a real app, fetch by ID
    setListing(MOCK_LISTINGS.find(l => l.id === id));
    window.scrollTo(0, 0);
  }, [id]);

  if (!listing) return <div className="pt-32 text-center">Imóvel não encontrado.</div>;

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Back Nav */}
      <div className="container mx-auto px-6 py-4">
        <Link to="/imoveis" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-colors">
          <ArrowLeft className="w-4 h-4" /> Voltar aos imóveis
        </Link>
      </div>

      {/* Gallery */}
      <div className="container mx-auto px-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:h-[500px] rounded-2xl overflow-hidden">
          <div className="h-[300px] md:h-full relative group cursor-pointer">
            <img 
              src={listing.images[activeImage]} 
              alt="Main View" 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 flex gap-2">
               <button className="p-2 bg-white/90 rounded-full shadow-sm hover:text-accent"><Share2 className="w-4 h-4"/></button>
               <button className="p-2 bg-white/90 rounded-full shadow-sm hover:text-red-500"><Heart className="w-4 h-4"/></button>
            </div>
          </div>
          <div className="hidden md:grid grid-cols-2 gap-2">
            {listing.images.slice(0, 4).map((img, idx) => (
              <div 
                key={idx} 
                className={`relative h-full overflow-hidden cursor-pointer ${idx === activeImage ? 'ring-2 ring-primary' : ''}`}
                onClick={() => setActiveImage(idx)}
              >
                <img src={img} alt={`View ${idx}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <span className="text-accent font-bold uppercase tracking-wider text-xs mb-2 block">{listing.location.freguesia}, {listing.location.district}</span>
                <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-2">{listing.title}</h1>
                <p className="text-gray-500 text-sm flex items-center gap-1"><MapPin className="w-4 h-4"/> Ref: {listing.refCode}</p>
              </div>
              <div className="mt-4 md:mt-0 text-right">
                <div className="text-3xl font-serif font-bold text-primary">
                  {new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(listing.price)}
                </div>
                <div className="text-sm text-gray-500">{listing.status}</div>
              </div>
            </div>

            {/* Key Facts */}
            <div className="grid grid-cols-3 md:grid-cols-4 gap-4 py-8 border-y border-gray-100 mb-8">
              <div className="text-center md:text-left">
                <span className="block text-gray-400 text-xs uppercase tracking-wider mb-1">Quartos</span>
                <span className="flex items-center justify-center md:justify-start gap-2 font-medium text-lg"><Bed className="w-5 h-5"/> {listing.beds}</span>
              </div>
              <div className="text-center md:text-left">
                <span className="block text-gray-400 text-xs uppercase tracking-wider mb-1">Casas de Banho</span>
                <span className="flex items-center justify-center md:justify-start gap-2 font-medium text-lg"><Bath className="w-5 h-5"/> {listing.baths}</span>
              </div>
              <div className="text-center md:text-left">
                <span className="block text-gray-400 text-xs uppercase tracking-wider mb-1">Área Útil</span>
                <span className="flex items-center justify-center md:justify-start gap-2 font-medium text-lg"><Move className="w-5 h-5"/> {listing.areaM2}m²</span>
              </div>
              <div className="text-center md:text-left hidden md:block">
                <span className="block text-gray-400 text-xs uppercase tracking-wider mb-1">Certificado</span>
                <span className="inline-block px-3 py-0.5 bg-green-100 text-green-800 rounded text-sm font-bold">{listing.energyRating}</span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-10">
              <h3 className="font-serif text-xl font-bold mb-4">Descrição</h3>
              <p className="text-gray-600 leading-relaxed text-lg font-light">
                {listing.description}
              </p>
            </div>

            {/* Features */}
            <div className="mb-10">
              <h3 className="font-serif text-xl font-bold mb-4">Características</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {listing.features.map(feat => (
                  <div key={feat} className="flex items-center gap-2 text-gray-600 text-sm">
                    <CheckCircle className="w-4 h-4 text-accent" /> {feat}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="mb-10">
              <h3 className="font-serif text-xl font-bold mb-4">Localização</h3>
              <div className="h-64 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
                Mapa Interativo Indisponível (Demo)
              </div>
            </div>
          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-1">
             <div className="sticky top-28 bg-sand/50 backdrop-blur-md p-6 rounded-2xl border border-white shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md">
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200" alt="Francisco" />
                  </div>
                  <div>
                    <p className="font-bold text-primary">Francisco Silva</p>
                    <p className="text-xs text-gray-500">Consultor Sénior</p>
                  </div>
                </div>

                <form className="space-y-4" onSubmit={(e) => {
                  e.preventDefault();
                  alert('Obrigado pelo contacto! Entraremos em contacto brevemente.');
                }}>
                  <button type="button" className="w-full bg-white border border-gray-200 text-primary py-3 px-4 rounded-lg flex items-center justify-center gap-2 font-bold hover:bg-gray-50 transition-colors">
                     <Calendar className="w-4 h-4" /> Agendar Visita
                  </button>
                  <button type="button" className="w-full bg-[#25D366] text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 font-bold hover:bg-[#20bd5a] transition-colors shadow-sm">
                     <MessageSquare className="w-4 h-4" /> WhatsApp
                  </button>
                  
                  <div className="relative flex py-2 items-center">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="flex-shrink mx-2 text-gray-400 text-xs uppercase">Ou enviar mensagem</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                  </div>

                  <input type="text" placeholder="Nome" className="w-full p-3 bg-white rounded-lg border border-gray-200 focus:border-accent focus:outline-none text-sm" required />
                  <input type="email" placeholder="Email" className="w-full p-3 bg-white rounded-lg border border-gray-200 focus:border-accent focus:outline-none text-sm" required />
                  <input type="tel" placeholder="Telefone" className="w-full p-3 bg-white rounded-lg border border-gray-200 focus:border-accent focus:outline-none text-sm" required />
                  <textarea placeholder="Olá, gostaria de saber mais sobre este imóvel..." className="w-full p-3 bg-white rounded-lg border border-gray-200 focus:border-accent focus:outline-none text-sm h-24 resize-none"></textarea>
                  
                  <button type="submit" className="w-full bg-primary text-white py-3 px-4 rounded-lg font-bold hover:bg-accent transition-colors shadow-lg">
                    Enviar Pedido
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <a href="tel:+351912345678" className="text-gray-500 text-sm hover:text-primary flex items-center justify-center gap-1">
                    <Phone className="w-3 h-3" /> +351 912 345 678
                  </a>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
