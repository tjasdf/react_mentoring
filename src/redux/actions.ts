import {createAsyncThunk} from '@reduxjs/toolkit'

export const getMovies = createAsyncThunk(
    'movies/GET_MOVIES',
    async () => {
        const response = await fetch('https://reactjs-cdp.herokuapp.com/movies')
        const movies = await response.json()
        return movies.data
    }
)