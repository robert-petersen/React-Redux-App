import { GET_MOVIE_START, GET_MOVIE_SUCCESS, GET_MOVIE_FAIL } from "./../Actions/actions";

const initialState = {
  moviesFetched: false,
  movies: [],
  isFetching: false,
  error: ""
}

export const reducer = (state = initialState, action) => {
  switch(action.type){
    case GET_MOVIE_START :
      return ({
        ...state,
        isFetching: true,
        error: ""
      });
    case GET_MOVIE_SUCCESS :
      return ({
        ...state,
        movies: action.payload,
        isFetching: false,
        moviesFetched: true
      });
    case GET_MOVIE_FAIL :
      return ({
        ...state,
        error: action.payload
      });
    default:
      return state;
  }
}