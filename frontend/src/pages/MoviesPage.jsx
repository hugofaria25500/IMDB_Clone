/*COMPONENTS*/
import Navbar from "../components/Navbar";
import SingleItemCarousel from "../components/SingleItemCarousel";
import MultiItemCarousel from '../components/MultiItemCarousel';
import Footer from "../components/Footer";

/*JS*/
import { newMovieReleases, popularMovies, trendingMovies} from "../js/data";

function MoviesPage() {
    return (
        <div>
            <div className="h-[100px] bg-black"></div>
            <Navbar />
            {/* MOVIE CAROUSELS */}
            <SingleItemCarousel movies={newMovieReleases} />
            {/* POPULAR MOVIES CAROUSEL */}
            <MultiItemCarousel title="Popular Movies" movies={popularMovies} />
            {/*TRENDING MOVIES CAROUSEL */}
            <MultiItemCarousel title="Trending Movies" movies={trendingMovies} />
            <Footer />
        </div>
    );
}   

export default MoviesPage;