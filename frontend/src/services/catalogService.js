/*MOVIES*/
import { moviesMock, popularMovies, trendingMovies, newMoviesReleases, randomMovie} from "../js/data";
/*SERIES*/
import { seriesMock, popularSeries, trendingSeries, newSeriesReleases, randomSerie} from "../js/data";

/*MOVIES*/
export async function getMovies() {
  return moviesMock;
}

export async function getPopularMovies() {
  return popularMovies;
}

export async function getTrendingMovies() {
  return trendingMovies;
}

export async function getNewMoviesReleases() {
  return newMoviesReleases;
}

export async function getRandomMovie() {
  return getMovies().then(movies => {
    const randomIndex = Math.floor(Math.random() * movies.length);
    return movies[randomIndex];
  });
}

export async function getMediaDetails(id) {
  const movies = await getMovies();
  const series = await getSeries();
  return [...movies, ...series].find(item => item.id === id);
}

/*SERIES*/
export async function getSeries() {
  return seriesMock;
}

export async function getPopularSeries() {
  return popularSeries;
}

export async function getTrendingSeries() {
  return trendingSeries;
}

export async function getNewSeriesReleases() {
  return newSeriesReleases;
}

export async function getRandomSerie() {
  return getSeries().then(series => {
    const randomIndex = Math.floor(Math.random() * series.length);
    return series[randomIndex];
  });
}