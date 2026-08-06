import { useEffect, useState } from "react";

import { getSeriesDetails } from "../../services/seriesService";

export function useSeriesDetails(seriesId) {

    const [details, setDetails] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        if (!seriesId) return;

        async function loadDetails() {

            try {
                setLoading(true);
                const data = await getSeriesDetails(seriesId);
                setDetails(data);
            } catch (error) {
                console.error("Error loading movie details:", error);
            } finally {
                setLoading(false);
            }

        }

        loadDetails();

    }, [seriesId]);

    return {
        details,
        loading
    };

}