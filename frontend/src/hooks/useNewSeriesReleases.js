import { useEffect, useState } from "react";
import { getNewSeriesReleases } from "../services/catalogService";

export function useNewSeriesReleases() {
  const [newSeriesReleases, setNewSeriesReleases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadNewSeriesReleases() {
      const data = await getNewSeriesReleases();
      setNewSeriesReleases(data);
      setLoading(false);
    }

    loadNewSeriesReleases();
  }, []);

  return { newSeriesReleases, loading };
}