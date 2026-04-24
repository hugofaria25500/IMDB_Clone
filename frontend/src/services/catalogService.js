/*MOVIES*/
import { moviesMock, popularMovies, trendingMovies, newMoviesReleases, randomMovie, moviesDetailedMock} from "../js/data";
/*SERIES*/
import { seriesMock, popularSeries, trendingSeries, newSeriesReleases, randomSerie, seriesDetailedMock} from "../js/data";

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

export async function getMediaDetails() {
  return moviesDetailedMock;
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

export async function getSerieDetails() {
  return seriesDetailedMock;
}

/*MEDIA DETAILS*/
export async function getMediaDetails(id) {
  const moviesDetails = await getMediaDetails();
  const seriesDetails = await getSerieDetails();
  let randomPosition = Math.floor(Math.random() * (moviesDetails.length + seriesDetails.length));
  return [...moviesDetails, ...seriesDetails][randomPosition]; 
}
