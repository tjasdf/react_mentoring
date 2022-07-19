import { useState } from 'react';
import { clsx } from 'clsx';
import { TMovieItem } from '../../types';
import styles from './SearchContainer.module.scss';


export const SearchContainer = ({data}: TMovieItem) => {
    const [active, setActive] = useState(true);
    const [release, setRelease] = useState(true);
    const toggleFilter = () => setActive(!active);
    const toggleReleaseStatus = () => setRelease(!release); 
    return (
        <div className={styles.root}> 
            <div className={styles.searchInput}>
                <h2>FIND YOUR MOVIE</h2>
                <input type="text"
                    placeholder="Введите название фильма..."/>
            </div>
            <div className={styles.filter}>
                <span>SEARCH BY</span>
                <button onClick={toggleFilter} className={clsx(styles.filterBtn, {[styles.active_Filter]:active})}>Title</button>
                <button onClick={toggleFilter} className={clsx(styles.filterBtn, {[styles.active_Filter]:!active})}>Genre</button>
                <button className={styles.searchBtn}>Search</button>
            </div>
            <div className={styles.statusSearch}>
                <span className={styles.foundMovies}>{data.length} movies found</span>
                <span>Sort by: </span>
                <button onClick={toggleReleaseStatus} className={clsx({[styles.activ_Status]:release})}>release date</button>
                <button onClick={toggleReleaseStatus} className={clsx({[styles.activ_Status]:!release})}>rating</button>
            </div>
        </div>
    )
}
