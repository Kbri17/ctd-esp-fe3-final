import React from "react";
import Card from "../Components/Card";
import { useCharStates } from "../Context/Context";

const Favs = () => {
  const { state } = useCharStates(); // Obtén favoritos del contexto
  const { favs, theme } = state; // Asegúrate de que el contexto incluye `favs` y `theme`

  return (
    <div className={`favs ${theme}`}>
      <h1>Mis Dentistas Favoritos</h1>
      <div className="card-grid">
        {favs.length > 0 ? (
          favs.map((fav) => <Card key={fav.id} char={fav} />)
        ) : (
          <p>No tienes favoritos aún. ¡Añade alguno desde el Home!</p>
        )}
      </div>
    </div>
  );
};

export default Favs;
