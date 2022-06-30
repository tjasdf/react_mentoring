import MovieItem from "../MovieItem/MovieItem";
import './MovieList.css'

function MovieList() {
    return (
        <div className="movie-container">
            <div className="status-search">
                <span className="found-movies">0 movies found</span>
                <span>Sort by: </span>
                <span>release date</span>
                <span className="active">rating</span>
            </div>
            <ul>
                <MovieItem/>
            </ul>
        </div>
    )
}

export default MovieList;