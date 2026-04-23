/*REACT*/
import { useState } from "react";
import { useEffect } from "react";


/*COMPONENTS*/
import Navbar from "../components/Navbar";
import HeroSection from '../components/HeroSection';
import MultiItemCarousel from '../components/MultiItemCarousel';
import PromoSection from '../components/PromoSection';
import Footer from '../components/Footer';
import MediaModal from "../components/MediaModal";

/*JS*/
import { usePopularMovies } from "../hooks/usePopularMovies";
import { useTrendingMovies } from "../hooks/useTrendingMovies";

function Homepage() {
  const { popularMovies, popularMoviesLoading } = usePopularMovies();
  const { trendingMovies, trendingMoviesLoading } = useTrendingMovies();

  const [selectedItem, setSelectedItem] = useState(null);
  
  function openModal(item) {
      setSelectedItem(item);
  }

  function closeModal() {
      setSelectedItem(null);
  }

  return (
    <div className="w-full flex flex-col justify-center bg-black">
        {/*NAVBAR*/}
        <Navbar />
        {/* HERO SECTION */}
        <HeroSection />
        {/* POPULAR MOVIES CAROUSEL */}
        <MultiItemCarousel title="Popular Movies" catalog={popularMovies} onOpenModal={openModal} loading={popularMoviesLoading}/>
        {/*TRENDING MOVIES CAROUSEL */}
        <MultiItemCarousel title="Trending Movies" catalog={trendingMovies} onOpenModal={openModal} loading={trendingMoviesLoading}/>
        {/*PROMO SECTION*/}
        <PromoSection />
        {/*FOOTER*/}
        <Footer />
        {/* MODAL */}
        {selectedItem && (
            <MediaModal
                item={selectedItem}
                onClose={closeModal}
            />
        )}
        
    </div>
  );
}

export default Homepage;