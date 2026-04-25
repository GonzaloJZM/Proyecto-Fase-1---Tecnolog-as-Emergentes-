import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { CheckCircle } from 'lucide-react';
// Importamos la data desde el archivo centralizado que creamos
import { stockTecnologico } from '../data/stock'; 

const Productos = () => {
  const { addToCart } = useCart();
  const [filter, setFilter] = useState('Todos');
  
  // ESTADO PARA EL CUADRO VERDE (TOAST)
  const [showToast, setShowToast] = useState(false);
  const [lastProduct, setLastProduct] = useState("");

  // Función para añadir y mostrar el mensaje centrado
  const handleQuickAdd = (product) => {
    addToCart(product);
    setLastProduct(product.title);
    setShowToast(true);
    // Se oculta solito tras 3 segundos
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const filteredItems = filter === 'Todos' 
    ? stockTecnologico 
    : stockTecnologico.filter(item => item.category === filter);

  return (
    <div style={{ padding: '40px 20px', minHeight: '100vh', backgroundColor: '#ffffff', color: '#1a202c', position: 'relative' }}>
      
      {/* CUADRO VERDE DE CONFIRMACIÓN (CENTRADO ARRIBA) */}
      {showToast && (
        <div style={{
          position: 'fixed',
          top: '80px', // Un poco más abajo para no tapar el Navbar
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#38a169',
          color: 'white',
          padding: '12px 30px',
          borderRadius: '50px',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          zIndex: 2000,
          animation: 'fadeInDown 0.4s ease-out',
          minWidth: 'fit-content',
          whiteSpace: 'nowrap'
        }}>
          <CheckCircle size={24} />
          <span style={{ fontWeight: 'bold', fontSize: '1rem' }}>
            ¡{lastProduct} añadido al carrito!
          </span>
        </div>
      )}

      <h2 style={{ textAlign: 'center', fontSize: '3rem', fontWeight: '800', marginBottom: '10px', color: '#1a202c' }}>
        Catálogo <span style={{color:'#3182ce'}}>TecshoMype</span>
      </h2>
      <p style={{ textAlign: 'center', color: '#718096', marginBottom: '40px' }}>Equipamiento tecnológico con garantía de ingeniería UCSM</p>

      {/* FILTROS */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '50px', flexWrap: 'wrap' }}>
        {['Todos', 'Pantallas', 'Accesorios', 'Equipos', 'Conectores'].map(cat => (
          <button 
            key={cat}
            onClick={() => setFilter(cat)}
            style={{
              padding: '12px 24px', borderRadius: '50px', border: '1px solid #e2e8f0',
              cursor: 'pointer', fontWeight: 'bold',
              backgroundColor: filter === cat ? '#3182ce' : '#f8fafc',
              color: filter === cat ? 'white' : '#4a5568',
              transition: '0.3s'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRILLA DE PRODUCTOS */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '30px', maxWidth: '1300px', margin: '0 auto' }}>
        {filteredItems.map(p => (
          <div key={p.id} 
            style={{ 
              background: '#ffffff', borderRadius: '20px', padding: '20px',
              border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
              transition: 'transform 0.2s ease-in-out'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{ background: '#f8fafc', borderRadius: '15px', height: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
              <img src={p.image} alt={p.title} style={{ maxWidth: '80%', maxHeight: '80%', objectFit: 'contain' }} />
            </div>
            <h4 style={{ fontSize: '0.95rem', marginBottom: '10px', height: '45px', overflow: 'hidden', color: '#2d3748', lineHeight: '1.4' }}>
              {p.title}
            </h4>
            <p style={{ color: '#3182ce', fontSize: '1.6rem', fontWeight: '900' }}>S/ {p.price.toFixed(2)}</p>
            
            <div style={{ display: 'flex', gap: '10px', marginTop: 'auto', paddingTop: '15px' }}>
              <Link to={`/producto/${p.id}`} style={{ flex: 1, textDecoration: 'none', border: '1px solid #3182ce', color: '#3182ce', textAlign: 'center', padding: '10px', borderRadius: '12px', fontWeight: 'bold', fontSize: '0.9rem' }}>
                Detalles
              </Link>
              <button 
                onClick={() => handleQuickAdd(p)} 
                style={{ flex: 1, background: '#3182ce', border: 'none', color: 'white', padding: '10px', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer', fontSize: '0.9rem', transition: '0.2s' }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#2c5282'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#3182ce'}
              >
                Añadir
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ANIMACIÓN DE CAÍDA */}
      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translate(-50%, -20px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }
      `}</style>
    </div>
  );
};

export default Productos;