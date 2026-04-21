import { moviesMock, seriesMock } from "../js/data";

export async function getMovies() {
  return moviesMock;
}

export async function getSeries() {
  return seriesMock;
}