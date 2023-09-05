import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactUs.css';

export const ContactUs = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_xl1s0zd', 'template_iybzmjk', form.current, 'd5SIsdFAuPDxbSyKO')
      .then(
        (result) => {
          console.log(result.text);
          setSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contenedor-contacto" id='Contacto'>
      <h1>Contáctanos</h1>
      <form ref={form} onSubmit={sendEmail}>
        <label><p>Nombre Completo:</p></label>
        <input type="text" name="name" placeholder='Ingrese su Nombre' required/>
        <label><p>Email:</p></label>
        <input type="email" name="email" placeholder='Ingrese su Email'required/>
        <label><p>Asunto:</p></label>
        <input type="subjet" name="subjet" placeholder='Ingrese el asunto'required/>
        <label><p>Mensaje:</p></label>
        <textarea name="message" placeholder='Ingrese su Mensaje'required/>
        <input type="submit" value="ENVIAR" />
      </form>
      {sent && <p>Mensaje enviado con éxito. ¡Gracias!</p>} 
    </div>
  );
};

export default ContactUs;