import { useEffect, useState } from "react";
import { getPopularSeries } from "../../services/seriesService";

export function usePopularSeries() {
  const [popularSeries, setPopularSeries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPopularSeries() {
      const data = await usePopularSeries();
      setPopularSeries(data);
      setLoading(false);
    }

    loadPopularSeries();
  }, []);

  return { popularSeries, loading };
}