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
  return randomMovie;
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
  return randomSerie;
}