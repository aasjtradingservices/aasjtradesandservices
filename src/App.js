import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ConstructionServices from './pages/ConstructionServices';
import Supermarket from './pages/Supermarket';
import Admin from './pages/Admin';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import ProtectedRoute from './routes/ProtectedRoute';

function App(){
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/construction" element={<ConstructionServices />} />
          <Route path="/supermarket" element={<Supermarket />} />
          <Route path="/admin" element={<ProtectedRoute><Admin/></ProtectedRoute>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
export default App;
