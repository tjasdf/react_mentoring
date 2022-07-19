import styles from './MovieItem.module.scss';


export const MovieItem = ({...movie}) => {
    return (
        <div className={styles.root}>
            <h2 className={styles.title}>{movie.title}</h2>
            <span className={styles.genres}>{movie.genres.join(', ')}</span>
            <p>Release date: {movie.release_date}</p>
            <img className={styles.picture} src={movie.poster_path} alt={movie.title} />
        </div>
    )
}
