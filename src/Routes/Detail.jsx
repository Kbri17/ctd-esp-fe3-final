import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [char, setChar] = useState({});
  const params = useParams(); // Obtén los parámetros de la URL
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`; // Usa template literals para interpolar params.id

  useEffect(() => {
    axios(url)
      .then((res) => {
        console.log(res.data);
        setChar(res.data);
      })
      .catch((err) => console.log("Error al cargar el detalle:", err));
  }, [url]); // Asegúrate de que el efecto se ejecute cada vez que la URL cambie
  console.log(char)
  if (!Object.keys(char).length) {
    return (
      <div className="detail-container">
        <h2>¡Ups! No encontramos a este dentista...</h2>
        
        <p>¡Parece que está tomando un café o algo por el estilo!</p>
        <p>Intenta más tarde o elige otro dentista de la lista.</p>
      </div>
    )
  }

  return (
    <div>
      <h2 className="detail-container">{char.name}</h2>
      <img className="detail-img" src={"/images/doctor.jpg"} alt="dentista" />
    </div>
  );
};

export default Detail;
