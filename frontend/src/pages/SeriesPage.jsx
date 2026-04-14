/*COMPONENTS*/
import Navbar from "../components/Navbar";
import SingleItemCarousel from "../components/SingleItemCarousel";
import Footer from "../components/Footer";

/*JS*/
import { newSeriesReleases } from "../js/data";

function SeriesPage() {
    return (
        <div>
            <div className="h-[100px] bg-black"></div>
            <Navbar />
            {/* SERIES CAROUSELS */}
            <SingleItemCarousel movies={newSeriesReleases} />
            <Footer />
        </div>
    );
}

export default SeriesPage;