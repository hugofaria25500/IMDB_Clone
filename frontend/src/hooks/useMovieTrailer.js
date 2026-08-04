import { useEffect, useState } from "react";
import { getMovieTrailer } from "../services/catalogService";

export function useMovieTrailer(movieId) {

    const [trailer, setTrailer] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        if (!movieId) return;

        async function loadTrailer() {

            try {

                setLoading(true);

                const data = await getMovieTrailer(movieId);

                setTrailer(data);

            } catch (error) {

                console.error("Error loading trailer:", error);

            } finally {

                setLoading(false);

            }

        }

        loadTrailer();

    }, [movieId]);

    return {
        trailer,
        loading
    };

}