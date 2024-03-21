import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { getSearchByName } from "../../actions";
import { Container, SearchBarContainer } from "./StyledSearchbar";

const Searchbar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  // Función para manejar el cambio en el campo de búsqueda
  const handleChange = (e) => {
    setName(e.target.value);
  };

  // Función para manejar el envío del formulario de búsqueda
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getSearchByName(name));
  };

  // Función para manejar la tecla Enter en el campo de búsqueda
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      dispatch(getSearchByName(name));
    }
  };

  return (
    <Container>
      <SearchBarContainer>
        {/* Icono de búsqueda */}
        <FaSearch className="searchIcon" onClick={handleSubmit} />
        {/* Campo de entrada para la búsqueda */}
        <input
          placeholder="Search Dog"
          value={name}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
      </SearchBarContainer>
    </Container>
  );
};

export default Searchbar;
