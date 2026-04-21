/*COMPONENTS*/
import Navbar from "../components/Navbar";
import FilterSection from '../components/FilterSection';
import SingleItemCarousel from "../components/SingleItemCarousel";
import MultiItemCarousel from '../components/MultiItemCarousel';
import ShuffleSection from "../components/ShuffleSection";
import Footer from "../components/Footer";

/*JS*/
import { seriesMock, popularSeries, trendingSeries, newSeriesReleases } from "../js/data";

import { useSeries } from "../hooks/useSeries";

function SeriesPage() {

    const { series, loading } = useSeries();

    return (
        <div className="bg-black">
             {/* SPACE */}
            <div className="h-[100px] bg-black"></div>
            {/* NAVBAR */}
            <Navbar />
            {/* SERIES CAROUSELS */}
            <SingleItemCarousel movies={newSeriesReleases} />
            {/* SERIES FILTERS */}
            <FilterSection catalog={series} loading={loading} />
            {/* POPULAR SERIES CAROUSEL */}
            <MultiItemCarousel title="Popular Series" catalog={popularSeries} />
            {/* TRENDING SERIES CAROUSEL */}
            <MultiItemCarousel title="Trending Series" catalog={trendingSeries} />
            {/* SHUFFLE SECTION */}
            <ShuffleSection />
            {/* FOOTER */}
            <Footer />
        </div>
    );
}

export default SeriesPage;