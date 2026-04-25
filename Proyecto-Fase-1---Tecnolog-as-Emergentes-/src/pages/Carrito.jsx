import React from 'react';
import { useCart } from '../context/CartContext';
import { Trash2, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

const Carrito = () => {
  const { cart } = useCart();

  // Calcular el total de la compra
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  if (cart.length === 0) {
    return (
      <div style={{ 
        height: '80vh', display: 'flex', flexDirection: 'column', 
        justifyContent: 'center', alignItems: 'center', 
        background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)', color: 'white' 
      }}>
        <h2>Tu carrito en TecshoMype está vacío</h2>
        <p>¡Aún no has elegido lo mejor de la tecnología!</p>
        <Link to="/productos" style={{ color: '#63b3ed', marginTop: '20px', fontWeight: 'bold' }}>
          Volver al catálogo
        </Link>
      </div>
    );
  }

  return (
    <div style={{ 
      padding: '40px 20px', 
      background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)', 
      minHeight: '100vh', color: 'white' 
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2.5rem' }}>
        Resumen de <span style={{ color: '#63b3ed' }}>Compra</span>
      </h2>

      <div style={{ maxWidth: '900px', margin: '0 auto', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '20px', padding: '30px', backdropFilter: 'blur(10px)' }}>
        {cart.map((item, index) => (
          <div key={index} style={{ 
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', 
            padding: '15px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' 
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <img src={item.image} alt={item.title} style={{ width: '60px', height: '60px', borderRadius: '10px', backgroundColor: 'white', padding: '5px', objectFit: 'contain' }} />
              <div>
                <h4 style={{ fontSize: '1rem', margin: 0 }}>{item.title}</h4>
                <p style={{ color: '#a0aec0', margin: 0 }}>S/ {item.price}</p>
              </div>
            </div>
          </div>
        ))}

        <div style={{ marginTop: '30px', textAlign: 'right', borderTop: '2px solid #63b3ed', paddingTop: '20px' }}>
          <h3 style={{ fontSize: '1.8rem' }}>Total: S/ {total.toFixed(2)}</h3>
          <button style={{ 
            backgroundColor: '#3182ce', color: 'white', border: 'none', 
            padding: '15px 40px', borderRadius: '50px', cursor: 'pointer', 
            fontWeight: 'bold', fontSize: '1.1rem', marginTop: '20px', 
            display: 'inline-flex', alignItems: 'center', gap: '10px' 
          }}>
            <CreditCard size={20} /> Proceder al Pago
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carrito;