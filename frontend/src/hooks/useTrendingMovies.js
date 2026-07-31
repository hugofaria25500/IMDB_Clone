import { useEffect, useState } from "react";
import { getTrendingMovies } from "../services/catalogService";

export function useTrendingMovies() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTrendingMovies() {
      const data = await getTrendingMovies();
      setTrendingMovies(data);
      setLoading(false);
    }

    loadTrendingMovies();
  }, []);

  return { trendingMovies, loading };
}