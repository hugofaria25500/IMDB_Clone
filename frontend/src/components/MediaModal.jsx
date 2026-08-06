/*REACT*/
import { useEffect, useState, useRef } from "react";

/*SERVICES*/
import { useMovieDetails } from "../hooks/movies/useMovieDetails";
import { useTrailer } from "../hooks/useTrailer";

/*JS*/
import { posterPathBase, logoPathBase } from "../js/constants";

/*IMAGES*/
import crossLogo from "../assets/cross_logo.png";

function MediaModal({type, mediaId, mediaType, onClose }) {

    const {
        details,
        loading
    } = useMovieDetails(mediaId);

    const {
        trailer,
        loading: trailerLoading
    } = useTrailer(mediaId, mediaType);

    if (!mediaId && !mediaType) return null;

    return (
        <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            onClick={onClose}>
            <div className="relative bg-black/90 text-white rounded-xl w-[95vw] max-w-[1100px] max-h-[90vh] overflow-y-aut p-4 sm:p-6 lg:p-8 shadow-[0_0_30px_rgba(168,85,247,0.6)]"
                onClick={(e) => e.stopPropagation()}
            >

                {/* Close */}
                <button
                    className="absolute top-[-10px] right-[-10px] bg-purple-800 hover:bg-purple-600 hover:scale-110 transition text-white p-3 rounded-full border-2 border-black"
                    onClick={onClose}
                >
                    <img
                        src={crossLogo}
                        alt="Close"
                        className="w-[10px] h-[10px]"
                    />
                </button>

                {/* Loading */}
                {loading && (
                    <div className="flex flex-col lg:flex-row gap-8">

                    {/* Poster */}
                    <div className="w-[280px] shrink-0">
                        <div className="w-full h-[420px] rounded-xl bg-zinc-800 animate-pulse" />

                        <div className="mt-4 h-12 w-full rounded-xl bg-zinc-800 animate-pulse" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">

                        <div className="h-10 w-2/3 rounded bg-zinc-800 animate-pulse" />

                        <div className="mt-6 h-5 w-1/3 rounded bg-zinc-800 animate-pulse" />

                        <div className="mt-6 flex gap-3">
                            <div className="h-8 w-20 rounded-full bg-zinc-800 animate-pulse" />
                            <div className="h-8 w-24 rounded-full bg-zinc-800 animate-pulse" />
                        </div>

                        <div className="mt-8 h-4 w-40 rounded bg-zinc-800 animate-pulse" />

                        <div className="mt-4 space-y-3">
                            <div className="h-3 w-full rounded bg-zinc-800 animate-pulse" />
                            <div className="h-3 w-full rounded bg-zinc-800 animate-pulse" />
                            <div className="h-3 w-3/4 rounded bg-zinc-800 animate-pulse" />
                        </div>

                    </div>

                </div>
                )}

                {/* Card */}
                {!loading && details && (
                    <div className="flex flex-col lg:flex-row gap-8">

                        {/* LEFT */}
                        <div className="flex flex-col items-center lg:w-[260px] shrink-0">
                            <img src={posterPathBase + details.posterPath} className="w-[200px] sm:w-[240px] lg:w-full h-auto rounded-lg object-cover"/>

                            <button className="mt-3 w-full h-7 rounded-sm bg-violet-600 hover:bg-violet-700 text-sm font-semibold transition"
                                onClick={() => window.open(`https://www.youtube.com/watch?v=${trailer.key}`, "_blank")}>
                                Watch Trailer
                            </button>
                        </div>

                        {/* RIGHT */}
                        <div className="flex-1">

                            <div className="flex flex-row gap-1 items-center">
                                <h1 className="text-2xl font-bold">
                                    {details.title}
                                </h1>
                                <span className="text-lg text-gray-500 font-semibold">
                                    ({details.releaseDate.substring(0,4)})
                                </span>
                            </div>
                            
                            <div className="flex flex-row gap-2 items-center">
                                <span className="text-yellow-400 text-sm font-semibold">
                                    ⭐{details.rating.toFixed(1)}
                                </span>
                                <span className="text-sm font-semibold">•</span>
                                <span className="text-sm font-semibold">
                                    {details.runtime} min.
                                </span>
                            </div>
                            
                            <div className="flex flex-row gap-2 items-center">
                                {details?.genres.map((genre) => (
                                    <div key={genre.id} className="flex items-center mt-2 px-3 py-[2px] rounded-md bg-purple-900 text-white" >
                                        <span className="text-xs font-semibold">{genre.name}</span>
                                    </div>
                                ))}
                            </div>

                            <hr className="mt-5 border-0 border-t border-zinc-700" />

                            <div className="flex flex-col gap-2 mt-2">
                               <h2 className="text-xs font-bold">OVERVIEW</h2>
                               <p className="text-gray-400 text-xs font-semibold">{details.overview}</p>
                            </div>

                            <hr className="mt-5 border-0 border-t border-zinc-700" />
                           
                            <div className="mt-2 grid grid-cols-2 gap-10">

                                {/* DETAILS */}

                                <div className="flex flex-col gap-1 mt-2">
                                    <h2 className="text-xs font-bold">DETAILS</h2>

                                    <div className="flex justify-between">
                                        <span className="text-[10px] text-gray-400 font-semibold">STATUS</span>
                                        <span className="text-[10px] text-violet-400 font-bold uppercase">{details?.status}</span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span className="text-[10px] text-gray-400 font-semibold">RELEASE DATE</span>
                                        <span className="text-[10px] text-violet-400 font-bold uppercase">{details?.releaseDate}</span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span className="text-[10px] text-gray-400 font-semibold">LANGUAGE</span>
                                        <span className="text-[10px] text-violet-400 font-bold uppercase">
                                            {details.spokenLanguages
                                                .map(language => language.englishName)
                                                .join(", ")}
                                        </span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span className="text-[10px] text-gray-400 font-semibold">COUNTRY</span>
                                        <span className="text-[10px] text-violet-400 font-bold uppercase">
                                             {details.productionCountries
                                                .map(country => country.name)
                                                .join(", ")}
                                        </span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span className="text-[10px] text-gray-400 font-semibold">BUDGET</span>
                                        <span className="text-[10px] text-violet-400 font-bold uppercase">{details.budget?.toLocaleString()}$</span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span className="text-[10px] text-gray-400 font-semibold">REVENUE</span>
                                        <span className="text-[10px] text-violet-400 font-bold uppercase">{details.revenue?.toLocaleString()}$</span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span className="text-[10px] text-gray-400 font-semibold">RUNTIME</span>
                                        <span className="text-[10px] text-violet-400 font-semibold uppercase">{details.runtime} mins</span>
                                    </div>
                                </div>

                                {/* PRODUCTION */}

                                <div className="flex flex-col gap-1 mt-2">
                                    <h2 className="text-xs font-bold">PRODUCTION</h2>

                                    {details.productionCompanies.map(company => (

                                        <div key={company.id} className="flex items-center gap-4">

                                            {company.logoPath ? (
                                                <img
                                                    src={logoPathBase + company.logoPath}
                                                    className="w-8 h-8 rounded-md object-contain bg-zinc-700 p-2"
                                                />
                                            ) : (

                                                <div className="w-8 h-8 rounded-md bg-zinc-700" />
                                            )}
                                            <span className="text-[10px] text-gray-400 font-semibold uppercase">{company.name}</span>
                                        </div>

                                    ))}
                                </div>

                            </div>

                        </div>

                    </div>
                )}

                {/* No Details */}
                {!loading && !details && (
                    <div className="h-[65vh] flex flex-col items-center justify-center">

                        <h2 className="text-2xl font-semibold">
                            Details Unavailable
                        </h2>

                        <p className="text-gray-400 mt-3">
                            We couldn't find any info for this movie.
                        </p>

                    </div>
                )}

            </div>
        </div>
    );
}

export default MediaModal;