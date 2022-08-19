import { useContext, useReducer } from 'react';
import { clsx } from 'clsx';
import styles from './SearchContainer.module.scss';
import { dataContext } from '../../context/dataContext';


type TState = {
    active: boolean,
    release: boolean
}

type TAction = {
   type: string
   payload: {
    active?: boolean,
    release?: boolean
   }
}


function reducer(state: TState, action: TAction) {
    switch (action.type){
        case 'active':
            return {
                ...state,
                active: !state.active}
        case 'release':
            return {
                ...state,
                release: !state.release}
        default:
            return state;
    }
}

export const SearchContainer = () => {
    const context = useContext(dataContext);
    const [state, dispatch] = useReducer(reducer, {active: true, release: true});
    const getFilterStyles = (status: boolean) =>  clsx(styles.filterButton, {[styles.filter_active]:status});
    const getStatusStyles = (status: boolean) => clsx(styles.sortButton, {[styles.status_active]:status});
    return (
        <div className={styles.root}> 
            <div className={styles.searchInput}>
                <h2 className={styles.header}>FIND YOUR MOVIE</h2>
                <input className={styles.input} type="text"
                    placeholder="Введите название фильма..."/>
            </div>
            <div className={styles.filter}>
                <span className={styles.text}>SEARCH BY</span>
                <button onClick={()=> dispatch({type: 'active', payload:{active: false}})} className={getFilterStyles(state.active)}>Title</button>
                <button onClick={()=> dispatch({type: 'active', payload:{active: true}})} className={getFilterStyles(!state.active)}>Genre</button>
                <button className={styles.searchButton}>Search</button>
            </div>
            <div className={styles.statusSearch}>
                <span className={styles.foundMovies}>{context.length} movies found</span>
                <span className={styles.sort}>Sort by: </span>
                <button onClick={()=> dispatch({type: 'release', payload:{release: false}})} className={getStatusStyles(state.release)}>release date</button>
                <button onClick={()=> dispatch({type: 'release', payload:{release: true}})} className={getStatusStyles(!state.release)}>rating</button>
            </div>
        </div>
    )
}
