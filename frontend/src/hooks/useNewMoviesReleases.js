import { useEffect, useState } from "react";
import { getNewMoviesReleases } from "../services/catalogService";

export function useNewMoviesReleases() {
  const [newMoviesReleases, setNewMoviesReleases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadNewMoviesReleases() {
      const data = await getNewMoviesReleases();
      setNewMoviesReleases(data);
      setLoading(false);
    }

    loadNewMoviesReleases();
  }, []);

  return { newMoviesReleases, loading };
}