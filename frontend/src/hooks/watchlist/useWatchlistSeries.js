import { useEffect, useState } from "react";
import { getWatchlistSeries } from "../../services/watchlistService";

export function useWatchlistSeries() {

    const [series, setSeries] = useState([]);
    const [loading, setLoading] = useState(true);

    async function fetchWatchlist() {
    
            try {
    
                setLoading(true);
    
                const data = await getWatchlistSeries();
    
                setSeries(data);
    
            } catch (error) {
    
                console.error(
                    "Error fetching watchlist series:",
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