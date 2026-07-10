import { useEffect, useState } from "react";
import { getWatchlistSeries } from "../services/catalogService";

export function useWatchlistSeries() {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const data = await getWatchlistSeries();
      setSeries(data);
      setLoading(false);
    }

    load();
  }, []);

  return { series, loading };
}
