import React, { useState, useMemo } from 'react';
import { Filter, Search, X, Map as MapIcon, Grid } from 'lucide-react';
import { MOCK_LISTINGS } from '../data/mockData';
import { ListingCard } from '../components/ListingCard';
import { Listing, PropertyType } from '../types';

export const Listings = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');
  const [filters, setFilters] = useState({
    keyword: '',
    minPrice: 0,
    maxPrice: 5000000,
    type: 'Todos' as PropertyType | 'Todos',
    beds: 'Todos' as number | 'Todos',
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredListings = useMemo(() => {
    return MOCK_LISTINGS.filter(listing => {
      const matchesKeyword = listing.title.toLowerCase().includes(filters.keyword.toLowerCase()) || 
                             listing.location.concelho.toLowerCase().includes(filters.keyword.toLowerCase());
      const matchesType = filters.type === 'Todos' || listing.type === filters.type;
      const matchesPrice = listing.price >= filters.minPrice && listing.price <= filters.maxPrice;
      const matchesBeds = filters.beds === 'Todos' || listing.beds >= (filters.beds as number);
      
      return matchesKeyword && matchesType && matchesPrice && matchesBeds;
    });
  }, [filters]);

  const handleFilterChange = (key: string, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="pt-24 pb-20 min-h-screen">
      {/* Header & Search */}
      <div className="bg-white shadow-sm border-b border-gray-100 sticky top-20 z-30">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Procurar por zona, ref..."
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
                value={filters.keyword}
                onChange={(e) => handleFilterChange('keyword', e.target.value)}
              />
            </div>

            {/* Quick Filters */}
            <div className="flex gap-2 w-full md:w-auto overflow-x-auto hide-scrollbar">
              <select 
                className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium focus:outline-none cursor-pointer hover:border-gray-400"
                value={filters.type}
                onChange={(e) => handleFilterChange('type', e.target.value)}
              >
                <option value="Todos">Tipo: Todos</option>
                <option value="Apartamento">Apartamento</option>
                <option value="Moradia">Moradia</option>
                <option value="Comercial">Comercial</option>
              </select>

              <select 
                className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium focus:outline-none cursor-pointer hover:border-gray-400"
                value={filters.beds}
                onChange={(e) => handleFilterChange('beds', e.target.value === 'Todos' ? 'Todos' : Number(e.target.value))}
              >
                <option value="Todos">Quartos: Todos</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
              </select>

               <button 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-gray-800 transition-colors"
              >
                <Filter className="w-4 h-4" /> Filtros
              </button>
            </div>

             {/* View Toggle */}
             <div className="hidden md:flex bg-gray-100 p-1 rounded-lg">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-white shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setViewMode('map')}
                  className={`p-2 rounded-md transition-colors ${viewMode === 'map' ? 'bg-white shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  <MapIcon className="w-4 h-4" />
                </button>
             </div>
          </div>

          {/* Expanded Filters Drawer (Mock) */}
          {isFilterOpen && (
            <div className="mt-4 p-6 bg-gray-50 rounded-xl border border-gray-100 animate-in slide-in-from-top-2">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-sm uppercase tracking-wider">Filtros Avançados</h3>
                <button onClick={() => setIsFilterOpen(false)} className="text-gray-500 hover:text-primary"><X className="w-4 h-4"/></button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-2">Preço Máximo</label>
                  <input 
                    type="range" 
                    min="100000" 
                    max="5000000" 
                    step="100000" 
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                    value={filters.maxPrice}
                    onChange={(e) => handleFilterChange('maxPrice', Number(e.target.value))}
                  />
                  <div className="text-right text-sm font-bold mt-1">
                    {new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(filters.maxPrice)}
                  </div>
                </div>
                {/* More mock filters could go here */}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Results Area */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="font-serif text-3xl">
            {filteredListings.length} {filteredListings.length === 1 ? 'imóvel encontrado' : 'imóveis encontrados'}
          </h1>
          <select className="bg-transparent border-none text-sm font-medium text-gray-500 focus:ring-0 cursor-pointer">
            <option>Relevância</option>
            <option>Preço: Menor para Maior</option>
            <option>Preço: Maior para Menor</option>
            <option>Mais recentes</option>
          </select>
        </div>

        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredListings.length > 0 ? (
              filteredListings.map(listing => (
                <ListingCard key={listing.id} listing={listing} />
              ))
            ) : (
              <div className="col-span-full py-20 text-center text-gray-500">
                <p className="text-xl mb-4">Não encontrámos imóveis com esses critérios.</p>
                <button 
                  onClick={() => setFilters({ keyword: '', minPrice: 0, maxPrice: 5000000, type: 'Todos', beds: 'Todos' })}
                  className="text-primary underline hover:text-accent"
                >
                  Limpar todos os filtros
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="bg-gray-200 rounded-2xl h-[600px] flex items-center justify-center text-gray-500">
            <div className="text-center">
              <MapIcon className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>Vista de mapa simulada.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
