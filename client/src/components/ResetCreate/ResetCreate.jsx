import React from "react";
import { Link } from "react-router-dom";
import { ButtonsContainer, Container } from "./StyledResetCreate";
import { FaPlus,FaRedoAlt } from "react-icons/fa";

const ResetCreate = ({handleReset}) => {
  return (
    <Container>
      <ButtonsContainer>
        <Link to="/create">
          <button >
            <FaPlus />
          </button>
        </Link>
        <button onClick={(e) => handleReset(e)}>
          <FaRedoAlt />
        </button>
      </ButtonsContainer>
    </Container>
  );
};

export default ResetCreate;
