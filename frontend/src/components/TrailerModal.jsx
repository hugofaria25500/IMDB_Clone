/*REACT*/
import { useEffect, useState, useRef } from "react";

/*COMPONENTS*/
import { useMovieTrailer } from "../hooks/useMovieTrailer";

/*JS*/
import { youtubePathBase } from "../js/constants";

/*IMAGES*/
import crossLogo from "../assets/cross_Logo.png";

function TrailerModal({ item, onClose }) { 

    const {
        trailer,
        loading
    } = useMovieTrailer(item?.id);

    if (!item) return null;

    return (
        <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            onClick={onClose}
        >
            <div
                className="bg-black/90 text-white p-6 rounded-lg w-[120vh] shadow-[0_0_30px_rgba(168,85,247,0.6)] relative"
                onClick={(e) => e.stopPropagation()}
            >

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

                {loading ? (

                    <div className="aspect-video h-[65vh] bg-zinc-800 animate-pulse rounded-lg" />

                ) : trailer ? (

                    <iframe
                        className="aspect-video h-[65vh] rounded-lg"
                        src={`${youtubePathBase}${trailer.key}`}
                        title={trailer.name}
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    />

                ) : (

                    <div className="flex justify-center items-center h-[65vh]">
                        <p className="text-gray-400">
                            Trailer unavailable.
                        </p>
                    </div>

                )}

            </div>
        </div>
    );
}

export default TrailerModal;