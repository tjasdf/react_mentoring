import {MovieItem} from "../MovieItem";
import './MovieList.scss'

interface IDataProps {
    data: object[];
}

export const MovieList:React.FC<IDataProps> = ({data}) => {
    const movies = data.map(movie =>{
        return (
            <MovieItem  {...movie}/>
        )
    })
    return (
        <div className="root">
            {movies}
        </div>
    )
}
