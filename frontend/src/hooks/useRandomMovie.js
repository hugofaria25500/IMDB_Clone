import { useEffect, useState } from "react";
import { getRandomMovie} from "../services/movieService";

export function useRandomMovie() {

    const [randomMovie, setRandomMovie] = useState(null);
    const [loading, setLoading] = useState(false);

    async function refreshRandomMovie() {
        try {
            setLoading(true);
            const movie = await getRandomMovie();
            setRandomMovie(movie);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        refreshRandomMovie();
    }, []);

    return {
        randomMovie,
        loading,
        refreshRandomMovie
    };
}