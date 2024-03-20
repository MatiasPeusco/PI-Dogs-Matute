import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { DetailContainer } from "./StyledDetail";

const Detail = () => {
  const { id } = useParams();
  const [dogDetail, setDogDetail] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/dogs/${id}`).then((response) => {
      setDogDetail(response.data);
    });
  }, [id]);

  return (
    <>
      {dogDetail ? (
        <DetailContainer>
          <div className="imageName">
            <h1>{dogDetail[0].name}</h1>
            <img src={dogDetail[0].image_url} alt="dog_image" />
          </div>
          <div className="details">
              <div className="detail">
                <span>Weight:</span><p>{dogDetail[0].weight} kg</p>
              </div>
              <div className="detail">
                <span>Height: </span><p>{dogDetail[0].height} cm</p>
              </div>
              <div className="detail">
                <span>Lifespan: </span><p>{dogDetail[0].life_span}</p>
              </div>
              <div className="detailTemperament">
                <span>Temperament: </span><p>{dogDetail[0].temperament || dogDetail[0].temperaments.map((el) => el.name).join(' ')}</p>
              </div>
          </div>
        </DetailContainer>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Detail;
