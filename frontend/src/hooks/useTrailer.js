import { useEffect, useState } from "react";
import { getTrailer } from "../services/movieService";

export function useTrailer(mediaId, mediaType) {

    const [trailer, setTrailer] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        if (!mediaId && !mediaType) return;

        async function loadTrailer() {

            try {

                setLoading(true);
                const data = await getTrailer(mediaId, mediaType);
                setTrailer(data);

            } catch (error) {
                console.error("Error loading trailer:", error);
            } finally {
                setLoading(false);
            }
        }
        loadTrailer();
    }, [mediaId, mediaType]);

    return {
        trailer,
        loading
    };

}