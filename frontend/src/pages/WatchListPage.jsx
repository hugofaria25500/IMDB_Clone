/*REACT*/
import { useState, useEffect } from "react";

/*COMPONENTS*/
import Navbar from "../components/Navbar";
import MediaStatsHeader from "../components/MediaStatsHeader"
import FilterSection from '../components/FilterSection';
import Footer from "../components/Footer";

/*JS*/
import { useSeries } from "../hooks/useSeries";
import { useMovies } from "../hooks/useMovies";

function WatchListPage() {

    const { movies, loadingMovies } = useMovies();
    const { series, loadingSeries } = useSeries();

    const [selectedType, setSelectedType] = useState("movies");
    const [catalog, setCatalog] = useState([]);

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
        </div>
    );
}

export default WatchListPage;