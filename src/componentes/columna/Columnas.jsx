import React from 'react';
import './Columnas.css';
import panera from'../../assets/panera.png';

const Columnas = () => {
    return (
      <div className="columnas-container">
        <div className="columna-item">
          <img src={panera} alt="Facturitas" width="100%" />
        </div>
        <div className="columna-item">
        <div className="columna-texto">
        <h3>El deleite de lo artesanal</h3>
        <p>Antes que salga el sol, a eso de las 4am, nuestros panaderos ponen las manos a la obra para que por la mañana salga por nuestras puertas ese olor tan particular que ya todos conocen, “El olor al pan recién horneado”. Todos nuestros productos pasan por las manos de un montón de personas trabajadoras que muy pocos conocen y que hoy, en este día tan especial, queremos agradecerles a cada uno por ser parte de esta hermosa familia “SABORES”.</p>
        <button className="contact-button">Contacto</button>
        </div>
        </div>
      </div>
    );
  };

export default Columnas;