/**/

/*MOVIES*/
import { moviesMock, newMoviesReleases, moviesDetailedMock, favouriteMoviesMock, watchlistMoviesMock } from "../js/data";
/*SERIES*/
import { seriesMock, popularSeries, trendingSeries, newSeriesReleases, randomSerie, seriesDetailedMock, favouriteSeriesMock, watchlistSeriesMock } from "../js/data";

/*API*/
import api from "./api";

/*MOVIES*/
export async function getMovies() {
  return moviesMock;
}

export async function getPopularMovies() {
  const response = await api.get("/movies/popular");
  return response.data.results;
}

export async function getTrendingMovies() {
  const response = await api.get("/movies/trending");
  return response.data.results;
}

export async function searchMovies(query, page = 1) {
    const { data } = await api.get("/movies/search", {
        params: {
            query,
            page
        }
    });
    return data;
}

export async function getNewMoviesReleases() {
  const response = await api.get("/movies/newReleases");
  return response.data.results;
}

export async function getRandomMovie() {
  const response = await api.get("/movies/random");
  return response.data;
}

export async function getMoviesDetails() {
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

export async function getSeriesDetails() {
  return seriesDetailedMock;
}

/*FAVOURITES*/
export async function getFavouriteMovies() {
  return favouriteMoviesMock;
}

export async function getFavouriteSeries() {
  return favouriteSeriesMock;
}

/*WATCHLIST*/
export async function getWatchlistMovies() {
  return watchlistMoviesMock;
}

export async function getWatchlistSeries() {
  return watchlistSeriesMock;
}

/*MEDIA DETAILS*/
export async function getMediaDetails(id) {
  // Try to find real detailed data first
  const moviesDetails = await getMoviesDetails();
  const seriesDetails = await getSeriesDetails();
  const found = [...moviesDetails, ...seriesDetails].find(item => item.id === id);
  if (found) return found;

  // Generic fallback for items not yet in detailed mocks
  return {
    id: id,
    title: null,
    year: null,
    views: null,
    seasons: null,
    runtime: null,
    genres: [],
    language: null,
    rating: null,
    ageRating: null,
    overview: null,
    poster: null,
    backdrop: null,
    trailer: null,
    cast: [],
    director: null,
    tags: [],
    recommendations: []
  };
}

export async function getMediaDetails2(id) {
  const moviesDetails = await getMoviesDetails();
  const seriesDetails = await getSeriesDetails();
  const media =  [...moviesDetails, ...seriesDetails].find(item => item.id === id); 
  return media;
}