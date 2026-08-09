/*API*/
import api from "./api";

/*MOVIES*/
export async function addMovieWatchlist(movieId) {
    const { data } = await api.post(`/watchlist/movies/${movieId}`);
    return data;
}

export async function removeMovieWatchlist(movieId) {
    const { data } = await api.delete(`/watchlist/movies/${movieId}`);
    return data;
}

export async function getWatchlistMovies() {
    const { data } = await api.get("/watchlist/movies");
    return data;
}

export async function isWatchlistMovies(movieId) {
    const { data } = await api.get(`/watchlist/movies/${movieId}`);
    return data.watchlist;
}

/*SERIES*/

export async function addSeriesWatchlist(seriesId) {
    const { data } = await api.post(`/watchlist/series/${seriesId}`);
    return data;
}

export async function removeSeriesWatchlist(seriesId) {
    const { data } = await api.delete(`/watchlist/series/${seriesId}`);
    return data;
}

export async function getWatchlistSeries() {
    const { data } = await api.get("/watchlist/series");
    return data;
}

export async function isWatchlistSeries(seriesId) {
    const { data } = await api.get(`/watchlist/series/${seriesId}`);
    return data.watchlist;
}