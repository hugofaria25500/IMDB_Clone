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
        {/* POPULAR MOVIES CAROUSEL */}
        <MultiItemCarousel title="Popular Movies" catalog={popularMovies} />
        {/*TRENDING MOVIES CAROUSEL */}
        <MultiItemCarousel title="Trending Movies" catalog={trendingMovies} />
        {/*PROMO SECTION*/}
        <PromoSection />
        {/*FOOTER*/}
        <Footer />
    </div>
  );
}

export default Homepage;