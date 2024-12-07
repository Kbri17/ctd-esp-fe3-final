import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [char, setChar] = useState({});
  const params = useParams(); 
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`; 

  useEffect(() => {
    axios(url)
      .then((res) => {
        console.log(res.data);
        setChar(res.data);
      })
      .catch((err) => console.log("Error al cargar el detalle:", err));
  }, [url]); 
  console.log(char)
  if (!Object.keys(char).length) {
    return (
      <div className="detail-container">
        <h2>¡Ups! No encontramos a este dentista...</h2>
        
        <p>¡Parece que está tomando un café o algo por el estilo!</p>
        <p>Elige un dentista de la lista y veras la magia. :D</p>
      </div>
    )
  }

  return (
    <div className="detail-container">
      <h2>{char.name}</h2>
      <img className="detail-img" src={"/images/doctor.jpg"} alt="dentista" />
      <p><strong>Email:</strong> {char.email}</p>
      <p><strong>Teléfono:</strong> {char.phone}</p>
      <p><strong>Sitio web:</strong> <a href={`http://${char.website}`} target="_blank" rel="noopener noreferrer">{char.website}</a></p>
    </div>
  );
};

export default Detail;
