import axios from 'axios';

// action types
export const FETCH_TACO_START = "FETCH_TACO_START";
export const FETCH_TACO_SUCCESS = "FETCH_TACO_SUCCESS";
export const FETCH_TACO_FAILURE = "FETCH_TACO_FAILURE";

// action creators
export const fetchTaco = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_TACO_START });

        axios
            .get(`http://taco-randomizer.herokuapp.com/random/?full-taco=true`)
            .then((res) => {
                console.log(res);
                dispatch({ type: FETCH_TACO_SUCCESS, payload: res.data })
            })
            .catch((err) => {
                console.log(err)
                dispatch({ type: FETCH_TACO_FAILURE, payload: err.message })
            })
    }
}