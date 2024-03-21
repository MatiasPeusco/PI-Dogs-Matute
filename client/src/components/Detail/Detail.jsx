import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../Loader/Loader";
import { DetailContainer } from "./StyledDetail";

// Componente funcional Detail
const Detail = () => {
  const { id } = useParams(); // Obtener el parámetro de la URL
  const [dogDetail, setDogDetail] = useState(null); // Estado para almacenar los detalles del perro

  useEffect(() => {
    // Efecto para cargar los detalles del perro al montar el componente
    axios.get(`http://localhost:3001/dogs/${id}`).then((response) => {
      setDogDetail(response.data); // Almacenar los detalles del perro en el estado
    });
  }, [id]); // Ejecutar el efecto cuando cambie el parámetro de la URL

  // Renderizar el detalle del perro si está disponible, de lo contrario, mostrar el componente Loader
  return (
    <>
      {dogDetail ? (
        // Renderizar los detalles del perro
        <DetailContainer>
          <div className="imageName">
            <h1>{dogDetail[0].name}</h1>
            <img src={dogDetail[0].image_url} alt="dog_image" />
          </div>
          <div className="details">
            <div className="detail">
              <span>Weight:</span>
              <p>{dogDetail[0].weight} kg</p>
            </div>
            <div className="detail">
              <span>Height: </span>
              <p>{dogDetail[0].height} cm</p>
            </div>
            <div className="detail">
              <span>Lifespan: </span>
              <p>{dogDetail[0].life_span}</p>
            </div>
            <div className="detailTemperament">
              <span>Temperament: </span>
              <p>
                {/* Mostrar el temperamento del perro si está disponible, de lo contrario, mostrar 'None' */}
                {dogDetail[0].temperament ||
                  dogDetail[0].temperaments.map((el) => el.name).join(" ")}
              </p>
            </div>
          </div>
        </DetailContainer>
      ) : (
        // Mostrar el componente Loader mientras se cargan los detalles del perro
        <Loader />
      )}
    </>
  );
};

export default Detail; // Exportar el componente Detail


