/*REACT*/
import { useEffect, useState, useRef } from "react";

/*COMPONENTS*/
import { getMediaDetails } from "../services/catalogService";

/*IMAGES*/
import crossLogo from "../assets/cross_logo.png";
import heartLogo from "../assets/heart_logo.png";
import starLogo from "../assets/star_logo.png";

function MediaModal({ item, onClose }) {

    const [data, setData] = useState(null);

    const requestIdRef = useRef(0);

    useEffect(() => {
        if (!item) return;

        setData(null);

        const requestId = ++requestIdRef.current;

        async function loadDetails() {
            const result = await getMediaDetails(item.id);

            if (requestId === requestIdRef.current) {
                setData(result);
            }
        }

        loadDetails();

    }, [item]);

    if (!item) return null;

    return (
        <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            onClick={onClose}
        >
            <div
                className="bg-black/90 text-white p-6 rounded-lg w-[40%] h-[80%] overflow-auto shadow-[0_0_30px_rgba(168,85,247,0.6)]"
                onClick={(e) => e.stopPropagation()}
            >
                <button onClick={onClose}>Close</button>

                {data ? (

                    <div>
                        {data.title ? (<h2 className="text-2xl font-semibold text-violet-500">{data.title}</h2>) : null}
                        {data.year ? (<p className="mb-4 text-sm">{data.year}</p>) : null}
                        {data.trailer ? (
                            <div className="mb-4 rounded-lg overflow-hidden">
                                <iframe
                                    className="w-full h-[300px]"
                                    src={data.trailer.url.replace("watch?v=", "embed/")}
                                    title="Trailer"
                                    frameBorder="0"
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen
                                />
                            </div>
                        ) : null}
                        <div className="flex flex-row w-full">
                            <div className="w-[60%] text-center">
                                {data.genres ? (
                                    data.genres.map((genre, index) => (
                                        <span
                                            key={index}
                                            className="inline-block bg-purple-600 text-white font-semibold text-xs px-3 py-2 rounded-xl mr-2 mb-2"
                                        >
                                            {genre}
                                        </span>
                                    ))
                                ) : null}
                            </div>
                            <div className="w-[40%] text-center">
                                
                            </div>
                        </div>

                        {data.overview ? (<p><span className="font-bold">Overview:</span> {data.overview}</p>) : null}

                        {data.runtime ? (<p><span className="font-bold">Runtime:</span> {data.runtime} minutes</p>) : null}
                        {data.seasons ? (<p><span className="font-bold">Seasons:</span> {data.seasons}</p>) : null}

                    </div>
                ) : (
                    <p>Loading...</p>
                )}

              
            </div>
        </div>
    );
}

export default MediaModal;