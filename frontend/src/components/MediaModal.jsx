/*REACT*/
import { useEffect, useState, useRef } from "react";

/*SERVICES*/
import { getMediaDetails } from "../services/catalogService";

/*IMAGES*/
import crossLogo from "../assets/cross_logo.png";

function MediaModal({ item, onClose }) {

    const [data, setData] = useState(null);
    const requestIdRef = useRef(0);

    useEffect(() => {
        if (!item) return;
        setData(null);
        const requestId = ++requestIdRef.current;

        async function loadDetails() {
            const result = await getMediaDetails(item.id);
            if (requestId === requestIdRef.current) setData(result);
        }

        loadDetails();
    }, [item]);

    if (!item) return null;

    const backdrop  = data?.backdrop || data?.poster || item.image;
    const title     = data?.title    || item.title;
    const year      = data?.year     || item.year;
    const rating    = data?.rating   || item.rating;
    const hasFullRecs = Array.isArray(data?.recommendations) &&
                        data.recommendations.length > 0 &&
                        typeof data.recommendations[0] === "object";

    return (
        <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={onClose}
        >
            <div
                className="bg-zinc-900 text-white rounded-2xl w-full md:w-[680px] max-h-[90vh] overflow-y-auto scrollbar-thin shadow-[0_0_50px_rgba(139,92,246,0.4)] relative"
                onClick={(e) => e.stopPropagation()}
            >
                {/* ── CLOSE BUTTON ── */}
                <button
                    className="absolute top-3 right-3 z-10 bg-black/60 hover:bg-violet-600 p-2 rounded-full border border-white/10 transition-colors duration-200"
                    onClick={onClose}
                >
                    <img src={crossLogo} alt="Close" className="w-3.5 h-3.5" />
                </button>

                {/* ── BACKDROP HERO ── */}
                <div className="relative h-[220px] w-full rounded-t-2xl overflow-hidden shrink-0">
                    <img src={backdrop} alt={title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent" />

                    {/* Rating badge */}
                    {rating && (
                        <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm px-2.5 py-1.5 rounded-lg border border-white/10">
                            <span className="text-yellow-400 text-xs">⭐</span>
                            <span className="text-white font-bold text-sm">{rating}</span>
                        </div>
                    )}

                    {/* Title + meta */}
                    <div className="absolute bottom-4 left-5 right-14">
                        <h2 className="text-xl md:text-2xl font-bold text-white leading-tight drop-shadow">{title}</h2>
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-1 text-xs text-gray-300">
                            {year     && <span>{year}</span>}
                            {data?.runtime  && <><span className="text-gray-500">·</span><span>{data.runtime} min</span></>}
                            {data?.seasons  && <><span className="text-gray-500">·</span><span>{data.seasons} {data.seasons === 1 ? "Season" : "Seasons"}</span></>}
                            {data?.language && <><span className="text-gray-500">·</span><span>{data.language}</span></>}
                            {data?.ageRating && (
                                <span className="border border-gray-500 px-1.5 py-0.5 rounded text-[10px] font-medium">
                                    {data.ageRating}
                                </span>
                            )}
                        </div>
                    </div>
                </div>

                {/* ── BODY ── */}
                {data ? (
                    <div className="p-5 flex flex-col gap-6">

                        {/* Genres */}
                        {data.genres?.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                                {data.genres.map((genre, i) => (
                                    <span key={i} className="bg-violet-600/20 text-violet-300 text-xs font-semibold px-3 py-1.5 rounded-full border border-violet-500/30">
                                        {genre}
                                    </span>
                                ))}
                            </div>
                        )}

                        {/* Overview */}
                        {data.overview && (
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Overview</p>
                                <p className="text-gray-300 text-sm leading-relaxed">{data.overview}</p>
                            </div>
                        )}

                        {/* Trailer */}
                        {data.trailer?.url && (
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Trailer</p>
                                <div className="rounded-xl overflow-hidden border border-white/5">
                                    <iframe
                                        className="w-full h-[210px]"
                                        src={data.trailer.url.replace("watch?v=", "embed/")}
                                        title="Trailer"
                                        frameBorder="0"
                                        allow="autoplay; encrypted-media"
                                        allowFullScreen
                                    />
                                </div>
                            </div>
                        )}

                        {/* Director + Tags */}
                        {(data.director || data.tags?.length > 0) && (
                            <div className="flex flex-col sm:flex-row gap-5">
                                {data.director && (
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1.5">Director</p>
                                        <p className="text-white text-sm font-semibold">{data.director}</p>
                                    </div>
                                )}
                                {data.tags?.length > 0 && (
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1.5">Tags</p>
                                        <div className="flex flex-wrap gap-1.5">
                                            {data.tags.map((tag, i) => (
                                                <span key={i} className="bg-zinc-800 text-gray-300 text-xs px-2.5 py-1 rounded-full border border-white/5">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Cast */}
                        {data.cast?.length > 0 && (
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-3">Cast</p>
                                <div className="flex gap-4 overflow-x-auto pb-1">
                                    {data.cast.map((member, i) => (
                                        <div key={i} className="flex flex-col items-center gap-1.5 min-w-[60px]">
                                            <img
                                                src={member.photo}
                                                alt={member.name}
                                                onError={(e) => {
                                                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=6d28d9&color=fff&size=56`;
                                                }}
                                                className="h-14 w-14 rounded-full object-cover border-2 border-zinc-700 shrink-0"
                                            />
                                            <p className="text-white text-[11px] font-semibold text-center leading-tight">{member.name}</p>
                                            <p className="text-gray-500 text-[10px] text-center leading-tight">{member.character}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Recommendations */}
                        {hasFullRecs && (
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-3">You Might Also Like</p>
                                <div className="flex gap-3 overflow-x-auto pb-1">
                                    {data.recommendations.map((rec, i) => (
                                        <div key={i} className="min-w-[90px] flex flex-col gap-1.5 group cursor-pointer">
                                            <div className="h-[130px] w-[90px] rounded-xl overflow-hidden shrink-0">
                                                <img
                                                    src={rec.image}
                                                    alt={rec.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                            <p className="text-white text-[11px] font-medium line-clamp-2 leading-tight">{rec.title}</p>
                                            <p className="text-gray-500 text-[10px]">⭐ {rec.rating} · {rec.year}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                    </div>
                ) : (
                    /* Loading skeleton */
                    <div className="p-8 flex flex-col items-center justify-center gap-3 min-h-[160px]">
                        <div className="w-7 h-7 border-2 border-violet-500 border-t-transparent rounded-full animate-spin" />
                        <p className="text-gray-400 text-sm">Loading details...</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default MediaModal;