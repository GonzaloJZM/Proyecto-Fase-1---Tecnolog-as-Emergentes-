import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Laptop, Home } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cart } = useCart();

  return (
    <nav style={{ 
      padding: '1rem 2rem', 
      backgroundColor: '#ffffff', // Fondo blanco para que combine
      color: '#1a202c', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    }}>
      {/* NOMBRE DE LA EMPRESA COMO LINK AL INICIO */}
      <Link to="/" style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '10px', 
        textDecoration: 'none',
        cursor: 'pointer'
      }}>
        <Laptop size={28} color="#3182ce" />
        <span style={{ 
          fontSize: '1.6rem', 
          fontWeight: '800', 
          color: '#1a202c'
        }}>
          Tecsho<span style={{color: '#3182ce'}}>Mype</span>
        </span>
      </Link>

      <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
        <Link to="/" style={{ color: '#4a5568', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px', fontWeight: '600' }}>
          <Home size={18} /> Inicio
        </Link>
        
        <Link to="/productos" style={{ color: '#4a5568', textDecoration: 'none', fontWeight: '600' }}>
          Catálogo
        </Link>

        <Link to="/carrito" style={{ 
          color: 'white', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px', 
          textDecoration: 'none',
          backgroundColor: '#3182ce',
          padding: '8px 18px',
          borderRadius: '20px',
          fontWeight: 'bold'
        }}>
          <ShoppingCart size={20} />
          <span style={{ 
            backgroundColor: '#ffffff', 
            color: '#3182ce', 
            borderRadius: '50%', 
            padding: '2px 8px', 
            fontSize: '0.8rem'
          }}>
            {cart.length}
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;