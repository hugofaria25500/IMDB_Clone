import { useEffect, useState } from "react";

import { getMediaDetails } from "../../services/mediaService";

export function useMediaDetails(movieId, mediaType) {

    const [details, setDetails] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        if (!movieId) return;

        async function loadDetails() {

            try {
                setLoading(true);
                const data = await getMediaDetails(movieId, mediaType);
                setDetails(data);
            } catch (error) {
                console.error("Error loading movie details:", error);
            } finally {
                setLoading(false);
            }

        }

        loadDetails();

    }, [movieId, mediaType]);

    return {
        details,
        loading
    };

}