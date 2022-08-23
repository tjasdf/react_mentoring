import { useContext } from "react";
import { AppContext } from "../../context";
import {MovieItem} from "../MovieItem";
import styles from  './MovieList.module.scss'


export const MovieList = () => {
    const {movies} = useContext(AppContext)
    return (
        <div className={styles.root}>
            {
                movies.map((movie) =>(
                    <MovieItem  {...movie}/>
                ))
            }
        </div>
    )
}
