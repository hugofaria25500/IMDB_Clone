import { useEffect, useState } from "react";
import { discoverSeries } from "../../services/seriesService";

export function useDiscoverSeries(filters, page) {

    const [results, setResults] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function loadSeries() {

            try {
                setLoading(true);

                const data = await discoverSeries(filters, page);

                setResults(data.results);
                setTotalPages(data.totalPages);

            } catch (error) {

                console.error("Error discovering series:", error);

            } finally {
                setLoading(false);
            }

        }

        loadSeries();

    }, [filters, page]);

    return {
        results,
        totalPages,
        loading
    };
}