import { TMovieItem } from "../../types"

type TMovie = {
    movie: TMovieItem
}

export const MovieItemPage = ({movie}: TMovie) => {
    const {title, tagline, poster_path, release_date, overview, budget} = movie;
    return (
        <div>
            <div>
                <h2>{title}</h2>
                <h3>{tagline}</h3>
                <img src={poster_path} alt={title} />
                <p>Release date: {release_date}</p>
                <p>{overview}</p>
                <p>Budget: {budget}</p>
            </div>
        </div>    
    )
}