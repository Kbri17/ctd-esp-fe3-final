import React from 'react'
import { Link, useNavigate } from "react-router-dom";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
    <button onClick={() => navigate(-1)}>🔙</button>
    <Link to="/">
      <h4>Home</h4>
    </Link>
    <Link to="/envio">
      <h4>Contacto</h4>
    </Link>
    <Link to="/detail/:id">
      <h4>Detalle de cada dentista</h4>
    </Link>
    <Link to="/favs">
      <h4>Destacados</h4>
    </Link>
    
  </nav>
  )
}

export default Navbar