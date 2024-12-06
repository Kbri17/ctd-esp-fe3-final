import React from "react";
import Card from "./Card";


const Form = () => {
  
  const [algo,setAlgo]=useState({
    nombre: "",
    email: ""
  })

  const [mostrar,setMostrar]=useState(false)
  const [error,setError]=useState(false)

  const handleSubmit =(event) =>{
    event.preventDefault();
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (
      comprador.nombre.length > 6 &&
      comprador.nombre.includes(" ")&&
      regexEmail.test(comprador.email)
    ) {
      setMostrar(true)
      setError(false)
    } else {
      setError(true)
    }
  };
  return (
    <div>
      {
        mostrar ? (<Card/> ):
      
      <form onSubmit= {handleSubmit}>
        <label>Nombre Completo</label>
        <input type="text" onChange={(event) => setAlgoo({...algo,nombre: event.target.value})}/>
        <label >Email</label>
        <input type="email" onChange={(event) => setAlgoo({...algo,email: event.target.value})}/>
        

       
        <button>Comprar</button>
     {error && <h4 style={{color: "red"}}>Por favor chequea que la información sea correcta</h4>}
    
    </form>}
 </div>
 );
};

export default Form;
