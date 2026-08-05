/*REACT*/
import { useEffect, useState, useRef } from "react";

/*COMPONENTS*/
import { useTrailer } from "../hooks/useTrailer";

/*JS*/
import { youtubePathBase } from "../js/constants";

/*IMAGES*/
import crossLogo from "../assets/cross_Logo.png";

function TrailerModal({ mediaId, mediaType, onClose }) {

    const {
        trailer,
        loading
    } = useTrailer(mediaId, mediaType);

    if (!mediaId && !mediaType) return null;

    return (
        <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            onClick={onClose}
        >
            <div
                className="bg-black/90 text-white p-6 rounded-lg w-[120vh] shadow-[0_0_30px_rgba(168,85,247,0.6)] relative"
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
                    <div className="aspect-video h-[65vh] bg-zinc-800 rounded-lg animate-pulse" />
                )}

                {/* Trailer */}
                {!loading && trailer && (
                    <iframe
                        className="aspect-video h-[65vh] rounded-lg"
                        src={`https://www.youtube.com/embed/${trailer.key}`}
                        title={trailer.name}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                )}

                {/* No trailer */}
                {!loading && !trailer && (
                    <div className="h-[65vh] flex flex-col items-center justify-center">

                        <h2 className="text-2xl font-semibold">
                            Trailer Unavailable
                        </h2>

                        <p className="text-gray-400 mt-3">
                            We couldn't find a trailer for this title.
                        </p>

                    </div>
                )}

            </div>
        </div>
    );
}

export default TrailerModal;