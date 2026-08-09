import { useEffect, useState } from "react";
import { getWatchlistMovies } from "../../services/watchlistService";

export function useWatchlistMovies() {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    async function fetchWatchlist() {

        try {

            setLoading(true);

            const data = await getWatchlistMovies();
            
            setMovies(data);

        } catch (error) {

            console.error(
                "Error fetching watchlist movies:",
                error
            );

        } finally {

            setLoading(false);
        }
    }

    useEffect(() => {
        fetchWatchlist();
    }, []);

    return {
        movies,
        loading,
        fetchWatchlist
    };
}