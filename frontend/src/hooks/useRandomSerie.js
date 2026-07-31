import { useEffect, useState } from "react";
import { getRandomSerie} from "../services/catalogService";

export function useRandomSerie() {
  const [randomSerie, setRandomSerie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadRandomSerie() {
      const data = await getRandomSerie();
      setRandomSerie(data);
      setLoading(false);
    }

    loadRandomSerie();
  }, []);

  return { randomSerie, loading };
}