import {MovieList} from './features/MovieList';
import {SearchContainer} from './features/SearchContainer';
import { data } from './mocks/data';
import { MovieItemPage } from './features/MovieItemPage';
import { useState } from 'react';
import './App.css';

function App() {
  const [show, setShow] = useState(false)
  if (show){
    return (
      <MovieItemPage />
    )
  } else {
    return (
      <div className='main'>
        <SearchContainer data={data} />
        <MovieList data={data}/>
      </div>
    );
  }
}

export default App;

