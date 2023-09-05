import React,{ useState } from 'react';
import './Header.css';
import logo from '../../assets/logo.svg';
import barsIcon from '../../assets/bars-solid.svg';
import xIcon from '../../assets/x-solid.svg';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav>
        <div className="navbar-container" id='Menu'>
        <button className={`menu-button ${showMenu ? 'hide' : ''}`} onClick={toggleMenu}>
          <img src={barsIcon} alt="Menú" className="menu-icon" />
        </button>
        <button className={`close-button ${showMenu ? '' : 'hide'}`} onClick={toggleMenu}>
          <img src={xIcon} alt="Cerrar" className="close-icon" />
        </button>
        <div className={`navbar-list ${showMenu ? 'show' : ''}`} id="Menu">
          <ul className="navbar-left">
            <li>
              <p><a href="/">Inicio</a></p>
            </li>
            <li>
              <p><a href="#Quienes-Somos">Quienes Somos</a></p>
            </li>
          </ul>
          <div className="navbar-logo">
            <img src={logo} alt="Logo" />
          </div>
          <ul className="navbar-right">
            <li>
              <p><a href="#Ofertas">Ofertas</a></p>
            </li>
            <li>
              <p><a href="#Sucursales">Sucursales</a></p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;