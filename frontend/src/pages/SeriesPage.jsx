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
import { useNewSeriesReleases } from "../hooks/series/useNewSeriesReleases";
import { useSearchSeries } from "../hooks/series/useSearchSeries";
import { useDiscoverSeries } from "../hooks/series/useDiscoverSeries";
import { useSeriesGenres} from "../hooks/genres/useSeriesGenres";
import { usePopularSeries } from "../hooks/series/usePopularSeries";
import { useTrendingSeries } from "../hooks/series/useTrendingSeries";
import { useRandomSeries } from "../hooks/series/useRandomSeries";

function SeriesPage() {

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

    const { newSeriesReleases, newSeriesReleasesLoading } = useNewSeriesReleases();
    const { results: searchSeries, totalPages: searchTotalPages, loading: searchLoading} = useSearchSeries(searchQuery, searchPage);
    const { results: discoverSeries,  totalPages: discoverTotalPages, loading: discoverLoading } = useDiscoverSeries(filters, discoverPage);
    const { genres:seriesGenres, loading: seriesGenresLoading } = useSeriesGenres();
    const { popularSeries, loading: popularSeriesLoading } = usePopularSeries();
    const { trendingSeries, loading: trendingSeriesLoading } = useTrendingSeries();
    const { randomSeries, loading:randomSeriesLoading, refreshRandomSeries } = useRandomSeries();

    const [selectedTrailer, setSelectedTrailer] = useState(null);
    const [selectedMedia, setSelectedMedia] = useState(null);
    
    function openTrailerModal(item) {
        setSelectedTrailer({
            id: item.id,
            type: "series"
        });
    }

    function closeTrailerModal() {
        setSelectedTrailer(null);
    }

    function openMediaModal(item) {
        setSelectedMedia({
            id: item.id,
            type: "series"
        });
    }

    function closeMediaModal() {
        setSelectedMedia(null);
    }

    return (
        <div className="bg-black">
            {/* SPACE */}
            <div className="h-[100px] bg-black"></div>
            {/* NAVBAR */}
            <Navbar />
            {/* MOVIE CAROUSELS */}
            <SingleItemCarousel type={"series"} catalog={newSeriesReleases} loading={newSeriesReleasesLoading} onOpenTrailerModal={openTrailerModal}/>
            {/* MOVIE SEARCH */}
            <SearchSection type={"series"} query={searchQuery} setQuery={setSearchQuery} page={searchPage} setPage={setSearchPage} 
            results={searchSeries} totalPages={searchTotalPages} loading={searchLoading} onOpenModal={openMediaModal}/>
            {/* MOVIE FILTERS */}
            <DiscoverSection type={"series"} filters={filters} setFilters={setFilters} genres={seriesGenres} genresLoading={seriesGenresLoading} page={discoverPage} 
            setPage={setDiscoverPage} results={discoverSeries} totalPages={discoverTotalPages} loading={discoverLoading} onOpenModal={openMediaModal}/>
            {/* POPULAR MOVIES CAROUSEL */}
            <MultiItemCarousel title="Popular Series" type={"series"} catalog={popularSeries} loading={popularSeriesLoading} onOpenModal={openMediaModal}/>
            {/* TRENDING MOVIES CAROUSEL */}
            <MultiItemCarousel title="Trending Series" type={"series"} catalog={trendingSeries} loading={trendingSeriesLoading} onOpenModal={openMediaModal}/>
            {/* SHUFFLE SECTION */}
            <ShuffleSection label={"Series"} type={"series"} item={randomSeries} loading={randomSeriesLoading} onShuffle={refreshRandomSeries} onOpenModal={openMediaModal}/>
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
            {selectedMedia && (
                <MediaModal
                    type={"series"}
                    mediaId={selectedMedia.id}
                    mediaType={selectedMedia.type}
                    onClose={closeMediaModal}
                />
            )}
        </div>
    );
}

export default SeriesPage;