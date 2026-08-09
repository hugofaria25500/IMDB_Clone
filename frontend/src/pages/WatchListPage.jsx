/*REACT*/
import { useState } from "react";
import { useEffect } from "react";

/*COMPONENTS*/
import Navbar from "../components/Navbar";
import MediaStatsHeader from "../components/MediaStatsHeader"
import CollectionFilters from '../components/CollectionFilters';
import Footer from "../components/Footer";
import MediaModal from "../components/MediaModal";

/*HOOKS*/
import { useWatchlistMovies } from "../hooks/watchlist/useWatchlistMovies"
import { useWatchlistSeries } from "../hooks/watchlist/useWatchlistSeries"
import { useMovieGenres} from "../hooks/genres/useMovieGenres";
import { useSeriesGenres} from "../hooks/genres/useSeriesGenres";

function WatchlistPage() {

    const [selectedType, setSelectedType] = useState("movies");
    const [selectedMedia, setSelectedMedia] = useState(null);

    const [filters, setFilters] = useState({
        genre: null,
        rating: "all",
        sortBy: "vote_average.desc",
    });

    const [page, setPage] = useState(1);

    const { movies, loading: loadingMovies, fetchWatchlist: fetchWatchlistMovies} = useWatchlistMovies();
    const { series, loading: loadingSeries, fetchWatchlist: fetchWatchlistSeries} = useWatchlistSeries();

    const {genres: movieGenres, loading: movieGenresLoading} = useMovieGenres();
    const {genres: seriesGenres, loading: seriesGenresLoading} = useSeriesGenres();

    const genres = selectedType === "movies" ? movieGenres : seriesGenres;
    const genresLoading = selectedType === "movies" ? movieGenresLoading : seriesGenresLoading;

    const catalog = selectedType === "movies" ? movies : series;

    const loading = selectedType === "movies" ? loadingMovies : loadingSeries;

    const fields = {
        movies: {
            release: "releaseDate",
            title: "title"
        },
        series: {
            release: "firstReleaseDate",
            title: "originalName"
        }
    };

    const filteredCatalog = catalog.filter(item => {

        // Genre
        if (
            filters.genre &&
            !item.genreIds?.includes(filters.genre)
        ) {
            return false;
        }

        // Rating
        if (filters.rating !== "all") {

            const rating = Number(item.rating);

            if (rating < Number(filters.rating)) {
                return false;
            }
        }

        return true;
    });

    const sortedCatalog = [...filteredCatalog].sort((a, b) => {

        switch (filters.sortBy) {

            case "release_date.desc":
                return new Date(b[fields[selectedType].release])
                    - new Date(a[fields[selectedType].release]);

            case "vote_average.desc":
                return Number(b.rating) - Number(a.rating);

            case "title.asc":
                return a[fields[selectedType].title]
                    .localeCompare(b[fields[selectedType].title]);

            default:
                return 0;
        }

    });

    const ITEMS_PER_PAGE = 20;

    const totalPages = Math.ceil(
        sortedCatalog.length / ITEMS_PER_PAGE
    );

    const paginatedCatalog  = sortedCatalog.slice(
        (page - 1) * ITEMS_PER_PAGE,
        page * ITEMS_PER_PAGE
    );

    function openMediaModal(item) {

        setSelectedMedia({
            id: item.id,
            type: selectedType === "movies" ? "movies" : "series"
        });
    }

    function closeMediaModal() {
        setSelectedMedia(null);
    }

    return (
        <div className="bg-black">
            {/* SPACE */}
            <div className="h-[100px] bg-black" />
            {/* NAVBAR */}
            <Navbar />
            {/* FAVORITES STATS HEADER */}
            <MediaStatsHeader type="watchlist" selectedType={selectedType} onTypeChange={setSelectedType} movieCount={movies.length} seriesCount={series.length}/>
            {/* FAVOURITES FILTERS */}
            <CollectionFilters type={selectedType} catalog={paginatedCatalog} filters={filters} setFilters={setFilters} genres={genres} genresLoading={genresLoading} 
            page={page} setPage={setPage} totalPages={totalPages} loading={loading} onOpenModal={openMediaModal} />
            {/* FOOTER */}
            <Footer />
            {/* MEDIA MODAL */}
            {selectedMedia && (
                <MediaModal
                    mediaId={selectedMedia.id}
                    mediaType={selectedMedia.type}
                    onClose={closeMediaModal}
                    onWatchlistChange={selectedMedia.type === "movies" ? fetchWatchlistMovies : fetchWatchlistSeries}
                />
            )}

        </div>
    );
}

export default WatchlistPage;