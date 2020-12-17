import axios from 'axios';

export const GET_MOVIE_START = 'GET_MOVIESTART';
export const GET_MOVIE_SUCCESS = 'GET_MOVIE_SUCCESS';
export const GET_MOVIE_FAIL = 'GET_MOVIE_FAIL';

export const getMovie = () => {
  return (dispatch => {

      dispatch({type:GET_MOVIE_START});

      axios
          .get(`https://ghibliapi.herokuapp.com/films`)
          .then(res=> {
              dispatch({type:GET_MOVIE_SUCCESS, payload:res.data});
          })
          .catch(err => {
              dispatch({type:GET_MOVIE_FAIL, payload: err});
          });
  });
}