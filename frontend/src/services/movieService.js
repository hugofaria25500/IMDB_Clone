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