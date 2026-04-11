/* COMPONENTS */
import PromoCardDetails from "./PromoCardDetails";

/*IMAGES*/
import promoSectionImage from "../assets/promo_section_background.png"
import discoverLogo from "../assets/discover_logo.png";
import rateLogo from "../assets/rate_logo.png";
import watchListLogo from "../assets/watchlist_logo.png";
import dataLogo from "../assets/data_logo.png";

function PromoSection() {
    return (
        <div className="w-full h-[500px] flex items-center justify-center mt-20 relative bg-[center_60%] bg-cover p-10 pl-[80px] pr-[80px]" style={{ backgroundImage: `url(${promoSectionImage})`}}>
            {/* GRADIENT OVERLAY */} 
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10 " />
            <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-black/70 to-transparent z-0" />

            <div className="relative w-3/5 h-full" />

            <div className="relative w-2/5 h-full flex flex-col justify-center z-20">
                <h1 className="text-3xl font-bold text-white text-center">What You Can Do</h1>
                <div className="mt-6 grid grid-cols-2 gap-5 pl-[20px] pr-[20px]">
                    <PromoCardDetails icon={discoverLogo} description={"Browse thousands of movies"}  />
                    <PromoCardDetails icon={rateLogo} description="Share your opinion" />
                    <PromoCardDetails icon={watchListLogo} description="Keep your watchlist updated" />
                    <PromoCardDetails icon={dataLogo} description="Dive into cast & details" />    

                </div>
            </div>
        </div>
    );
}

export default PromoSection;