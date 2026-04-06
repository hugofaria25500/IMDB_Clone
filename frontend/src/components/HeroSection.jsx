/*COMPONENTS*/
import Navbar from "./Navbar";

/*IMAGES*/
import heroSectionImage from "../assets/hero_section_background.png"

function HeroSection() {
    return (
        <>
            {/* HERO SECTION */}
            <div className="relative w-full h-[750px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroSectionImage})` }}>
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70 z-10" />

                <div className="relative z-20">
                    <Navbar />
                </div>

                <div className="absolute h-[250px] w-[400px] top-[275px] left-[200px] right-0 bottom-0 z-20 flex flex-col items-center justify-center">
                    <h1 className="text-5xl font-bold text-white text-center">Unlimited Movies, TV Shows and More</h1>
                    <span className="block text-lg text-gray-300 mt-4">Watch anywhere. Cancel anytime.</span>
                    <button className="bg-violet-600 text-white px-6 py-3 rounded-full hover:bg-violet-700 mt-4 font-bold">Watch Now</button>
                </div>

            </div>
        
        </>
    );
}

export default HeroSection;