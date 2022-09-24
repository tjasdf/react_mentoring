
import { useSelector } from "react-redux";
import {MovieItem} from "../MovieItem";
import { TMovieItem, TProps } from '../../types'
import styles from  './MovieList.module.scss'


export const MovieList = () => {
    const {movies} = useSelector(state=>state)
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
