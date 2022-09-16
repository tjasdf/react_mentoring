import { useContext } from "react"
import { AppContext } from "../../context";



export const MovieItemPage = () => {
    const {movies} = useContext(AppContext);
    const {title, tagline, poster_path, release_date, overview, budget} = movies[0];
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