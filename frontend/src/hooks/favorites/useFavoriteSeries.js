import { useEffect, useState } from "react";
import { getFavoriteSeries } from "../../services/favoriteService";

export function useFavoriteSeries() {

    const [series, setSeries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function fetchFavorites() {

            try {

                setLoading(true);

                const data = await getFavoriteSeries();

                setSeries(data);

            } catch (error) {

                console.error(
                    "Error fetching favorite series:",
                    error
                );

            } finally {

                setLoading(false);
            }
        }

        fetchFavorites();

    }, []);

    return {
        series,
        loading
    };
}