/*COMPONENTS*/
import Navbar from "../components/Navbar";
import HeroSection from '../components/HeroSection';
import MultiItemCarousel from '../components/MultiItemCarousel';
import PromoSection from '../components/PromoSection';
import Footer from '../components/Footer';

/*JS*/
import {popularMovies, trendingMovies} from "../js/data";

function Homepage() {
  return (
    <div className="w-full flex flex-col justify-center bg-black">
        {/*NAVBAR*/}
        <Navbar />
        {/* HERO SECTION */}
        <HeroSection />
        {/* MOVIE CAROUSELS */}
        <MultiItemCarousel title="Popular Movies" movies={popularMovies} />
        {/*TRENDING MOVIES*/}
        <MultiItemCarousel title="Trending Movies" movies={trendingMovies} />
        {/*PROMO SECTION*/}
        <PromoSection />
        {/*FOOTER*/}
        <Footer />
    </div>
  );
}

export default Homepage;