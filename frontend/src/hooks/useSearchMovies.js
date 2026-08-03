import { useEffect, useState } from "react";
import { searchMovies } from "../services/catalogService";

export function useSearchMovies(query, page) {

    const [results, setResults] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        if (!query.trim()) {
            setResults([]);
            setTotalPages(1);
            return;
        }

        async function loadMovies() {

            try {

                setLoading(true);

                const data = await searchMovies(query, page);

                setResults(data.results);
                setTotalPages(data.results.length === 0? 0: data.totalPages);

            } catch (error) {
                console.error("Error searching movies:", error);
                setResults([]);
                setTotalPages(0);
            } finally {
                setLoading(false);
            }
        }

        loadMovies();

    }, [query, page]);

    return {
        results,
        totalPages,
        loading
    };
}