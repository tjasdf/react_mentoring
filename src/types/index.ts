import { store } from "../redux"

export type TMovieItem = { 
    id: number,
    title: string,
    tagline: string,
    vote_average: number,
    vote_count: number,
    release_date: string,
    poster_path: string,
    overview: string,
    budget: number,
    revenue: number,
    genres: string[]
}

export type TProps = {
    movies: Array<TMovieItem>
}

export type TAction = {
    type: string
    payload: []
}

export type RootState = ReturnType<typeof store.getState>