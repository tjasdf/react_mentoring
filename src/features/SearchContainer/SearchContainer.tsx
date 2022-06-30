import './SearchContainer.css';

function SearchContainer() {
    return (
        <div className="container">
            <div className='search-input'>
                <h2>FIND YOUR MOVIE</h2>
                <input type="text"
                    placeholder="Введите название фильма..."/>
            </div>
            <div className="filter">
                <span>SEARCH BY</span>
                <button className='filter-btn'>Title</button>
                <button className='filter-btn'>Genre</button>
                <button className='search-btn'>Search</button>
            </div>
        </div>
    )
}

export default SearchContainer;