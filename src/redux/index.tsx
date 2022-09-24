import { createStore } from 'redux';
import { TAction, TProps } from '../types';

const initialState = {
    movies: [],
    status: 'idle'
}

export const moviesFetched = (movies: TProps) => {
    return {
        type: 'INIT',
        payload: movies
    }
}

export const fetchMovies = async () => {
    const response = await fetch('https://reactjs-cdp.herokuapp.com/movies')
    const movies = await response.json()
    return movies.data
}

export const reducer = (state = initialState, action: TAction) => {
    switch (action.type) {
        case "INIT":
            return {
                ...state,
                movies: action.payload
            };
        default:
            return state;
    }
}

export const store = createStore(reducer);

