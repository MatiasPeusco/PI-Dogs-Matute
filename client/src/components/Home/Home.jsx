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

const Home = () => {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs);
  const allTemperaments = useSelector((state) => state.temperaments);

  const [order, setOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage, setDogsPerPage] = useState(9);
  // const [pageNumberLimit, setPageNumberLimit] = useState(5);
  // const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  // const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getDogs());
    dispatch(getDogsTemperament());
  }, [dispatch]);

  const handleOrderByName = (e) => {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrder(e.target.value);
  };

  const handleFilterTemperament = (e) => {
    dispatch(filterTemperament(e.target.value));
    setCurrentPage(1);
  };

  const handleFilterCreated = (e) => {
    dispatch(filterCreated(e.target.value));
    setCurrentPage(1);
  };

  const handleReset = () => {
    dispatch(getDogs());
  };

  if(!allDogs.length){
    return(
      <Loader />
    )
  }

  return (
    <div>
      <Container>
        <Searchbar />
        <Filters
          handleOrderByName={handleOrderByName}
          handleFilterTemperament={handleFilterTemperament}
          handleFilterCreated={handleFilterCreated}
          allTemperaments={allTemperaments}
        />
        <Line />
        <ResetCreate handleReset={handleReset} />
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
      <Paginado
        paginado={paginado}
        dogsPerPage={dogsPerPage}
        allDogs={allDogs.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Footer />
    </div>
  );
};

export default Home;
