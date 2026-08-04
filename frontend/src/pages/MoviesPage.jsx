/*REACT*/
import { useState } from "react";
import { useEffect } from "react";

/*COMPONENTS*/
import Navbar from "../components/Navbar";
import SingleItemCarousel from "../components/SingleItemCarousel";
import SearchSection from "../components/SearchSection"
import DiscoverSection from '../components/DiscoverSection';
import MultiItemCarousel from '../components/MultiItemCarousel';
import ShuffleSection from "../components/ShuffleSection";
import Footer from "../components/Footer";
import TrailerModal from "../components/TrailerModal";
import MediaModal from "../components/MediaModal";

/*JS*/
import { useNewMoviesReleases } from "../hooks/useNewMoviesReleases";
import { useSearchMovies } from "../hooks/useSearchMovies";
import { useDiscoverMovies } from "../hooks/useDiscoverMovies";
import { usePopularMovies } from "../hooks/usePopularMovies";
import { useTrendingMovies } from "../hooks/useTrendingMovies";
import { useRandomMovie } from "../hooks/useRandomMovie";

function MoviesPage() {

    const [searchQuery, setSearchQuery] = useState("");
    const [searchPage, setSearchPage] = useState(1);

    const [discoverPage, setDiscoverPage] = useState(1);

    const [filters, setFilters] = useState({
        genre: null,
        yearFrom: "",
        yearTo: "",
        rating: "all",
        sortBy: "popularity.desc",
    });

    const { newMoviesReleases, newMoviesReleasesLoading } = useNewMoviesReleases();
    const { results: searchMovies, totalPages: searchTotalPages, loading: searchLoading} = useSearchMovies(searchQuery, searchPage);
    const { results: discoverMovies,  totalPages: discoverTotalPages, loading: discoverLoading } = useDiscoverMovies(filters, discoverPage);
    const { popularMovies, popularMoviesLoading } = usePopularMovies();
    const { trendingMovies, trendingMoviesLoading } = useTrendingMovies();
    const { randomMovie, loading:randomMovieLoading, refreshRandomMovie } = useRandomMovie();

    const [selectedTrailer, setSelectedTrailer] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);

    function openTrailerModal(item) {
        setSelectedTrailer({
            id: item.id,
            type: "movies"
        });
    }

    function closeTrailerModal() {
        setSelectedTrailer(null);
    }

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
            <SingleItemCarousel onOpenTrailerModal={openTrailerModal} catalog={newMoviesReleases} loading={newMoviesReleasesLoading} />
            {/* MOVIE SEARCH */}
            <SearchSection label="movies" query={searchQuery} setQuery={setSearchQuery} page={searchPage} setPage={setSearchPage} 
            results={searchMovies} totalPages={searchTotalPages} loading={searchLoading} onOpenModal={openModal}/>
            {/* MOVIE FILTERS */}
            <DiscoverSection label="movies" filters={filters} setFilters={setFilters} page={discoverPage} setPage={setDiscoverPage} 
            results={discoverMovies} totalPages={discoverTotalPages} loading={discoverLoading} onOpenModal={openModal}/>
            {/* POPULAR MOVIES CAROUSEL */}
            <MultiItemCarousel title="Popular Movies" catalog={popularMovies} onOpenModal={openModal} loading={popularMoviesLoading} />
            {/* TRENDING MOVIES CAROUSEL */}
            <MultiItemCarousel title="Trending Movies" catalog={trendingMovies} onOpenModal={openModal} loading={trendingMoviesLoading} />
            {/* SHUFFLE SECTION */}
            <ShuffleSection type={"Movie"} item={randomMovie} loading={randomMovieLoading} onShuffle={refreshRandomMovie} onOpenModal={openModal}/>
            {/* FOOTER */}
            <Footer />
            {/* TRAILER MODAL */}
            {selectedTrailer && (
                <TrailerModal
                    mediaId={selectedTrailer.id}
                    mediaType={selectedTrailer.type}
                    onClose={closeTrailerModal}
                />
            )}
            {/* MEDIA MODAL */}
            {selectedItem && (
                <MediaModal
                    item={selectedItem}
                    onClose={closeModal}
                />
            )}
        </div>
    );
}   

export default MoviesPage;