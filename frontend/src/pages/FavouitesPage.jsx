/*REACT*/
import { useState } from "react";
import { useEffect } from "react";

/*COMPONENTS*/
import Navbar from "../components/Navbar";
import MediaStatsHeader from "../components/MediaStatsHeader"
import FilterSection from '../components/FilterSection';
import Footer from "../components/Footer";

/*JS*/
import { useSeries } from "../hooks/useSeries";
import { useMovies } from "../hooks/useMovies";

function FavouritesPage() {
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
            <div className="h-[100px] bg-black" />
            {/* NAVBAR */}
            <Navbar />
            {/* FAVOURITES HEADER */}
            <MediaStatsHeader type={"favourites"}/>
            {/* FILTER SECTION */}
            <FilterSection catalog={catalog} loading={loading} onOpenModal={openModal} label={selectedType} />
            {/* FOOTER */}
            <Footer />
        </div>
    );
}

export default FavouritesPage;