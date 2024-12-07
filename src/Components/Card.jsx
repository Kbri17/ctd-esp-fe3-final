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

  const toggleFav = () => {
    const isAlreadyFav = state.favs.some((fav) => fav.id === char.id);

    if (isAlreadyFav) {
      dispatch({ type: "DELETE_FAV", payload: char });
      alert("Personaje eliminado de favoritos.");
    } else {
      dispatch({ type: "ADD_FAV", payload: char });
      alert("Personaje añadido a favoritos.");
    }
  };
  const isFavorite = state.favs.some((fav) => fav.id === char.id);

  return (
    <div className="card">
      <Link to={`/detail/${char.id}`}>
        <img src="./images/doctor.jpg" alt={`${char.name}`} />
        <h3>{char.name}</h3>
      </Link>
      <p><strong>Username:</strong> {char.username}</p>
      <p><strong>ID:</strong> {char.id}</p>
      <button onClick={toggleFav} className={`favButton ${isFavorite ? "fabAdded" : "fabRemoved"}`}
      >{isFavorite ? "⭐ Eliminar de Favs" : "⭐ Añadir a Favs"}</button>
    </div>
  );
};



export default Card;
