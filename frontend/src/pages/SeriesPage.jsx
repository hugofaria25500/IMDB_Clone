/*REACT*/
import { useState } from "react";
import { useEffect } from "react";

/*COMPONENTS*/
import Navbar from "../components/Navbar";
import DiscoverSection from '../components/DiscoverSection';
import SingleItemCarousel from "../components/SingleItemCarousel";
import MultiItemCarousel from '../components/MultiItemCarousel';
import ShuffleSection from "../components/ShuffleSection";
import Footer from "../components/Footer";
import TrailerModal from "../components/TrailerModal";
import MediaModal from "../components/MediaModal";

/*JS*/


function SeriesPage() {

    const { series, loading } = useSeries();
    const { popularSeries, popularSeriesLoading } = null;
    const { trendingSeries, trendingSeriesLoading } = null;  
    const { newSeriesReleases, newSeriesReleasesLoading } = null;
    const { randomSerie, randomSerieLoading } = null;

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
            <DiscoverSection catalog={series} onOpenModal={openModal} loading={loading} label={"series"}/>
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