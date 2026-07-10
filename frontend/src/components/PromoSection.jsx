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
        <div
            className="relative w-full py-24 bg-cover bg-center"
            style={{ backgroundImage: `url(${promoSectionImage})` }}
        >
            {/* Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/75 to-black" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center px-6 md:px-16">

                {/* Header */}
                <span className="text-violet-400 text-xs font-bold uppercase tracking-[0.2em] mb-3">
                    Features
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
                    What You Can Do
                </h2>
                <p className="text-gray-400 mt-3 text-center max-w-md text-sm">
                    Everything you need to explore, track, and enjoy your favourite movies and series.
                </p>

                {/* Divider */}
                <div className="mt-6 w-16 h-[2px] bg-violet-500 rounded-full" />

                {/* Cards */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl">
                    <PromoCardDetails icon={discoverLogo} title="Discover" description="Browse thousands of movies and series" />
                    <PromoCardDetails icon={rateLogo} title="Rate" description="Share your opinion with the community" />
                    <PromoCardDetails icon={watchListLogo} title="Watchlist" description="Keep your watchlist always updated" />
                    <PromoCardDetails icon={dataLogo} title="Details" description="Dive into cast, crew and rich metadata" />
                </div>
            </div>
        </div>
    );
}

export default PromoSection;