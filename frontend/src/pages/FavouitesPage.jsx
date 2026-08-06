/*REACT*/
import { useState } from "react";
import { useEffect } from "react";

/*COMPONENTS*/
import Navbar from "../components/Navbar";
import MediaStatsHeader from "../components/MediaStatsHeader"
import DiscoverSection from '../components/DiscoverSection';
import Footer from "../components/Footer";
import MediaModal from "../components/MediaModal";

function FavouritesPage() {
    const { movies, loading: loadingMovies } = null;
    const { series, loading: loadingSeries } = null;

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
            <div className="h-[100px] bg-black" />
            {/* NAVBAR */}
            <Navbar />
            {/* FAVOURITES HEADER */}
            <MediaStatsHeader
                type={"favourites"}
                selectedType={selectedType}
                onTypeChange={setSelectedType}
                movieCount={movies.length}
                seriesCount={series.length}
            />
            {/* FILTER SECTION */}
            <DiscoverSection catalog={catalog} loading={loading} onOpenModal={openModal} label={selectedType} />
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

export default FavouritesPage;