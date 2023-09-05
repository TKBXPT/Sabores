import React from 'react';
import './Sucursal.css'; 
import sucursal from '../../assets/sucursal.jpg'; 

const Sucursal = () => {
  return (
    <div className="contenedor-texto-imagen" id="Sucursales">

      <div className="contenedor-columna-texto">
        <div className="contendor-texto">
          <h1>Visitanos en:</h1>
          <h3>Calle 11 Nro: 3310</h3>
          <h3>Calle 5 Nro: 558</h3>
          <h3>Calle 7 Nro: 295</h3>
          
          <p>Martes a Domingos: 08:00hs a 13:00hs - 16:00hs a 19:00hs </p>
        </div>
      </div>
      <div className="contenedor-imagen-sucursal">
        <img src={sucursal} alt="Imagen" />
      </div>
    </div>
  );
};

export default Sucursal;