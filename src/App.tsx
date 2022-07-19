import {MovieList} from './features/MovieList';
import {SearchContainer} from './features/SearchContainer';
import { data } from './mocks/data';
import { MovieItemPage } from './features/MovieItemPage';
import styles from './App.module.scss';


function App() {
  return (
    <div className={styles.root}>
      <SearchContainer data={data} />
      <MovieList data={data} />
      <MovieItemPage data={data}/>
    </div>
  );
}


export default App;

