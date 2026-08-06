import { useEffect, useState } from "react";

import { getMovieDetails } from "../services/movieService";

export function useMovieDetails(movieId) {

    const [details, setDetails] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        if (!movieId) return;

        async function loadDetails() {

            try {
                setLoading(true);
                const data = await getMovieDetails(movieId);
                setDetails(data);
            } catch (error) {
                console.error("Error loading movie details:", error);
            } finally {
                setLoading(false);
            }

        }

        loadDetails();

    }, [movieId]);

    return {
        details,
        loading
    };

}