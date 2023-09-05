import React, { useState } from 'react';
import './Contact.css'; 
const Contact = () => {
    const [values, setValues] = useState({
        name:"",
        email:"",
        phone:"",
        message:"",
    });
    const handleInputChange =(event)=>{
        const{name,value} = event.target;
        setValues({
            ...values,
            [name]:value,
        });
    };
    const handleForm=(event)=>{
        event.preventDefault();
        console.log(values);
    }
  return (
    <div className="contact-form">
      <h2>Contactanos</h2>
      <form action="" onSubmit={handleForm}>
        <div className="form-group">
          <label><h3>Nombre:</h3></label>
          <input type="text" name='name' value={values.name} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name='email' value={values.email} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Telefono:</label>
          <input type="phone" name='phone'value={values.phone} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Mensaje:</label>
          <textarea value={values.message} name='message'onChange={handleInputChange} />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;