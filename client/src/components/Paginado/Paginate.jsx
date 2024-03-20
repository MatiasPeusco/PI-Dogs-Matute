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
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const pageNumbers = [];
  for (let i = 0; i <= Math.ceil(allDogs / dogsPerPage); i++) {
    pageNumbers.push(i + 1);
  }

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

  const handleNext = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

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
        {/* {pageNumbers?.map((number) => {
          return (
            <li key={number}>
              <Button onClick={() => paginado(number)}>{number}</Button>
            </li>
          );
        })} */}

        <li>
          <Button
            onClick={(e) => handlePrev(e)}
            disabled={currentPage === pageNumbers[0] ? true : false}
          >
            <FaArrowLeft />
          </Button>
        </li>
        {renderPageNumber}
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
