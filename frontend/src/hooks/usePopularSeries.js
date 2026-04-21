import { useEffect, useState } from "react";
import { getPopularSeries } from "../services/catalogService";

export function usePopularSeries() {
  const [popularSeries, setPopularSeries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPopularSeries() {
      const data = await getPopularSeries();
      setPopularSeries(data);
      setLoading(false);
    }

    loadPopularSeries();
  }, []);

  return { popularSeries, loading };
}