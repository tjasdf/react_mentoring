import styles from './MovieItem.module.scss';


export const MovieItem = ({...movie}) => (
    <div className={styles.root}>
        <img className={styles.picture} src={movie.poster_path} alt={movie.title} />
        <h2 className={styles.title}>{movie.title}</h2>
        <span className={styles.genres}>{movie.genres.join(', ')}</span>
        <div className={styles.anotation}>
            <h2 className={styles.raiting}>{movie.vote_average}</h2>
            <div className={styles.container}> </div>
            <span className={styles.text}>Release date: {movie.release_date}</span>
            <p className={styles.tag}>"{movie.tagline}"</p>
        </div>
    </div>    
)
