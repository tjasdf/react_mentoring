import './MovieItem.scss';


export const MovieItem = ({...movie}) => {
    return (
        <div className="movie_container">
            <h2>{movie.title}</h2>
            <span>{movie.genres.join(', ')}</span>
            <p>Release date: {movie.release_date}</p>
            <img src={movie.poster_path} alt={movie.title} />
        </div>
    )
}
