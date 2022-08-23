import {MovieList} from './features/MovieList';
import {SearchContainer} from './features/SearchContainer';
import { MovieItemPage } from './features/MovieItemPage';
import { AppProvider } from './context';

import styles from './App.module.scss';



function App() {
  return (
    <AppProvider>
      <div className={styles.root}>
        <SearchContainer/>
        <MovieList/>
        {/*<MovieItemPage/>*/}
      </div>
    </AppProvider>
  );
}


export default App;

