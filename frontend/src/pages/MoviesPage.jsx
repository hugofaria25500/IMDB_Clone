/*COMPONENTS*/
import Navbar from "../components/Navbar";
import FilterSection from '../components/FilterSection';
import SingleItemCarousel from "../components/SingleItemCarousel";
import MultiItemCarousel from '../components/MultiItemCarousel';
import ShuffleSection from "../components/ShuffleSection";
import Footer from "../components/Footer";

/*JS*/
import { newMovieReleases, popularMovies, trendingMovies} from "../js/data";

function MoviesPage() {
    return (
        <div className="bg-black">
            {/* SPACE */}
            <div className="h-[100px] bg-black"></div>
            {/* NAVBAR */}
            <Navbar />
            {/* MOVIE CAROUSELS */}
            <SingleItemCarousel movies={newMovieReleases} />
            {/* MOVIE FILTERS */}
            <FilterSection />
            {/* POPULAR MOVIES CAROUSEL */}
            <MultiItemCarousel title="Popular Movies" catalog={popularMovies} />
            {/* TRENDING MOVIES CAROUSEL */}
            <MultiItemCarousel title="Trending Movies" catalog={trendingMovies} />
            {/* SHUFFLE SECTION */}
            <ShuffleSection />
            {/* FOOTER */}
            <Footer />
        </div>
    );
}   

export default MoviesPage;