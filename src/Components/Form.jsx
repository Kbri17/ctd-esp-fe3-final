import React, { useState } from "react";



const Form = () => {


  const [senderData, setSenderData] = useState({
    nombre: "",
    email: ""
  })

  const [mostrar, setMostrar] = useState(false)
  const [error, setError] = useState(false)
  const [confirmacion, setConfirmacion] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();
    const { nombre, email } = senderData;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (
      nombre.length > 2 &&
      regexEmail.test(email)
      
    ) {
      setMostrar(true)
      setError(false)
      setConfirmacion(`¡Gracias, ${nombre}!   Te contactaremos pronto... no demasiado pronto, pero lo justo.`)
      setSenderData({ nombre: "", email: "" })
    } else {
      setError(true)
      setConfirmacion(false)
    }
  };
  return (
    <div>
      

          <form onSubmit={handleSubmit}>
            <label>Nombre Completo</label>
            <input type="text" value={senderData.nombre} onChange={(event) => setSenderData({ ...senderData, nombre: event.target.value })} />
            <label >Email</label>
            <input type="email" value={senderData.email} onChange={(event) => setSenderData({ ...senderData, email: event.target.value })} />



            <button className="submit">Enviar</button>
            {error && <h4 style={{ color: "red" }}>Por favor chequea que la información sea correcta</h4>}
            {confirmacion && !error && (
            <h4 style={{ color: "green" }}>
              {confirmacion}
            </h4>
          )}
          </form>
    </div>
  );
};

export default Form;
