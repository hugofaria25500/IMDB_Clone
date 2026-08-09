import { useEffect, useState } from "react";
import { getFavoriteMovies } from "../../services/favoriteService";

export function useFavoriteMovies() {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function fetchFavorites() {

            try {

                setLoading(true);

                const data = await getFavoriteMovies();

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

        fetchFavorites();

    }, []);

    return {
        movies,
        loading
    };
}