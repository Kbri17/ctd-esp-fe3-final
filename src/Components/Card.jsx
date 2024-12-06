import React from "react";
import { Link } from "react-router-dom";
import { useCharStates } from "../Context/Context";



const Card = ({ char }) => {

  const { state, setFavs } = useCharStates();

  const addFav = () => {
    const storedFavs = JSON.parse(localStorage.getItem("favorites")) || [];

    // Verifica 
    const isAlreadyFav = storedFavs.some((fav) => fav.id === char.id);

    if (!isAlreadyFav) {
      // Agrega la nueva Card a la lista de favoritos
      const newFav = {
        id: char.id,
        name: char.name,
        username: char.username,
        image: char.image,
      };
      // Agrega la nueva Card a la lista de favoritos
      const updatedFavs = [...storedFavs, newFav];

      // Guarda la lista actualizada en el localStorage
      localStorage.setItem("favorites", JSON.stringify(updatedFavs));


      setFavs(updatedFavs);
    } else {
      alert("Este personaje ya está en favoritos.");
    }
  };

  return (
    <div className="card">
      {/* {En cada card deberan mostrar en name - username y el id} */}

      <h3>Gracias, {char.name} ({char.id})</h3>
      <h3>En tu casilla de email recibirás tu entrada para artista</h3>
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      <Link to={`/detail/${id}`}>
        <img src={image} alt={`${char.name}`} />
        <h3>{char.name}</h3>
      </Link>
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className="favButton">Add to Favs</button>
    </div>
  );
};



export default Card;
