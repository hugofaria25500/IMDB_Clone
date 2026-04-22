/*COMPONENTS*/
import Navbar from "../components/Navbar";
import FilterSection from '../components/FilterSection';
import SingleItemCarousel from "../components/SingleItemCarousel";
import MultiItemCarousel from '../components/MultiItemCarousel';
import ShuffleSection from "../components/ShuffleSection";
import Footer from "../components/Footer";

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

    return (
        <div className="bg-black">
             {/* SPACE */}
            <div className="h-[100px] bg-black"></div>
            {/* NAVBAR */}
            <Navbar />
            {/* SERIES CAROUSELS */}
            <SingleItemCarousel movies={newSeriesReleases} loading={newSeriesReleasesLoading} />
            {/* SERIES FILTERS */}
            <FilterSection catalog={series} loading={loading} />
            {/* POPULAR SERIES CAROUSEL */}
            <MultiItemCarousel title="Popular Series" catalog={popularSeries} loading={popularSeriesLoading} />
            {/* TRENDING SERIES CAROUSEL */}
            <MultiItemCarousel title="Trending Series" catalog={trendingSeries} loading={trendingSeriesLoading} />
            {/* SHUFFLE SECTION */}
            <ShuffleSection type={"Serie"} catalog={randomSerie} loading={randomSerieLoading} />
            {/* FOOTER */}
            <Footer />
        </div>
    );
}

export default SeriesPage;