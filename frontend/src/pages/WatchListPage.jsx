/*REACT*/
import { useState, useEffect } from "react";

/*COMPONENTS*/
import Navbar from "../components/Navbar";
import MediaStatsHeader from "../components/MediaStatsHeader"
import FilterSection from '../components/FilterSection';
import Footer from "../components/Footer";
import MediaModal from "../components/MediaModal";

/*JS*/
import { useWatchlistMovies } from "../hooks/useWatchlistMovies";
import { useWatchlistSeries } from "../hooks/useWatchlistSeries";

function WatchListPage() {

    const { movies, loading: loadingMovies } = useWatchlistMovies();
    const { series, loading: loadingSeries } = useWatchlistSeries();

    const [selectedType, setSelectedType] = useState("movies");
    const [catalog, setCatalog] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        setCatalog(selectedType === "movies" ? movies : series);
    }, [selectedType, movies, series]);

    const loading = selectedType === "movies" ? loadingMovies : loadingSeries;

    function openModal(item) {
        setSelectedItem(item);
    }

    function closeModal() {
        setSelectedItem(null);
    }

    return (
        <div className="bg-black">
            {/* SPACE */}
            <div className="h-[100px] bg-black"></div>
            {/* NAVBAR */}
            <Navbar />
            {/* WATCHLIST HEADER */}
            <MediaStatsHeader
                type={"watchlist"}
                selectedType={selectedType}
                onTypeChange={setSelectedType}
                movieCount={movies.length}
                seriesCount={series.length}
            />
            {/* MOVIE FILTERS */}
            <FilterSection catalog={catalog} onOpenModal={openModal} loading={loading} label={selectedType} />
            {/* FOOTER */}
            <Footer />
            {/* MODAL */}
            {selectedItem && (
                <MediaModal
                    item={selectedItem}
                    onClose={closeModal}
                />
            )}
        </div>
    );
}

export default WatchListPage;