import { useEffect, useMemo, useState } from "react";
import { getSeriesGenres } from "../../services/seriesService";

export function useSeriesGenres() {

    const [genres, setGenres] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function loadGenres() {

            try {

                const data = await getSeriesGenres();

                setGenres(data.genres);

            } catch (error) {

                console.error("Error loading movie genres:", error);

            } finally {

                setLoading(false);

            }

        }

        loadGenres();

    }, []);

    const genreMap = useMemo(() => {

        return Object.fromEntries(
            genres.map(genre => [genre.id, genre.name])
        );

    }, [genres]);

    return {
        genres,
        genreMap,
        loading
    };

}