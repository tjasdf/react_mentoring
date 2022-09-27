import { TMovieItem } from "../types"
import { getMovies } from "./actions";
import { createSlice } from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';


export interface IMoviesState {
    movies: Array<TMovieItem>
    isLoading: boolean
    errors: Array<string>
}

const initialState: IMoviesState = {
    movies: [],
    isLoading: false,
    errors: []
}


const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder
            .addCase(getMovies.pending, (state: IMoviesState)=>{
                state.isLoading = true
            })
            .addCase(getMovies.fulfilled, (state: IMoviesState, {payload: movies}: PayloadAction<TMovieItem[]>)=>{
                state.movies = movies
                state.isLoading = false
            })
            .addCase(getMovies.rejected, (state: IMoviesState, {payload: errors}: PayloadAction<any>)=>{
                state.isLoading = false
                state.errors = errors
            })
    }
})

export default movieSlice.reducer