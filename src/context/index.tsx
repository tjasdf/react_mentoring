import { createContext, useEffect, useState } from 'react';
import { TMovieItem, TProps } from '../types';

interface IProps {
    children: JSX.Element
}


export const AppContext = createContext<TProps>({movies: []});

export const AppProvider = ({children}: IProps) => {
    const [movies, setMovies] = useState<Array<TMovieItem>>([])
    useEffect(()=>{
        fetchMovies()
    },[])
    const fetchMovies = async () => {
        const response = await fetch('https://reactjs-cdp.herokuapp.com/movies')
        const movies = await response.json()
        setMovies(movies.data)
    }
    return (
        <AppContext.Provider value={{movies}}>
            {children}
        </AppContext.Provider>
    )
}