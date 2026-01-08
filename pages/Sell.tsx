import React from 'react';
import { CheckCircle, BarChart3, Camera, Key } from 'lucide-react';

export const Sell = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-primary text-white py-20 px-6 text-center">
        <h1 className="font-serif text-4xl md:text-6xl mb-6">Vender com Confiança</h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
          A sua propriedade merece um serviço premium. Da avaliação à escritura, tratamos de tudo.
        </p>
      </section>

      {/* Steps */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-sand rounded-full flex items-center justify-center mx-auto mb-4 text-accent">
                <BarChart3 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">1. Avaliação</h3>
              <p className="text-gray-500 text-sm">Análise de mercado rigorosa para definir o preço certo.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-sand rounded-full flex items-center justify-center mx-auto mb-4 text-accent">
                <Camera className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">2. Produção</h3>
              <p className="text-gray-500 text-sm">Fotografia profissional, vídeo e home staging virtual.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-sand rounded-full flex items-center justify-center mx-auto mb-4 text-accent">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">3. Qualificação</h3>
              <p className="text-gray-500 text-sm">Filtramos os compradores para garantir visitas qualificadas.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-sand rounded-full flex items-center justify-center mx-auto mb-4 text-accent">
                <Key className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">4. Fecho</h3>
              <p className="text-gray-500 text-sm">Apoio jurídico e burocrático até à entrega da chave.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 bg-sand">
        <div className="container mx-auto px-6 max-w-2xl">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl">
            <h2 className="font-serif text-3xl text-center mb-8">Solicitar Avaliação</h2>
            <form className="space-y-6" onSubmit={(e) => {
              e.preventDefault();
              alert('Pedido de avaliação recebido!');
            }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Tipo de Imóvel</label>
                  <select className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50">
                    <option>Apartamento</option>
                    <option>Moradia</option>
                    <option>Terreno</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Tipologia</label>
                  <select className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50">
                    <option>T1</option>
                    <option>T2</option>
                    <option>T3</option>
                    <option>T4+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Localização</label>
                <input type="text" placeholder="Morada ou Código Postal" className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Área (aprox. m²)</label>
                  <input type="number" className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50" />
                </div>
                 <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Objetivo</label>
                  <select className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50">
                    <option>Vender Urgentemente</option>
                    <option>Saber Valor de Mercado</option>
                    <option>Vender nos próximos 6 meses</option>
                  </select>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-6">
                <h3 className="font-bold mb-4">Os seus dados</h3>
                <div className="space-y-4">
                  <input type="text" placeholder="Nome Completo" className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50" />
                  <input type="email" placeholder="Email" className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50" />
                  <input type="tel" placeholder="Telefone" className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50" />
                </div>
              </div>

              <button type="submit" className="w-full bg-primary text-white py-4 rounded-lg font-bold text-lg hover:bg-accent transition-colors">
                Enviar Pedido
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
