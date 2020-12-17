import React from "react";
import { connect } from 'react-redux';
import Styled from "styled-components";

import { getMovie } from "./Actions/actions";

import MovieCard from "./Components/MovieCard";

function App(props) {

  const handleGet = () => {
    props.getMovie();
  }

  return (
    <StyledApp>
      <header>
        <h1>Studio Ghibli Movies</h1>
        <button 
          onClick={handleGet}
          className={`${props.moviesFetched ? "hide" : "" }`}
        >Get Movies</button>
      </header>
      <div className={`${props.moviesFetched ? "hide" : "" }`} >
        Click Get Movies Button
      </div>
      <div className={`movie-container ${props.moviesFetched ? "" : "hide" }`} >
        {props.movies.map((movie) => {
          return (<MovieCard key={movie.id} movie={movie} />);
        })}
      </div>
    </StyledApp>
  );
}

const mapStateToProps = state => {
  return {
    moviesFetched: state.moviesFetched,
    movies: state.movies,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getMovie })(App);

const StyledApp = Styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background: lightblue;
  header{
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    min-height: 20vh;
    background: grey;
    h1{
      color: lightblue;
      font-size: 50px;
      text-align: center;
    }
    button{
      margin-bottom:5vh;
      min-height: 50px;
      min-width: 200px;
    }
  }
  .hide{
    display: none;
  }
  .movie-container{
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background: rgb(238,174,202);
    background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
  }
`;