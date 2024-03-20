import React from "react";
import {
  Contact,
  Container,
  Image,
  ImageContainer,
  Left,
  Right,
  TechnologiesContainer,
} from "./StyledAbout";
import react from "../../images/react.svg";
import redux from "../../images/redux.svg";
import nodejs from "../../images/nodejs.svg";
import express from "../../images/express.svg";
import postgresql from "../../images/postgresql.svg";
import sequelize from "../../images/sequelize.svg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Container>
      <Left className="about-description">
        <section>
          <h2>About this application</h2>
          <p>
            Pooches is a website to learn more about dogs. It is my individual project in the Soy Henry Bootcamp.
          </p>
        </section>
        <section>
          <h2>Technologies Used</h2>
          <TechnologiesContainer>
            <ImageContainer>
              <Link to="https://reactjs.org/" target="_blank">
                <Image src={react} />
              </Link>
            </ImageContainer>
            <ImageContainer>
              <Link to="https://redux.js.org/" target="_blank">
                <Image src={redux} />
              </Link>
            </ImageContainer>
            <ImageContainer>
              <Link to="https://nodejs.org/" target="_blank">
                <Image src={nodejs} />
              </Link>
            </ImageContainer>
            <ImageContainer>
              <Link to="https://expressjs.com/" target="_blank">
                <Image src={express} />
              </Link>
            </ImageContainer>
            <ImageContainer>
              <Link to="https://www.postgresql.org/" target="_blank">
                <Image src={postgresql} />
              </Link>
            </ImageContainer>
            <ImageContainer>
              <Link to="https://sequelize.org/" target="_blank">
                <Image src={sequelize} />
              </Link>
            </ImageContainer>
          </TechnologiesContainer>
        </section>
      </Left>
    </Container>
  );
};

export default About;

