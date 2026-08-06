import { useEffect, useState } from "react";
import { getFavouriteSeries } from "../services/movieService";

export function useFavouriteSeries() {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const data = await getFavouriteSeries();
      setSeries(data);
      setLoading(false);
    }

    load();
  }, []);

  return { series, loading };
}
