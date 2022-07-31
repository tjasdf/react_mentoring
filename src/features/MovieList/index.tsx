import { TMovieItem } from "../../types";
import {MovieItem} from "../MovieItem";
import styles from  './MovieList.module.scss'

type TMovieList ={
    movies: Array<TMovieItem>
}

export const MovieList = ({ movies }: TMovieList) => (
    <div className={styles.root}>
        {
            movies.map((movie) =>(
                <MovieItem  {...movie}/>
            ))
        }
    </div>
)
