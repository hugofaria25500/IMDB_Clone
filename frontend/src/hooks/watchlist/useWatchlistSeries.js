import { useEffect, useState } from "react";
import { getFavoriteSeries } from "../../services/favoriteService";

export function useWatchlistSeries() {

    const [series, setSeries] = useState([]);
    const [loading, setLoading] = useState(true);

    async function fetchWatchlist() {
    
            try {
    
                setLoading(true);
    
                const data = await getFavoriteSeries();

                console.log("New favorites:", data);
    
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
    
        useEffect(() => {
            fetchWatchlist();
        }, []);
    
        return {
            series,
            loading,
            fetchWatchlist
        };
    }