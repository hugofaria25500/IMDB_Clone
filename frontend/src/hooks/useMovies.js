import { useEffect, useState } from "react";
import { getMovies } from "../services/catalogService";

export function useMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMovies() {
      const data = await getMovies();
      setMovies(data);
      setLoading(false);
    }

    loadMovies();
  }, []);

  return { movies, loading };
}