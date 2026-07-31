import { useEffect, useState } from "react";
import { getPopularMovies } from "../services/catalogService";

export function usePopularMovies() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPopularMovies() {
      const data = await getPopularMovies();
      setPopularMovies(data);
      setLoading(false);
    }

    loadPopularMovies();
  }, []);

  return { popularMovies, loading };
}