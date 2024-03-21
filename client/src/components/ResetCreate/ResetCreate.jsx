import React from "react";
import { Link } from "react-router-dom";
import { ButtonsContainer, Container } from "./StyledResetCreate";
import { FaPlus, FaRedoAlt } from "react-icons/fa";

const ResetCreate = ({ handleReset }) => {
  return (
    <Container>
      <ButtonsContainer>
        {/* Botón para redireccionar a la página de creación */}
        <Link to="/create">
          <button>
            <FaPlus />
          </button>
        </Link>
        {/* Botón para reiniciar la lista de elementos */}
        <button onClick={(e) => handleReset(e)}>
          <FaRedoAlt />
        </button>
      </ButtonsContainer>
    </Container>
  );
};

export default ResetCreate;
