import React, { useState } from 'react';
import './Ofertas.css'; 
import imagen1 from '../../assets/tortafondo.png';
import imagen2 from '../../assets/arrolladofondo.png';
import imagen3 from '../../assets/rogelfondo.png';

const Ofertas = () => {
  const images = [imagen1, imagen2, imagen3];
  const imageTexts = ["Torta", "Arrollado", "Rogel"]; 
  const [selectedImageIndex, setSelectedImageIndex] = useState(1);

  const handlePrev = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="galeria-container" id="Ofertas">
      <h1>Ofertas Especiales</h1>
      <div className="gallery">
        <div className="image-container">
          <img src={images[(selectedImageIndex + images.length - 1) % images.length]} alt={`Imagen ${selectedImageIndex}`} />
          <p>{imageTexts[(selectedImageIndex + images.length - 1) % images.length]}</p>
        </div>
        
        
        <div className="arrow arrow-left" onClick={handlePrev}>
          &lt;
        </div>
        
       
        <div className="image-container">
          <img src={images[selectedImageIndex]} alt={`Imagen ${selectedImageIndex + 1}`} />
          <p>{imageTexts[selectedImageIndex]}</p>
        </div>
        
        
        <div className="arrow arrow-right" onClick={handleNext}>
          &gt;
        </div>
        
       
        <div className="image-container">
          <img src={images[(selectedImageIndex + 1) % images.length]} alt={`Imagen ${selectedImageIndex + 2}`} />
          <p>{imageTexts[(selectedImageIndex + 1) % images.length]}</p>
        </div>
      </div>
    </div>
  );
};

export default Ofertas;