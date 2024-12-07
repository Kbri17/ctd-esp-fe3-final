import React, { useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import ThemeContext from "../Context/ThemeContext";




const Navbar = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  return (
    <nav className={`navbar ${isDarkMode ? 'dark' : ''}`}>
    
    <Link to="/">
      <h4 className='navLink'>Home</h4>
    </Link>
    <Link to="/envio">
      <h4 className='navLink'> Contacto</h4>
    </Link>
    <Link to="/detail/:id">
      <h4 className='navLink'>Detalle </h4>
    </Link>
    <Link to="/favs">
      <h4 className='navLink'>Destacados</h4>
    </Link>
    <button class="theme-toggle-btn" onClick={toggleTheme}>
            {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </button>
  </nav>
  )
}

export default Navbar