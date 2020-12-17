import React from "react";
import Styled from "styled-components";

export default function MovieCard(props) {
const { movie } = props;

  return (
    <StyledMovieCard>
      <h2>{movie.title}</h2>
      <div className="div">
        <div className="des-container" >
          <h3>Description:</h3>
          <p>{movie.description}</p>
        </div>
        <div className="info-container" > 
          <h3>Info:</h3>
          <p>Director: {movie.director}</p>
          <p>Producer: {movie.producer}</p>
          <p>Release Date: {movie.release_date}</p>
          <p>Rating: {movie.rt_score}</p>
        </div>
      </div>
    </StyledMovieCard>
  );
}

const StyledMovieCard = Styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 50px;
  padding: 20px;
  border: 2px solid black;
  box-shadow: 4px 4px 4px black;
  background: white;
  color: black;
  min-width: 80vw;
  max-width: 80vw;
  h2{
    align-text: center;
  }
  .div{
    display:flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    .des-container{
      max-width: 50%;
      min-width: 50%;
      align-text: center;
    }
    .info-container{
      max-width: 30%;
      min-width: 30%;
      align-text: center;
    }
  }
`;