
import { useSelector } from "react-redux";
import {MovieItem} from "../MovieItem";
import { TMovieItem, RootState } from '../../types'
import styles from  './MovieList.module.scss'


export const MovieList = () => {
    const {movies} = useSelector((state: RootState)=>state.movies)
    return (
        <div className={styles.root}>
            {
                movies.map((movie: TMovieItem) =>(
                    <MovieItem  {...movie}/>
                ))
            }
        </div>
    )
}
