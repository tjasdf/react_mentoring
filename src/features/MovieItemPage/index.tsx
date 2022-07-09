


export const MovieItemPage = ({...movie}) => {
    return (
        <div>
            <div>
                <h2>{movie.title}</h2>
                <h3>{movie.tagline}</h3>
                <img src={movie.poster_path} alt={movie.title} />
                <span>{movie.genres.join(', ')}</span>
                <p>Release date: {movie.release_date}</p>
                <p>{movie.overview}</p>
                <p>Budget: {movie.budget}</p>
            </div>
        </div>    
    )
}