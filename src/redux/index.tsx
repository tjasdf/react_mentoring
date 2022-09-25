import {  TMovieItem } from '../types';
import { configureStore, createReducer, createAction } from '@reduxjs/toolkit';

const initialState = {
    movies: [],
    status: 'idle'
}

export const loadMovies = createAction('LOAD_ALL_MOVIES');

export const fetchMovies = async () => {
    const response = await fetch('https://reactjs-cdp.herokuapp.com/movies')
    const movies = await response.json()
    return movies.data
}

export const movieReducer = createReducer(initialState,{
    [loadMovies]:(state: { movies: TMovieItem; }, action: { payload: TMovieItem; })=>{state.movies = action.payload}
})


export const store = configureStore({
    reducer: movieReducer
});

