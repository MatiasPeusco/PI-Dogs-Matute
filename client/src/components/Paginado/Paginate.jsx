import React, { useState } from "react";
import { PaginadoContainer, Button } from "./StyledPaginate";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Paginado = ({
  paginado,
  allDogs,
  dogsPerPage,
  currentPage,
  setCurrentPage,
}) => {
  // Estado para controlar el límite de número de página, el número máximo de página y el número mínimo de página
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  // Cálculo de los números de página
  const pageNumbers = [];
  for (let i = 0; i <= Math.ceil(allDogs / dogsPerPage); i++) {
    pageNumbers.push(i + 1);
  }

  // Renderizado de los números de página
  const renderPageNumber = pageNumbers.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li key={number}>
          <Button onClick={() => paginado(number)}>{number}</Button>
        </li>
      );
    } else {
      return null;
    }
  });

  // Manejo de la página siguiente
  const handleNext = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  // Manejo de la página anterior
  const handlePrev = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  return (
    <div>
      <PaginadoContainer>
        {/* Botón de página anterior */}
        <li>
          <Button
            onClick={(e) => handlePrev(e)}
            disabled={currentPage === pageNumbers[0] ? true : false}
          >
            <FaArrowLeft />
          </Button>
        </li>
        {/* Números de página */}
        {renderPageNumber}
        {/* Botón de página siguiente */}
        <Button
          onClick={(e) => handleNext(e)}
          disabled={
            currentPage === pageNumbers[pageNumbers.length - 1] ? true : false
          }
        >
          <FaArrowRight />
        </Button>
      </PaginadoContainer>
    </div>
  );
};

export default Paginado;
