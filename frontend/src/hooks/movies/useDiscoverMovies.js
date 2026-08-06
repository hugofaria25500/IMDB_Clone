import { useEffect, useState } from "react";
import { discoverMovies } from "../../services/movieService";

export function useDiscoverMovies(filters, page) {

    const [results, setResults] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function loadMovies() {

            try {
                setLoading(true);

                const data = await discoverMovies(filters, page);

                setResults(data.results);
                setTotalPages(data.totalPages);

            } catch (error) {

                console.error("Error discovering movies:", error);

            } finally {
                setLoading(false);
            }

        }

        loadMovies();

    }, [filters, page]);

    return {
        results,
        totalPages,
        loading
    };
}