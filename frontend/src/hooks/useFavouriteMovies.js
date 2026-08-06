import { useEffect, useState } from "react";
import { getFavouriteMovies } from "../services/movieService";

export function useFavouriteMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const data = await getFavouriteMovies();
      setMovies(data);
      setLoading(false);
    }

    load();
  }, []);

  return { movies, loading };
}
