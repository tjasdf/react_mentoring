import { TMovieItem } from "../../types";
import {MovieItem} from "../MovieItem";
import styles from  './MovieList.module.scss'


export const MovieList = ({data}: TMovieItem) => {
    const movies = data.map((movie) =>{
        return (
            <MovieItem  {...movie}/>
        )
    })
    return (
        <div className={styles.root}>
            {movies}
        </div>
    )
}
