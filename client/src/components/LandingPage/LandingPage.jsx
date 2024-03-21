import React from "react";
import { Link } from "react-router-dom";
import background from "../../images/background.jpg";
import Footer from "../Footer/Footer";
import {
  Button,
  Container,
  Image,
  Presentation,
  Text,
  TextContainer,
  Wrapper,
} from "./StyledLandingPage";
import dog from "../../images/dog.png";

// Componente funcional LandingPage
const LandingPage = () => {
  return (
    <Container img={background}>
      {/* Contenedor principal */}
      <Wrapper>
        {/* Presentación */}
        <Presentation>
          {/* Imagen */}
          <Image src={dog} alt="dogs" />
          {/* Contenedor de texto */}
          <TextContainer>
            {/* Título */}
            <Text>
              Welcome to <br />
              Pooches
            </Text>
            {/* Subtítulo */}
            <span>the site where you can find your ideal dog!</span>
            {/* Botón para ir a la página principal */}
            <Link to="/home">
              <Button>Go</Button>
            </Link>
          </TextContainer>
        </Presentation>
        {/* Componente Footer */}
        <Footer />
      </Wrapper>
    </Container>
  );
};

export default LandingPage; // Exportar el componente LandingPage

