/*IMAGES*/
import backgroundImage from "../assets/section_background.png";

function MultiItemCarousel({ title }) {
    return (
        <div className="relative w-full h-[750px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <h2 className="text-2xl font-bold text-white">{title}</h2>
        </div>
    );
}

export default MultiItemCarousel;