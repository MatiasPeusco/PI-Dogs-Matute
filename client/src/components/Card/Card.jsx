import React from "react";
import { Container, Image, InfoContainer } from "./StyledCard"; // Importar componentes y estilos personalizados
import { Link } from "react-router-dom"; // Importar el componente Link de React Router

// Definir el componente funcional Card
const Card = ({ image, name, breed_group, id }) => {
  return (
    // Enlace a la página de detalles del perro con el ID del perro como parámetro de la URL
    <Link to={`/dogs/${id}`} style={{ textDecoration: 'none' }}>
      {/* Contenedor principal de la tarjeta */}
      <Container>
        {/* Imagen del perro */}
        <Image src={image} alt="image_dog" image={image} />
        {/* Contenedor de información del perro */}
        <InfoContainer>
          {/* Nombre del perro */}
          <h1>{name}</h1>
          {/* Etiqueta para mostrar el grupo de raza del perro */}
          <span>Breed Group: </span>
          {/* Valor del grupo de raza del perro */}
          <span className="span">{breed_group}</span>
        </InfoContainer>
      </Container>
    </Link>
  );
};

export default Card; // Exportar el componente Card
