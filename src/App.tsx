import {MovieList} from './features/MovieList';
import {SearchContainer} from './features/SearchContainer';
import { MovieItemPage } from './features/MovieItemPage';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import styles from './App.module.scss';


function App() {
  return (
    <Provider store={store}>
      <div className={styles.root}>
        <SearchContainer/>
        <MovieList/>
        {/*<MovieItemPage/>*/}
      </div>
    </Provider>
  );
}


export default App;

