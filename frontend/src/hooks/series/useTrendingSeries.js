import { useEffect, useState } from "react";
import { getTrendingSeries } from "../../services/seriesService";

export function useTrendingSeries() {
  const [trendingSeries, setTrendingSeries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTrendingSeries() {
      const data = await getTrendingSeries();
      setTrendingMovies(data);
      setLoading(false);
    }

    loadTrendingSeries();
  }, []);

  return { trendingSeries, loading };
}