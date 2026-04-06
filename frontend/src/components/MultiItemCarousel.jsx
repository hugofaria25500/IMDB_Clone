/*COMPONENTS*/
import CarouselCard from "./CarouselCard";

/*IMAGES*/
import backgroundImage from "../assets/section_background.png";

function MultiItemCarousel({ title, movies }) {
    return (
        <div className="relative w-full h-[400px] bg-cover bg-center bg-no-repeat pt-4 pl-[80px] pr-[80px] flex flex-col" style={{ backgroundImage: `url(${backgroundImage})` }}>
            {/* GRADIENT OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />
            {/* BLUR OVERLAY */}
            <div className="absolute inset-0 backdrop-blur-[10px]" />
            {/* CONTENT */}
            <h2 className="relative text-2xl font-bold text-white z-20">{title}</h2>

            <div className="relative z-20 mt-4 flex gap-4 scroll-smooth snap-x snap-mandatory px-4">
                {movies.map((movie, index) => (
                    <div className="snap-start" key={index}>
                    <CarouselCard movie={movie} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MultiItemCarousel;