/*REACT*/
import { useRef } from "react";

/*COMPONENTS*/
import CarouselCard from "./CarouselCard";

/*IMAGES*/
import backgroundImage from "../assets/section_background.png";
import LeftArrowLogo from "../assets/left_arrow_logo.png";
import RightArrowLogo from "../assets/right_arrow_logo.png";

/*STYLES*/
import "../css/MultiItemCarousel.css";


function MultiItemCarousel({ title, movies }) {
    const sliderRef = useRef(null);
    let animationFrame = null;

    const scrollSpeed = 50; // ajusta aqui

    const startScroll = (direction) => {
        const step = () => {
            if (!sliderRef.current) return;

            sliderRef.current.scrollLeft += direction * scrollSpeed;
            animationFrame = requestAnimationFrame(step);
        };

        step();
    };

    const stopScroll = () => {
        if (animationFrame) {
            cancelAnimationFrame(animationFrame);
        }
    };

    return (
        <div
            className="relative w-full h-[420px] bg-cover bg-center bg-no-repeat pt-4 px-[50px] pb-[20px] flex flex-col"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            {/* OVERLAYS */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />
            <div className="absolute inset-0 backdrop-blur-[4px]" />

            {/* TITLE */}
            <h2 className="relative text-2xl font-bold text-white z-20">
                {title}
            </h2>

            {/* CAROUSEL */}
            <div className="flex items-center gap-4 relative z-20 h-full">

                {/* BOTÃO ESQUERDA */}
                <div
                    onMouseDown={() => startScroll(-1)}
                    onMouseUp={stopScroll}
                    onMouseLeave={stopScroll}
                    className="w-[50px] p-2 flex items-center justify-center cursor-pointer bg-violet-600/20 hover:bg-violet-700 rounded-full active:scale-90 transition"
                >
                    <img src={LeftArrowLogo} alt="Left" />
                </div>

                {/* SLIDER */}
                <div
                    ref={sliderRef}
                    className="flex gap-4 overflow-x-auto no-scrollbar px-4"
                >
                    {movies.map((movie, index) => (
                        <div key={index} className="shrink-0">
                            <CarouselCard movie={movie} />
                        </div>
                    ))}
                </div>

                {/* BOTÃO DIREITA */}
                <div
                    onMouseDown={() => startScroll(1)}
                    onMouseUp={stopScroll}
                    onMouseLeave={stopScroll}
                    className="w-[50px] p-2 flex items-center justify-center cursor-pointer bg-violet-600/20 hover:bg-violet-700 rounded-full active:scale-90 transition"
                >
                    <img src={RightArrowLogo} alt="Right" />
                </div>
            </div>
        </div>
    );
}

export default MultiItemCarousel;