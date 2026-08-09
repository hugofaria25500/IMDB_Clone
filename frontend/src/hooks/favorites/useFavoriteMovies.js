import { useEffect, useState } from "react";
import { getFavoriteMovies } from "../../services/favoriteService";

export function useFavoriteMovies() {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    async function fetchFavorites() {

        try {

            setLoading(true);

            const data = await getFavoriteMovies();

            console.log("New favorites1:", data);

            setMovies(data);

        } catch (error) {

            console.error(
                "Error fetching favorite movies:",
                error
            );

        } finally {

            setLoading(false);
        }
    }

    useEffect(() => {
        fetchFavorites();
    }, []);

    return {
        movies,
        loading,
        fetchFavorites
    };
}