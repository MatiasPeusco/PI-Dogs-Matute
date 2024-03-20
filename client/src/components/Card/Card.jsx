import React from "react";
import { Container, Image, InfoContainer } from "./StyledCard";
import { Link } from "react-router-dom";


const Card = ({ image, name, breed_group,id }) => {
  return (
    <Link to={`/dogs/${id}`} style={{ textDecoration: 'none' }}>
      <Container>
        <Image src={image} alt="image_dog" image={image}/>
        <InfoContainer>
          <h1>{name}</h1>
          <span>Breed Group: </span>
          <span className="span">{breed_group}</span>
        </InfoContainer>
      </Container>
    </Link>
  );
};

export default Card;
