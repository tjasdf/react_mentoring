import {useState} from "react";
import './SearchContainer.scss';

interface PropsData {
    data: object[]
}

export const SearchContainer:React.FC<PropsData> = ({data}) => {
    const [active, setActive] = useState(true);
    const [release, setRelease] = useState(true);
    const changeFilter = () => active ? setActive(false):setActive(true);
    const changeReleaseStatus = () => release ? setRelease(false):setRelease(true); 
    return (
        <div className="container"> 
            <div className='search-input'>
                <h2>FIND YOUR MOVIE</h2>
                <input type="text"
                    placeholder="Введите название фильма..."/>
            </div>
            <div className="filter">
                <span>SEARCH BY</span>
                <button onClick={changeFilter} className={`filter-btn ${active?'active-filter':''}`}>Title</button>
                <button onClick={changeFilter} className={`filter-btn ${!active?'active-filter':''}`}>Genre</button>
                <button className='search-btn'>Search</button>
            </div>
            <div className="status-search">
                <span className="found-movies">{data.length} movies found</span>
                <span>Sort by: </span>
                <button onClick={changeReleaseStatus} className={release?'activ-status':''}>release date</button>
                <button onClick={changeReleaseStatus} className={!release?'activ-status':''}>rating</button>
            </div>
        </div>
    )
}
