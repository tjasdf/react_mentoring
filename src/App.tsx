import {MovieList} from './features/MovieList';
import {SearchContainer} from './features/SearchContainer';
import { data } from './mocks/data';
import { MovieItemPage } from './features/MovieItemPage';
import styles from './App.module.scss';


function App() {
  return (
    <div className={styles.root}>
      <SearchContainer movieLength={data.length} />
      <MovieList movies={data} />
      {/*<MovieItemPage movie={data[0]}/>*/}
    </div>
  );
}


export default App;

