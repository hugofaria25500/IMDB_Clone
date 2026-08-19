//JS
import { posterPathBase } from "../js/constants";

//HOOKS
import { useMovieGenres} from "../hooks/genres/useMovieGenres"
import { useSeriesGenres} from "../hooks/genres/useSeriesGenres";

function MediaCard({type, item, onClick }) {

    if (!type) return null;

    function useGenres(type) {
        const movieGenres = useMovieGenres();
        const seriesGenres = useSeriesGenres();

        return type === "movies"
            ? movieGenres
            : seriesGenres;
    }

    const { genreMap } = useGenres(type);

    return (
        <div>
            {type == 'movies' &&
                <div
                    onClick={() => {onClick && onClick(item);}}
                    className="group w-[200px] bg-zinc-900 rounded-xl overflow-hidden cursor-pointer"
                >
                    <div className="relative h-[250px] w-full overflow-hidden">
                        <img 
                            src={posterPathBase+item?.posterPath}
                            alt={item?.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-center justify-center">
                            <span className="opacity-0 group-hover:opacity-100 text-sm text-white font-semibold">
                                View Details
                            </span>
                        </div>
                    </div>

                    <div className="p-3">
                        <h3 className="text-white text-sm font-bold line-clamp-1">
                            {item.title}
                        </h3>

                        {/* GENRES */}
                        <div className="mt-1 h-4 overflow-hidden">
                            <p className="text-[9px] font-semibold uppercase tracking-wide text-purple-400 truncate">
                                {(item?.genreIds || [])
                                    .map(id => genreMap[id])
                                    .filter(Boolean)
                                    .slice(0, 2)
                                    .join(" • ")}
                            </p>
                        </div>

                        <p className="text-xs text-gray-400">
                            {item?.releaseDate?.substring(0,4)} • ⭐ {item?.rating?.substring(0,3)}
                        </p>
                    </div>
                </div>
            }

            {type == 'series' &&
                <div
                    onClick={() => {onClick && onClick(item);}}
                    className="group w-[200px] bg-zinc-900 rounded-xl overflow-hidden cursor-pointer"
                >
                    <div className="relative h-[250px] w-full overflow-hidden">
                        <img 
                            src={posterPathBase+item?.posterPath}
                            alt={item?.originalName}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-center justify-center">
                            <span className="opacity-0 group-hover:opacity-100 text-sm text-white font-semibold">
                                View Details
                            </span>
                        </div>
                    </div>

                    <div className="p-3">
                        <h3 className="text-white text-sm font-bold line-clamp-1">
                            {item?.originalName}
                        </h3>

                        {/* GENRES */}
                        <div className="mt-1 h-4 overflow-hidden">
                            <p className="text-[9px] font-semibold uppercase tracking-wide text-purple-400 truncate">
                                {(item?.genreIds || [])
                                    .map(id => genreMap[id])
                                    .filter(Boolean)
                                    .slice(0, 2)
                                    .join(" • ")}
                            </p>
                        </div>
                        
                        <p className="text-xs text-gray-400">
                            {item?.firstReleaseDate?.substring(0,4)} • ⭐ {item?.rating?.substring(0,3)}
                        </p>
                    </div>
                </div>
            }
        </div>
    );
}

export default MediaCard;