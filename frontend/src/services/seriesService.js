/*API*/
import api from "./api";

/*SERIES*/
export async function getPopularSeries() {
  const response = await api.get("/series/popular");
  return response.data.results;
}

export async function getTrendingSeries() {
  const response = await api.get("/series/trending");
  return response.data.results;
}

export async function searchSeries(query, page = 1) {
    const { data } = await api.get("/series/search", {
        params: {
            query,
            page
        }
    });
    return data;
}

export async function getNewSeriesReleases() {
  const response = await api.get("/series/newReleases");
  return response.data.results;
}

export async function getRandomSeries() {
  const response = await api.get("/series/random");
  return response.data;
}

export async function getSeriesGenres() {
  const response = await api.get("/genres/series");  
  return response.data;  
}

export async function discoverSeries(filters, page) {

    const { data } = await api.get("/series/discover", {
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

export async function getSeriesDetails(movieId) {
    const { data } = await api.get(`/series/${movieId}/details`);
    return data;
}
