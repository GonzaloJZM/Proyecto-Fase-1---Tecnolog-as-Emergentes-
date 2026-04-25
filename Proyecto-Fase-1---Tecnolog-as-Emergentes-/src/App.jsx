import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Productos from './pages/Productos';
import DetalleProducto from './pages/DetalleProducto';
import Carrito from './pages/Carrito';
import { CartProvider } from './context/CartContext';

// --- VISTA HOME PRO ---
const Home = () => (
  <div style={{ backgroundColor: '#ffffff' }}>
    {/* SECCIÓN HERO CON IMAGEN DE FONDO */}
    <div style={{ 
      height: '80vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url("https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      textAlign: 'center',
      padding: '0 20px'
    }}>
      <h1 style={{ fontSize: '4.5rem', marginBottom: '10px', fontWeight: '900', letterSpacing: '-2px' }}>
        Tecsho<span style={{ color: '#38bdf8' }}>Mype</span>
      </h1>
      <p style={{ fontSize: '1.5rem', color: '#cbd5e0', maxWidth: '700px', marginBottom: '40px', fontWeight: '300' }}>
        Soluciones tecnológicas de alto rendimiento para la pequeña y mediana empresa en Arequipa.
      </p>
      <Link to="/productos" style={{ 
        backgroundColor: '#38bdf8', 
        color: '#0f172a', 
        padding: '18px 45px', 
        borderRadius: '50px', 
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '1.2rem',
        boxShadow: '0 10px 25px rgba(56, 189, 248, 0.4)'
      }}>
        Ver Catálogo Pro
      </Link>
    </div>

    {/* SECCIÓN DE VALORES / POR QUÉ ELEGIRNOS */}
    <div style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#1a202c', marginBottom: '50px' }}>
        Líderes en <span style={{color: '#3182ce'}}>Tecnología Local</span>
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
        <div style={{ padding: '30px', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
          <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🚀</div>
          <h3 style={{ marginBottom: '10px', color: '#1a202c' }}>Rapidez Total</h3>
          <p style={{ color: '#718096' }}>Sistemas SPA desarrollados en React para una navegación instantánea sin recargas.</p>
        </div>
        <div style={{ padding: '30px', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
          <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🛡️</div>
          <h3 style={{ marginBottom: '10px', color: '#1a202c' }}>Garantía UCSM</h3>
          <p style={{ color: '#718096' }}>Respaldo técnico de ingenieros especializados de la Universidad Católica de Santa María.</p>
        </div>
        <div style={{ padding: '30px', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
          <div style={{ fontSize: '3rem', marginBottom: '15px' }}>📦</div>
          <h3 style={{ marginBottom: '10px', color: '#1a202c' }}>Stock Real</h3>
          <p style={{ color: '#718096' }}>Amplio inventario en conectores, equipos y accesorios para entrega inmediata.</p>
        </div>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', backgroundColor: '#ffffff', color: '#1a202c', fontFamily: '"Inter", sans-serif' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/producto/:id" element={<DetalleProducto />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
        
        <footer style={{ 
          padding: '40px 20px', 
          textAlign: 'center', 
          backgroundColor: '#f8fafc', 
          color: '#64748b', 
          fontSize: '0.9rem',
          borderTop: '1px solid #e2e8f0' 
        }}>
          <p style={{ marginBottom: '10px', fontWeight: 'bold' }}>TecshoMype Store 2026</p>
          <p>© Proyecto de Tecnologías Emergentes | UCSM | Gonzalo Zapana & Miriam Huillca</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;