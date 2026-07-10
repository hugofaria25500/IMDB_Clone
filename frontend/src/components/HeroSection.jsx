/*REACT*/
import { useNavigate } from "react-router-dom";

/*COMPONENTS*/
import Navbar from "./Navbar";

/*IMAGES*/
import heroSectionImage from "../assets/hero_section_background.png"

function HeroSection() {
    const navigate = useNavigate();

    return (
        <>
            {/* HERO SECTION */}
            <div className="relative w-full h-[700px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroSectionImage})` }}>
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />

                <div className="absolute z-20 flex flex-col items-center justify-center px-4 left-4 right-4 top-1/2 -translate-y-1/2 md:translate-y-0 md:left-[200px] md:right-0 md:top-[275px] md:h-[250px] md:w-[400px] md:px-0">
                    <h1 className="text-2xl md:text-5xl font-bold text-white text-center">Unlimited Movies, TV Shows and More</h1>
                    <span className="block text-lg text-gray-300 mt-4 text-center">Explore ratings, reviews, and trending content. Build your personal watchlist.</span>
                    <button className="bg-violet-600 text-white px-6 py-3 rounded-full hover:bg-violet-700 mt-4 font-bold" onClick={() => navigate("/movies")}>
                        Explore Now
                    </button>
                </div>

            </div>
        
        </>
    );
}

export default HeroSection;