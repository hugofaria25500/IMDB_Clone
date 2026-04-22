/*REACT*/
import { useState } from "react";
import { useEffect } from "react";

/*COMPONENTS*/
import Navbar from "../components/Navbar";
import FilterSection from '../components/FilterSection';
import SingleItemCarousel from "../components/SingleItemCarousel";
import MultiItemCarousel from '../components/MultiItemCarousel';
import ShuffleSection from "../components/ShuffleSection";
import Footer from "../components/Footer";
import MediaModal from "../components/MediaModal";

/*JS*/
import { useMovies } from "../hooks/useMovies";
import { usePopularMovies } from "../hooks/usePopularMovies";
import { useTrendingMovies } from "../hooks/useTrendingMovies";
import { useNewMoviesReleases } from "../hooks/useNewMoviesReleases";
import { useRandomMovie } from "../hooks/useRandomMovie";

function MoviesPage() {
    const { movies, loading } = useMovies();
    const { popularMovies, popularMoviesLoading } = usePopularMovies();
    const { trendingMovies, trendingMoviesLoading } = useTrendingMovies();
    const { newMoviesReleases, newMoviesReleasesLoading } = useNewMoviesReleases();
    const { randomMovie, randomMovieLoading } = useRandomMovie();

    const [selectedItem, setSelectedItem] = useState(null);

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
            {/* MOVIE CAROUSELS */}
            <SingleItemCarousel movies={newMoviesReleases} loading={newMoviesReleasesLoading} />
            {/* MOVIE FILTERS */}
            <FilterSection catalog={movies} loading={loading} />
            {/* POPULAR MOVIES CAROUSEL */}
            <MultiItemCarousel title="Popular Movies" catalog={popularMovies} loading={popularMoviesLoading} />
            {/* TRENDING MOVIES CAROUSEL */}
            <MultiItemCarousel title="Trending Movies" catalog={trendingMovies} loading={trendingMoviesLoading} />
            {/* SHUFFLE SECTION */}
            <ShuffleSection type={"Movie"} onOpenModal={openModal} loading={loading} />
            {/* FOOTER */}
            <Footer />
            {/* MODAL */}
            {selectedItem && (
                console.log("Selected Item:", selectedItem), // Log the selected item for debugging
                <MediaModal
                    item={selectedItem}
                    onClose={closeModal}
                />
            )}
        </div>
    );
}   

export default MoviesPage;