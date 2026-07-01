/*REACT*/
import { useEffect, useState, useRef } from "react";

/*COMPONENTS*/
import { getMediaDetails } from "../services/catalogService";

/*IMAGES*/
import crossLogo from "../assets/cross_Logo.png";

function TrailerModal({ item, onClose }) { 

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
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50" onClick={onClose}>
            <div className="bg-black/90 text-white p-6 rounded-lg w-[120vh] shadow-[0_0_30px_rgba(168,85,247,0.6)] relative" onClick={(e) => e.stopPropagation()}>
                <button className="absolute top-[-10px] right-[-10px] bg-purple-800 hover:bg-purple-600 hover:scale-110 transform text-white p-3 rounded-full border-2 border-black" onClick={onClose}>
                    <img src={crossLogo} alt="Close" className="w-4 h-4" />
                </button>
                {data ? (
                <div>
                    {data.trailer ? (
                        <div className="flex justify-center items-center mb-4 rounded-lg overflow-hidden">
                            <iframe
                                className="aspect-video h-[65vh]"
                                src={data.trailer.url.replace("watch?v=", "embed/")}
                                title="Trailer"
                                frameBorder="0"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                            />
                        </div>
                    ) : null}
                </div> ) : null}
            </div>
        </div>
    );
}

export default TrailerModal;