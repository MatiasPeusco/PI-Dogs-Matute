import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterCreated,
  filterTemperament,
  getDogs,
  getDogsTemperament,
  orderByName,
} from "../../actions";
import Paginado from "../Paginado/Paginate.jsx";
import { Container, Grid } from "./StyledHome";
import Card from "../Card/Card.jsx";
import Footer from "../Footer/Footer";
import Filters from "../Filters/Filters";
import Searchbar from "../Searchbar/Searchbar";
import Line from "../Line/Line";
import ResetCreate from "../ResetCreate/ResetCreate";
import Loader from "../Loader/Loader";

// Componente funcional Home
const Home = () => {
  const dispatch = useDispatch(); // Hook de useDispatch para enviar acciones al store
  const allDogs = useSelector((state) => state.dogs); // Selector para obtener el estado de los perros
  const allTemperaments = useSelector((state) => state.temperaments); // Selector para obtener el estado de los temperamentos

  // Estado local para controlar la paginación
  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage] = useState(9);

  // Obtener el índice del último perro de la página actual
  const indexOfLastDog = currentPage * dogsPerPage;
  // Obtener el índice del primer perro de la página actual
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  // Obtener los perros de la página actual
  const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog);

  // Función para cambiar de página
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Efecto para cargar los perros y los temperamentos al montar el componente
  useEffect(() => {
    dispatch(getDogs());
    dispatch(getDogsTemperament());
  }, [dispatch]);

  // Función para manejar el ordenamiento por nombre de los perros
  const handleOrderByName = (e) => {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
  };

  // Función para manejar el filtrado por temperamento de los perros
  const handleFilterTemperament = (e) => {
    dispatch(filterTemperament(e.target.value));
    setCurrentPage(1);
  };

  // Función para manejar el filtrado por origen de los perros
  const handleFilterCreated = (e) => {
    dispatch(filterCreated(e.target.value));
    setCurrentPage(1);
  };

  // Función para reiniciar los filtros
  const handleReset = () => {
    dispatch(getDogs());
  };

  // Renderizado condicional de un loader si no hay datos de perros
  if (!allDogs.length) {
    return <Loader />;
  }

  // Renderizado del componente Home
  return (
    <div>
      {/* Contenedor principal */}
      <Container>
        {/* Barra de búsqueda */}
        <Searchbar />
        {/* Componente Filters para filtrar los perros */}
        <Filters
          handleOrderByName={handleOrderByName}
          handleFilterTemperament={handleFilterTemperament}
          handleFilterCreated={handleFilterCreated}
          allTemperaments={allTemperaments}
        />
        {/* Línea divisoria */}
        <Line />
        {/* Botón para reiniciar los filtros */}
        <ResetCreate handleReset={handleReset} />
        {/* Grid para mostrar las tarjetas de los perros */}
        <Grid>
          {currentDogs?.map((d) => {
            return (
              <div key={d.id}>
                <Card
                  id={d.id}
                  image={d.image_url}
                  name={d.name}
                  breed_group={d.breed_group ? d.breed_group : "None"}
                />
              </div>
            );
          })}
        </Grid>
      </Container>
      {/* Componente Paginado para la paginación */}
      <Paginado
        paginado={paginado}
        dogsPerPage={dogsPerPage}
        allDogs={allDogs.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      {/* Componente Footer */}
      <Footer />
    </div>
  );
};

export default Home; // Exportar el componente Home

