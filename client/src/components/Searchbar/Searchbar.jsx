import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch} from "react-redux";
import { getSearchByName } from "../../actions";
import { Container, SearchBarContainer } from "./StyledSearchbar";


const Searchbar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(e);
    dispatch(getSearchByName(name));
  };

  const handleKeyPress = (e) => {
    var code = e.charCode || e.keyCode;
    if(code === 13){
      dispatch(getSearchByName(name))
    }
  }

  return (
    <Container>
      <SearchBarContainer>
        <FaSearch className="searchIcon" onClick={(e) => handleSubmit(e)}/>
        <input placeholder="Search Dog" onChange={(e) => handleChange(e)} onKeyPress={(e) => handleKeyPress(e)}/>
    </SearchBarContainer>
    </Container>
    
  );
};

export default Searchbar;
