import { useEffect, useState } from "react";
import { getRandomSeries} from "../../services/seriesService";

export function useRandomSeries() {

    const [randomSeries, setRandomSeries] = useState(null);
    const [loading, setLoading] = useState(false);

    async function refreshRandomSeries() {
        try {
            setLoading(true);
            const movie = await getRandomSeries();
            setRandomSeries(movie);
        } finally {
            setLoading(false);
        }s
    }

    useEffect(() => {
        refreshRandomSeries();
    }, []);

    return {
        randomSeries,
        loading,
        refreshRandomSeries
    };
}