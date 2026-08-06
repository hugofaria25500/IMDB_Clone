import { useEffect, useState } from "react";
import { getNewSeriesReleases } from "../../services/seriesService";

export function useNewSeriesReleases() {
  const [newMoviesReleases, setNewSeriesReleases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadNewSeriesReleases() {
      const data = await getNewSeriesReleases();
      setNewSeriesReleases(data);
      setLoading(false);
    }

    loadNewSeriesReleases();
  }, []);

  return { newMoviesReleases, loading };
}