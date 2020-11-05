import { FETCH_TACO_START, FETCH_TACO_SUCCESS, FETCH_TACO_FAILURE } from '../actions/tacoAction';

const initialState = {
    tacoData: [],
    error: ''
};

export const jokesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TACO_SUCCESS:
            return {
                ...state,
                tacoData: action.payload
            }
        case FETCH_TACO_FAILURE:
            return{
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
};