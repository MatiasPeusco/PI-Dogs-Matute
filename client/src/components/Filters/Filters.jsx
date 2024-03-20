import React from "react";
import { Link } from "react-router-dom";
import FilterCreated from "./FilterCreated";
import FilterOrder from "./FilterOrder";
import FilterTemp from "./FilterTemp";
import { ButtonsContainer, Container, FiltersContainer } from "./StyledFilters";

const Filters = ({
  handleFilterCreated,
  handleOrderByName,
  handleFilterTemperament,
  allTemperaments,
}) => {
  return (
    <Container>
      <FiltersContainer>
        <FilterOrder handleOrderByName={handleOrderByName} />
        <FilterTemp handleFilterTemperament={handleFilterTemperament} allTemperaments={allTemperaments}/>
        <FilterCreated handleFilterCreated={handleFilterCreated} />
      </FiltersContainer>
    </Container>
  );
};

export default Filters;
