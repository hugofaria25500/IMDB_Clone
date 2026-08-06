/*SERIES*/
import { seriesMock, popularSeries, trendingSeries, newSeriesReleases, randomSerie, seriesDetailedMock, favouriteSeriesMock, watchlistSeriesMock } from "../js/data";

/*API*/
import api from "./api";

/*MOVIES*/
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

export async function getMovieGenres() {
  const response = await api.get("/genres/movies");  
  return response.data;  
}

export async function discoverMovies(filters, page) {

    const { data } = await api.get("/movies/discover", {
        params: {
            page,
            genre: filters.genre || undefined,
            yearFrom: filters.yearFrom || undefined,
            yearTo: filters.yearTo || undefined,
            rating: filters.rating !== "all" ? filters.rating : undefined,
            sortBy: filters.sortBy || undefined,
        },
    });

    return data;
}

export async function getTrailer(mediaId, mediaType) {
  const { data } = await api.get(`/${mediaType}/${mediaId}/trailer`);
  return data;
}

export async function getMovieDetails(movieId) {
    const { data } = await api.get(`/movies/${movieId}/details`);
    return data;
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