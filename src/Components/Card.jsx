import React from "react";
import { Link } from "react-router-dom";
import { useCharStates } from "../Context/Context";



const Card = ({ char }) => {
  
  const { state, dispatch } = useCharStates();

  const addFav = () => {
    const isAlreadyFav = state.favs.some((fav) => fav.id === char.id);

    if (!isAlreadyFav) {
      dispatch({ type: "ADD_FAV", payload: char });
      alert("Personaje añadido a favoritos.");
    } else {
      alert("Este personaje ya está en favoritos.");
    }
  };


  return (
    <div className="card">
      {/* {En cada card deberan mostrar en name - username y el id} */}

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      <Link to={`/detail/${char.id}`}>
        <img src="./images/doctor.jpg" alt={`${char.name}`} />
        <h3>{char.name}</h3>
      </Link>
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className="favButton">⭐Añade a Favs</button>
    </div>
  );
};



export default Card;
