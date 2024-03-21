import React from "react";
import {
  Contact,
  Container,
  Image,
  ImageContainer,
  Left,
  Right,
  TechnologiesContainer,
} from "./StyledAbout"; // Importar componentes y estilos personalizados
import react from "../../images/react.svg"; // Importar el logo de React
import redux from "../../images/redux.svg"; // Importar el logo de Redux
import nodejs from "../../images/nodejs.svg"; // Importar el logo de Node.js
import express from "../../images/express.svg"; // Importar el logo de Express
import postgresql from "../../images/postgresql.svg"; // Importar el logo de PostgreSQL
import sequelize from "../../images/sequelize.svg"; // Importar el logo de Sequelize
import { Link } from "react-router-dom"; // Importar el componente Link de React Router

// Definir el componente funcional About
const About = () => {
  return (
    <Container>
      <Left className="about-description">
        {/* Sección de descripción */}
        <section>
          <h2>About this application</h2>
          <p>
            Pooches is a website to learn more about dogs. It is my individual project in the Soy Henry Bootcamp.
          </p>
        </section>
        {/* Sección de tecnologías utilizadas */}
        <section>
          <h2>Technologies Used</h2>
          <TechnologiesContainer>
            {/* Enlaces a las páginas de documentación de las tecnologías */}
            <ImageContainer>
              <Link to="https://reactjs.org/" target="_blank">
                <Image src={react} /> {/* Logo de React */}
              </Link>
            </ImageContainer>
            <ImageContainer>
              <Link to="https://redux.js.org/" target="_blank">
                <Image src={redux} /> {/* Logo de Redux */}
              </Link>
            </ImageContainer>
            <ImageContainer>
              <Link to="https://nodejs.org/" target="_blank">
                <Image src={nodejs} /> {/* Logo de Node.js */}
              </Link>
            </ImageContainer>
            <ImageContainer>
              <Link to="https://expressjs.com/" target="_blank">
                <Image src={express} /> {/* Logo de Express */}
              </Link>
            </ImageContainer>
            <ImageContainer>
              <Link to="https://www.postgresql.org/" target="_blank">
                <Image src={postgresql} /> {/* Logo de PostgreSQL */}
              </Link>
            </ImageContainer>
            <ImageContainer>
              <Link to="https://sequelize.org/" target="_blank">
                <Image src={sequelize} /> {/* Logo de Sequelize */}
              </Link>
            </ImageContainer>
          </TechnologiesContainer>
        </section>
      </Left>
    </Container>
  );
};

export default About; // Exportar el componente About


