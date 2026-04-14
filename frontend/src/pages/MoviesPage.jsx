/*COMPONENTS*/
import Navbar from "../components/Navbar";
import SingleItemCarousel from "../components/SingleItemCarousel";
import Footer from "../components/Footer";

/*JS*/
import { newMovieReleases } from "../js/data";

function MoviesPage() {
    return (
        <div>
            <div className="h-[100px] bg-black"></div>
            <Navbar />
            {/* MOVIE CAROUSELS */}
            <SingleItemCarousel movies={newMovieReleases} />
            <Footer />
        </div>
    );
}   

export default MoviesPage;