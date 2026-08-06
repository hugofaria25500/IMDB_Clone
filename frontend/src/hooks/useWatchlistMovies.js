import { useEffect, useState } from "react";
import { getWatchlistMovies } from "../services/movieService";

export function useWatchlistMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const data = await getWatchlistMovies();
      setMovies(data);
      setLoading(false);
    }

    load();
  }, []);

  return { movies, loading };
}
