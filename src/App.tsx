import {MovieList} from './features/MovieList';
import {SearchContainer} from './features/SearchContainer';
import { dataContext } from './context/dataContext';
import { data } from './mocks/data';
import { MovieItemPage } from './features/MovieItemPage';
import styles from './App.module.scss';


const {Provider} = dataContext;

function App() {
  return (
    <Provider value={data}>
      <div className={styles.root}>
        <SearchContainer/>
        <MovieList/>
        {/*<MovieItemPage/>*/}
      </div>
    </Provider>
  );
}


export default App;

