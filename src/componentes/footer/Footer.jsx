import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="contenedor-footer">
      <div className="columna">
        <h4>Redes Sociales</h4>
        <div>
          <a href="https://www.facebook.com/panaderia.sabores.mercedes">Facebook</a>
          <a href="https://www.instagram.com/panaderiasabores/">Instagram</a>
        </div>
      </div>
      <div className="columna">
        <h4>Envios</h4>
        <div>
          <p>Moto</p>
        </div>
      </div>
      <div className="columna">
        <h4>Informacion</h4>
        <div>
          <a href="#Menu">Menu</a>
          <a href="#Contacto">Contacto</a>
          <a href="#Quienes-Somos">Quienes somos</a>
        </div>
      </div>
      <div className="columna">
        <h4>Teléfono</h4>
        <div>
        <p>(02324)50-4887</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;