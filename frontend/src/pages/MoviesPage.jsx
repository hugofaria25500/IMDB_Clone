/*COMPONENTS*/
import Navbar from "../components/Navbar";
import SingleItemCarousel from "../components/SingleItemCarousel";
import MultiItemCarousel from '../components/MultiItemCarousel';
import Filters from '../components/Filters';
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
            {/* POPULAR MOVIES CAROUSEL */}
            <MultiItemCarousel title="Popular Movies" movies={popularMovies} />
            {/* TRENDING MOVIES CAROUSEL */}
            <MultiItemCarousel title="Trending Movies" movies={trendingMovies} />
            {/* MOVIE FILTERS */}
            <Filters />
            {/* FOOTER */}
            <Footer />
        </div>
    );
}   

export default MoviesPage;