import { useEffect, useState } from "react";
import { getRandomMovie} from "../services/catalogService";

export function useRandomMovie() {
  const [randomMovie, setRandomMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadRandomMovie() {
      const data = await getRandomMovie();
      setRandomMovie(data);
      setLoading(false);
    }

    loadRandomMovie();
  }, []);

  return { randomMovie, loading };
}