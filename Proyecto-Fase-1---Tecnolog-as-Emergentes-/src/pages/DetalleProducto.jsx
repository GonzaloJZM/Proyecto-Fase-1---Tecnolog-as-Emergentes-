import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ArrowLeft, ShoppingCart, CheckCircle, Package, Info } from 'lucide-react';
import { stockTecnologico } from '../data/stock';

const DetalleProducto = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  
  // ESTADO PARA EL CUADRO VERDE (TOAST)
  const [showToast, setShowToast] = useState(false);

  // Buscamos el producto en nuestra data centralizada
  const product = stockTecnologico.find(p => p.id === parseInt(id));

  // Función para manejar el clic y mostrar la confirmación
  const handleAddToCart = () => {
    addToCart(product);
    setShowToast(true);
    // Se oculta automáticamente después de 3 segundos
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  if (!product) {
    return (
      <div style={{ padding: '100px', textAlign: 'center', backgroundColor: '#ffffff', minHeight: '100vh' }}>
        <h2 style={{ color: '#1a202c' }}>Producto no encontrado</h2>
        <Link to="/productos" style={{ color: '#3182ce', fontWeight: 'bold', textDecoration: 'none' }}>
          Volver al catálogo
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '60px 20px', minHeight: '100vh', backgroundColor: '#ffffff', color: '#1a202c', position: 'relative' }}>
      
      {/* CUADRO VERDE DE CONFIRMACIÓN (CENTRADO ARRIBA) */}
      {showToast && (
        <div style={{
          position: 'fixed',
          top: '20px',
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
          zIndex: 1000,
          animation: 'fadeInDown 0.4s ease-out',
          minWidth: 'fit-content',
          whiteSpace: 'nowrap'
        }}>
          <CheckCircle size={24} />
          <span style={{ fontWeight: 'bold', fontSize: '1rem' }}>
            ¡{product.title} añadido al carrito!
          </span>
        </div>
      )}

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* BOTÓN VOLVER */}
        <Link to="/productos" style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '10px', 
          color: '#718096', 
          textDecoration: 'none', 
          marginBottom: '30px',
          fontWeight: '600' 
        }}>
          <ArrowLeft size={20} /> VOLVER AL CATÁLOGO
        </Link>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '50px' }}>
          
          {/* LADO IZQUIERDO: IMAGEN GRANDE */}
          <div style={{ 
            background: '#f8fafc', 
            borderRadius: '30px', 
            padding: '40px', 
            display: 'flex', 
            justifyContent: 'center', 
            border: '1px solid #e2e8f0',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05)'
          }}>
            <img 
              src={product.image} 
              alt={product.title} 
              style={{ width: '100%', maxHeight: '450px', objectFit: 'contain' }} 
            />
          </div>

          {/* LADO DERECHO: INFORMACIÓN */}
          <div>
            <span style={{ 
              color: '#3182ce', 
              fontWeight: 'bold', 
              textTransform: 'uppercase', 
              letterSpacing: '1px',
              fontSize: '0.85rem' 
            }}>
              {product.category}
            </span>
            
            <h1 style={{ fontSize: '2.8rem', margin: '10px 0', fontWeight: '800', lineHeight: '1.2' }}>
              {product.title}
            </h1>
            
            {/* SECCIÓN DE STOCK */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '10px', 
              marginBottom: '20px', 
              color: product.stock > 5 ? '#38a169' : '#e53e3e',
              background: product.stock > 5 ? '#f0fff4' : '#fff5f5',
              padding: '8px 15px',
              borderRadius: '10px',
              width: 'fit-content'
            }}>
              <Package size={20} />
              <span style={{ fontWeight: 'bold' }}>Stock Disponible: {product.stock} unidades</span>
            </div>

            {/* PRECIO */}
            <p style={{ fontSize: '2.5rem', color: '#1a202c', fontWeight: '900', marginBottom: '25px' }}>
              S/ {product.price.toFixed(2)}
            </p>

            {/* DESCRIPCIÓN TÉCNICA */}
            <div style={{ marginBottom: '30px' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px', color: '#4a5568' }}>
                <Info size={18} /> Descripción del producto
              </h4>
              <p style={{ 
                color: '#4a5568', 
                lineHeight: '1.7', 
                fontSize: '1.05rem',
                borderLeft: '4px solid #3182ce',
                paddingLeft: '15px',
                background: '#f8fafc',
                padding: '15px'
              }}>
                {product.description}
              </p>
            </div>

            {/* CARACTERÍSTICAS EXTRA */}
            <div style={{ marginBottom: '35px', padding: '20px', border: '1px solid #e2e8f0', borderRadius: '20px' }}>
              <h4 style={{ marginBottom: '15px' }}>Especificaciones de TecshoMype:</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle size={18} color="#3182ce" /> Garantía oficial de 12 meses
                </li>
                <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle size={18} color="#3182ce" /> Colores disponibles: Negro, Plata, Azul Titanio
                </li>
                <li style={{ marginBottom: '0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle size={18} color="#3182ce" /> Soporte técnico especializado UCSM
                </li>
              </ul>
            </div>

            {/* BOTÓN DE COMPRA */}
            <button 
              onClick={handleAddToCart}
              style={{
                width: '100%', 
                padding: '22px', 
                borderRadius: '18px', 
                border: 'none',
                backgroundColor: '#3182ce', 
                color: 'white', 
                fontSize: '1.3rem',
                fontWeight: '800', 
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '12px',
                transition: '0.2s ease-in-out',
                boxShadow: '0 10px 15px -3px rgba(49, 130, 206, 0.3)'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#2c5282'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#3182ce'}
            >
              <ShoppingCart size={24} /> AÑADIR AL CARRITO
            </button>
          </div>
        </div>
      </div>

      {/* ANIMACIÓN DE ENTRADA DESDE ARRIBA */}
      <style>{`
        @keyframes fadeInDown {
          from { 
            opacity: 0; 
            transform: translate(-50%, -20px); 
          }
          to { 
            opacity: 1; 
            transform: translate(-50%, 0); 
          }
        }
      `}</style>

    </div>
  );
};

export default DetalleProducto;