/*REACT*/
import { useState } from "react";

/*COMPONENTS*/
import Navbar from "../components/Navbar";
import HeroSection from '../components/HeroSection';
import MultiItemCarousel from '../components/MultiItemCarousel';
import PromoSection from '../components/PromoSection';
import Footer from '../components/Footer';
import MediaModal from "../components/MediaModal";

/*JS*/
import { usePopularMovies } from "../hooks/movies/usePopularMovies";
import { useTrendingMovies } from "../hooks/movies/useTrendingMovies";

function Homepage() {
    const { popularMovies, popularMoviesLoading } = usePopularMovies();
    const { trendingMovies, trendingMoviesLoading } = useTrendingMovies();

    const [selectedMedia, setSelectedMedia] = useState(null);
  
    function openMediaModal(item) {
        setSelectedMedia({
            id: item.id,
            type: "movies"
        });
    }

    function closeMediaModal() {
        setSelectedMedia(null);
    }

  return (
    <div className="w-full flex flex-col justify-center bg-black">
        {/*NAVBAR*/}
        <Navbar />
        {/* HERO SECTION */}
        <HeroSection />
        {/* POPULAR MOVIES CAROUSEL */}
        <MultiItemCarousel title="Popular Movies" catalog={popularMovies} loading={popularMoviesLoading}  onOpenModal={openMediaModal}/>
        {/*TRENDING MOVIES CAROUSEL */}
        <MultiItemCarousel title="Trending Movies" catalog={trendingMovies} loading={trendingMoviesLoading} onOpenModal={openMediaModal}/>
        {/*PROMO SECTION*/}
        <PromoSection />
        {/*FOOTER*/}
        <Footer />
        {/* MEDIA MODAL */}
        {selectedMedia && (
            <MediaModal
                mediaId={selectedMedia.id}
                mediaType={selectedMedia.type}
                onClose={closeMediaModal}
            />
        )}
    </div>
  );
}

export default Homepage;