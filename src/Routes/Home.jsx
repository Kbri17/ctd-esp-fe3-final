import React from "react";
import { useCharStates } from "../Context/Context";
import Card from "../Components/Card"; 


const Home = () => {
  const { state, dispatch } = useCharStates();
  const { chars , favs, theme } = state;  
  

  console.log(chars);
  
  return (
    
      <div className={`home ${theme}`}>
      <h1>Bienvenido a mi repo de Dentistas</h1>
      <div className="card-grid">
        {chars.map((char) => (
         
          <Card key={char.id} char={char} name={char.name}/>
           
        ))}
      </div>
    </div>
   
  );
};

export default Home;