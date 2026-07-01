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
import TrailerModal from "../components/TrailerModal";
import MediaModal from "../components/MediaModal";

/*JS*/
import { useSeries } from "../hooks/useSeries";
import { usePopularSeries } from "../hooks/usePopularSeries";
import { useTrendingSeries } from "../hooks/useTrendingSeries";
import { useNewSeriesReleases } from "../hooks/useNewSeriesReleases";
import { useRandomSerie } from "../hooks/useRandomSerie";

function SeriesPage() {

    const { series, loading } = useSeries();
    const { popularSeries, popularSeriesLoading } = usePopularSeries();
    const { trendingSeries, trendingSeriesLoading } = useTrendingSeries();  
    const { newSeriesReleases, newSeriesReleasesLoading } = useNewSeriesReleases();
    const { randomSerie, randomSerieLoading } = useRandomSerie();

    const [selectedTrailerItem, setSelectedTrailerItem] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);

    function openTrailerModal(item) {
        setSelectedTrailerItem(item);
    }

    function closeTrailerModal() {
        setSelectedTrailerItem(null);
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
            {/* SERIES CAROUSELS */}
            <SingleItemCarousel movies={newSeriesReleases} onOpenTrailerModal={openTrailerModal} loading={newSeriesReleasesLoading} />
            {/* SERIES FILTERS */}
            <FilterSection catalog={series} onOpenModal={openModal} loading={loading} />
            {/* POPULAR SERIES CAROUSEL */}
            <MultiItemCarousel title="Popular Series" catalog={popularSeries} onOpenModal={openModal} loading={popularSeriesLoading} />
            {/* TRENDING SERIES CAROUSEL */}
            <MultiItemCarousel title="Trending Series" catalog={trendingSeries} onOpenModal={openModal} loading={trendingSeriesLoading} />
            {/* SHUFFLE SECTION */}
            <ShuffleSection type={"Serie"} onOpenModal={openModal} loading={randomSerieLoading} />
            {/* FOOTER */}
            <Footer />
            {/* TRAILER MODAL */}
            {selectedTrailerItem && (
                <TrailerModal
                    item={selectedTrailerItem}
                    onClose={closeTrailerModal}
                />
            )}
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

export default SeriesPage;