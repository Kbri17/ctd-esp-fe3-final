import React from "react";
import { useCharStates } from "../Context/Context";
import Card from "../Components/Card";  // Asegúrate de importar Card si lo estás usando

const Home = () => {
  const { state, dispatch } = useCharStates();
  const { chars, favs, theme } = state;  // Asegúrate de que 'theme' esté en tu estado

  console.log(chars); // Verifica la estructura de los datos

  
  return (
    
      <div className={`home ${theme}`}>
      <h1>Home</h1>
      <div className="card-grid">
        {chars.map((char) => (
         
          <Card key={char.id} char={char}>
            <h3>{char.name}</h3>
            <p>{char.username}</p>
            <p>{char.email}</p>
            <button
              onClick={() =>
                dispatch({ type: "ADD_FAV", payload: char })
              }
            >
              Add to Favorites
            </button>
          </Card> // Aquí cerramos correctamente el componente Card
        ))}
      </div>
    </div>
   
  );
};

export default Home;