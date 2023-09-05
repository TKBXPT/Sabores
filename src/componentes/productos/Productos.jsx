import React from 'react';
import './Productos.css';
import medialunas from '../../assets/medialunaspoli.png';
import sandwich from '../../assets/sandwichpoli.png';
import torta from '../../assets/tortapoli.png';

const Productos = () => {
    return (
      <div className="productos-container">
        <div className="producto-item">
          <img src={medialunas} alt="Panificados"/>
          <div className="producto-overlay">
            <h2>Panificados</h2>
          </div>
        </div>
        <div className="producto-item">
          <img src={sandwich} alt="Sandwich"/>
          <div className="producto-overlay">
            <h2>Sandwiches</h2>
          </div>
        </div>
        <div className="producto-item">
          <img src={torta} alt="Torta"/>
          <div className="producto-overlay">
            <h2>Tortas</h2>
          </div>
        </div>
      </div>
    );
  };

export default Productos;