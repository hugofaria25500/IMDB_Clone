/*API*/
import api from "./api";

/*MEDIDA*/
export async function getTrailer(mediaId, mediaType) {
  const { data } = await api.get(`/${mediaType}/${mediaId}/trailer`);
  return data;
}

export async function getMediaDetails(movieId, mediaType) {
    const { data } = await api.get(`/${mediaType}/${movieId}/details`);
    return data;
}