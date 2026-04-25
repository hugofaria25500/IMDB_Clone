import { useEffect, useState, useRef } from "react";
import { getMediaDetails } from "../services/catalogService";

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
                className="bg-gray-800 text-white p-6 rounded-lg w-[40%] h-[80%] overflow-auto"
                onClick={(e) => e.stopPropagation()}
            >
                <button onClick={onClose}>Close</button>

                {data ? (

                    <div>
                        {data.title ? (<h2 className="text-2xl font-bold mb-4">{data.title}</h2>) : null}
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
                        {data.overview ? (<p>{data.overview}</p>) : null}

                        {data.runtime ? (<p>Runtime: {data.runtime} minutes</p>) : null}
                        {data.seasons ? (<p>Seasons: {data.seasons}</p>) : null}
                    </div>
                ) : (
                    <p>Loading...</p>
                )}

              
            </div>
        </div>
    );
}

export default MediaModal;