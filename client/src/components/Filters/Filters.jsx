import React from "react";
import { Link } from "react-router-dom"; // Importar Link de react-router-dom
import FilterCreated from "./FilterCreated"; // Importar FilterCreated
import FilterOrder from "./FilterOrder"; // Importar FilterOrder
import FilterTemp from "./FilterTemp"; // Importar FilterTemp
import { ButtonsContainer, Container, FiltersContainer } from "./StyledFilters"; // Importar estilos personalizados

// Definición del componente funcional Filters
const Filters = ({
  handleFilterCreated,
  handleOrderByName,
  handleFilterTemperament,
  allTemperaments,
}) => {
  return (
    <Container>
      {/* Contenedor de filtros */}
      <FiltersContainer>
        {/* Componente FilterOrder para ordenar */}
        <FilterOrder handleOrderByName={handleOrderByName} />
        {/* Componente FilterTemp para filtrar por temperamento */}
        <FilterTemp
          handleFilterTemperament={handleFilterTemperament}
          allTemperaments={allTemperaments}
        />
        {/* Componente FilterCreated para filtrar por origen */}
        <FilterCreated handleFilterCreated={handleFilterCreated} />
      </FiltersContainer>
    </Container>
  );
};

export default Filters; // Exportar el componente Filters

