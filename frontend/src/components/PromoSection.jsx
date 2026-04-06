/*IMAGES*/
import promoSectionImage from "../assets/promo_section_background.png"
import sectionImage from "../assets/section_background.png"

function PromoSection() {
    return (
        <div className="w-full h-[500px] flex items-center justify-center mt-20 relative bg-[center_60%] bg-cover" style={{ backgroundImage: `url(${promoSectionImage})`}}>
            {/* GRADIENT OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />

            <div className="relative w-1/2 h-full" />

            <div className="relative w-1/2 h-full flex flex-col items-start justify-center p-8">
            </div>
        </div>
    );
}

export default PromoSection;