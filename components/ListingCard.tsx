import React from 'react';
import { Link } from 'react-router-dom';
import { Bed, Bath, Move, MapPin, Heart } from 'lucide-react';
import { Listing } from '../types';
import { motion } from 'framer-motion';

interface ListingCardProps {
  listing: Listing;
}

export const ListingCard: React.FC<ListingCardProps> = ({ listing }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 ease-out cursor-pointer relative"
    >
      <Link to={`/imoveis/${listing.id}`} className="block h-full">
        {/* Image Container */}
        <div className="relative h-[280px] overflow-hidden">
          <img 
            src={listing.images[0]} 
            alt={listing.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Top Badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-md text-primary">
              {listing.type}
            </span>
            {listing.status !== 'Venda' && (
              <span className="bg-accent text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-md">
                {listing.status}
              </span>
            )}
          </div>

          <button className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-red-500 transition-colors z-20" onClick={(e) => {
            e.preventDefault();
            // Handle fav logic
          }}>
            <Heart className="w-4 h-4" />
          </button>

          {/* Hover CTA */}
          <div className="absolute bottom-6 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            <span className="inline-block bg-white text-primary px-6 py-2 rounded-full font-medium text-sm shadow-lg">
              Ver Detalhes
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-serif text-lg font-bold leading-tight line-clamp-1 group-hover:text-accent transition-colors">
              {listing.title}
            </h3>
          </div>
          <div className="flex items-center gap-1 text-gray-500 text-sm mb-4">
            <MapPin className="w-3 h-3" />
            {listing.location.freguesia}, {listing.location.concelho}
          </div>
          
          <div className="flex items-center justify-between py-4 border-t border-gray-100">
            <div className="flex gap-4 text-gray-600 text-xs font-medium">
              <div className="flex items-center gap-1">
                <Bed className="w-4 h-4" /> {listing.beds}
              </div>
              <div className="flex items-center gap-1">
                <Bath className="w-4 h-4" /> {listing.baths}
              </div>
              <div className="flex items-center gap-1">
                <Move className="w-4 h-4" /> {listing.areaM2}m²
              </div>
            </div>
            <div className="font-serif text-xl font-bold text-primary">
              {new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(listing.price)}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
