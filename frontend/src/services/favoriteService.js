/*API*/
import api from "./api";

/*MOVIES*/
export async function addMovieFavorite(movieId) {
    const { data } = await api.post(`/favorites/movies/${movieId}`);
    return data;
}

export async function removeMovieFavorite(movieId) {
    const { data } = await api.delete(`/favorites/movies/${movieId}`);
    return data;
}

export async function getFavoriteMovies() {
    const { data } = await api.get("/favorites/movies");
    return data;
}

export async function isMovieFavorite(movieId) {
    const { data } = await api.get(`/favorites/movies/${movieId}`);
    return data.favorite;
}

/*SERIES*/

export async function addSeriesFavorite(seriesId) {
    const { data } = await api.post(`/favorites/series/${seriesId}`);
    return data;
}

export async function removeSeriesFavorite(seriesId) {
    const { data } = await api.delete(`/favorites/series/${seriesId}`);
    return data;
}

export async function getFavoriteSeries() {
    const { data } = await api.get("/favorites/series");
    return data;
}

export async function isSeriesFavorite(seriesId) {
    const { data } = await api.get(`/favorites/series/${seriesId}`);
    return data.favorite;
}