/*COMPONENTS*/
import Navbar from "../components/Navbar";
import SingleItemCarousel from "../components/SingleItemCarousel";
import Footer from "../components/Footer";

/*JS*/
import {newReleases } from "../js/data";

function MoviesPage() {
    return (
        <div>
            <Navbar />
            {/* MOVIE CAROUSELS */}
            <SingleItemCarousel movies={newReleases} />
            <div className="h-[800px]"></div>
            <Footer />
        </div>
    );
}   

export default MoviesPage;