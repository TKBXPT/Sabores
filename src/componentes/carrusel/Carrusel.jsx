import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carrusel.css';
import imagen1 from '../../assets/cortada1.jpg';
import imagen2 from '../../assets/cortada2.jpg';
import imagen3 from '../../assets/coratada3.jpg';
import imagen4 from '../../assets/coratada4.jpg';

const Carrusel = () => {
  const images = [imagen1, imagen2, imagen3, imagen4];

  return (
    <div className="carrusel-container">
      <Carousel showThumbs={false} showStatus={false}>
        {images.map((image, index) => (
          <div key={index} className="carrusel-item">
            <img src={image} alt={`Imagen ${index + 1}`} />
          </div>
        ))}
      </Carousel>
      <button className="button-chico"> <a href="#Contacto">CONTACTANOS</a></button>
    </div>
  );
};

export default Carrusel;