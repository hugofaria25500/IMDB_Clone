import { useEffect, useState } from "react";
import { getSeries } from "../services/catalogService";

export function useSeries() {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadSeries() {
      const data = await getSeries();
      setSeries(data);
      setLoading(false);
    }

    loadSeries();
  }, []);

  return { series, loading };
}
