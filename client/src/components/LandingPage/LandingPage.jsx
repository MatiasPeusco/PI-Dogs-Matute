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

const LandingPage = () => {
  return (
    <Container img={background}>
      <Wrapper>
        <Presentation>
          <Image src={dog} alt="dogs" />
          <TextContainer>
            <Text>
              Welcome to <br />
              Pooches
            </Text>
            <span>the site where you can find your ideal dog!</span>
            <Link to="/home">
              <Button>Go</Button>
            </Link>
          </TextContainer>
        </Presentation>
        <Footer />
      </Wrapper>
    </Container>
  );
};

export default LandingPage;
