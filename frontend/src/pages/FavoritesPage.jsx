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
import { useFavoriteMovies } from "../hooks/favorites/useFavoriteMovies"
import { useFavoriteSeries } from "../hooks/favorites/useFavoriteSeries"
import { useMovieGenres} from "../hooks/genres/useMovieGenres";
import { useSeriesGenres} from "../hooks/genres/useSeriesGenres";

function FavoritesPage() {

    const [selectedType, setSelectedType] = useState("movies");
    const [selectedMedia, setSelectedMedia] = useState(null);

    const [filters, setFilters] = useState({
        genre: null,
        rating: "all",
        sortBy: "rating.desc",
    });

    const [page, setPage] = useState(1);

    const { movies, loading: loadingMovies, fetchFavorites: fetchFavoriteMovies} = useFavoriteMovies();
    const { series, loading: loadingSeries, fetchFavorites: fetchFavoriteSeries} = useFavoriteSeries();

    const {genres: movieGenres, loading: movieGenresLoading} = useMovieGenres();
    const {genres: seriesGenres, loading: seriesGenresLoading} = useSeriesGenres();

    const genres = selectedType === "movies" ? movieGenres : seriesGenres;
    const genresLoading = selectedType === "movies" ? movieGenresLoading : seriesGenresLoading;

    const catalog = selectedType === "movies" ? movies : series;

    const loading = selectedType === "movies" ? loadingMovies : loadingSeries;

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

            case "rating.desc":
                return Number(b.rating) - Number(a.rating);

            case "rating.asc":
                return Number(a.rating) - Number(b.rating);

            case "release.desc":
                return new Date(b.releaseDate) - new Date(a.releaseDate);

            case "release.asc":
                return new Date(a.releaseDate) - new Date(b.releaseDate);

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
            <MediaStatsHeader type="favourites" selectedType={selectedType} onTypeChange={setSelectedType} movieCount={movies.length} seriesCount={series.length}/>
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
                    onFavoriteChange={selectedMedia.type === "movies" ? fetchFavoriteMovies : fetchFavoriteSeries}
                />
            )}

        </div>
    );
}

export default FavoritesPage;