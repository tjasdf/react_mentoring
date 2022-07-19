import { TMovieItem } from "../../types"


export const MovieItemPage = ({data}: TMovieItem) => {
    return (
        <div>
            <div>
                <h2>{data[0].title}</h2>
                <h3>{data[0].tagline}</h3>
                <img src={data[0].poster_path} alt={data[0].title} />
                <p>Release date: {data[0].release_date}</p>
                <p>{data[0].overview}</p>
                <p>Budget: {data[0].budget}</p>
            </div>
        </div>    
    )
}