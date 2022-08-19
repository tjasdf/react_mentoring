import { useContext } from "react";
import { dataContext } from "../../context/dataContext";
import {MovieItem} from "../MovieItem";
import styles from  './MovieList.module.scss'


export const MovieList = () => {
    const context = useContext(dataContext)
    return (
        <div className={styles.root}>
            {
                context.map((movie) =>(
                    <MovieItem  {...movie}/>
                ))
            }
        </div>
    )
}
