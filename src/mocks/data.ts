import { TMovieItem } from "../types";

fetch('https://reactjs-cdp.herokuapp.com/movies')
  .then(response => response.json())
  .then(result =>data = result.data)
export let data: Array<TMovieItem>;
