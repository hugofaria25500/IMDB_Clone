import { useEffect, useState } from "react";
import { getMediaDetails } from "../services/catalogService";

function MediaModal({ item, onClose }) {

    const [data, setData] = useState(null);

    useEffect(() => {
        async function loadDetails() {
            if (!item) return;

            const result = await getMediaDetails(item.id);
            setData(result);
        }

        loadDetails();
    }, [item]); // ?? IMPORTANTE

    if (!item) return null;

    return (
        <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            onClick={onClose}
        >
            <div
                className="bg-gray-800 text-white p-6 rounded-lg w-[400px]"
                onClick={(e) => e.stopPropagation()}
            >
                {!data ? (
                    <p>Loading...</p>
                ) : (
                    <>
                        <h2>{data.title}</h2>
                        <p>{data.rating}</p>
                    </>
                )}

                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default MediaModal;