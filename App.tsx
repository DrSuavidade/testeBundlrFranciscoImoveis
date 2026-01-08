import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Listings } from './pages/Listings';
import { ListingDetail } from './pages/ListingDetail';
import { Sell } from './pages/Sell';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/imoveis" element={<Listings />} />
          <Route path="/imoveis/:id" element={<ListingDetail />} />
          <Route path="/vender" element={<Sell />} />
          <Route path="/sobre" element={<div className="pt-32 text-center text-xl">Página Sobre (Em construção)</div>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
