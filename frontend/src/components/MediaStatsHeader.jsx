/*IMAGES*/
import heartLogo from "../assets/heart_logo.png"
import watchlistLogo from "../assets/watchlist_logo.png"
import moviesLogoWhite from "../assets/movies_logo_white.png"
import moviesPurpleWhite from "../assets/movies_logo_purple.png"
import seriesLogoWhite from "../assets/series_logo_white.png"
import seriesPurpleWhite from "../assets/series_logo_purple.png"

function MediaStatsHeader({ type, selectedType, onTypeChange, movieCount = 0, seriesCount = 0 }) {

    const title = type === 'favourites' ? 'My Favourites' : 'My WatchList';
    const logo  = type === 'favourites' ? heartLogo : watchlistLogo;

    return (
        <div className="w-full flex flex-col items-center justify-center gap-4 py-6 px-5">

            {/*LABEL HERO*/}
            <div className="flex items-center gap-3">
                <img
                    className="h-[40px] w-[40px] rounded-full bg-violet-900/40 p-[9px]"
                    src={logo}
                    alt={title}
                />
                <h1 className="text-white text-2xl font-bold tracking-wide">{title}</h1>
            </div>

            {/*MEDIA SELECTION*/}
            <div className="flex gap-3">

                {/*MOVIE SELECTION*/}
                <button
                    onClick={() => onTypeChange("movies")}
                    className={`flex items-center gap-2 px-5 py-2 rounded-full border transition-colors ${
                        selectedType === "movies"
                            ? "border-violet-500 text-violet-400"
                            : "border-gray-600 text-gray-400 hover:border-gray-400"
                    }`}
                >
                    <img
                        className="h-5 w-5"
                        src={selectedType === "movies" ? moviesPurpleWhite : moviesLogoWhite}
                        alt="movies"
                    />
                    <span className="text-sm font-medium">Movies</span>
                    <span className="bg-gray-700 text-white text-xs px-2 py-0.5 rounded-full">
                        {movieCount}
                    </span>
                </button>

                {/*SERIES SELECTION*/}
                <button
                    onClick={() => onTypeChange("series")}
                    className={`flex items-center gap-2 px-5 py-2 rounded-full border transition-colors ${
                        selectedType === "series"
                            ? "border-violet-500 text-violet-400"
                            : "border-gray-600 text-gray-400 hover:border-gray-400"
                    }`}
                >
                    <img
                        className="h-5 w-5"
                        src={selectedType === "series" ? seriesPurpleWhite : seriesLogoWhite}
                        alt="series"
                    />
                    <span className="text-sm font-medium">Series</span>
                    <span className="bg-gray-700 text-white text-xs px-2 py-0.5 rounded-full">
                        {seriesCount}
                    </span>
                </button>

            </div>
        </div>
    );
}

export default MediaStatsHeader;