/*REACT*/
import { useState } from "react";
import { useEffect } from "react";

/*JS*/
import { useRandomMovie } from "../hooks/useRandomMovie";
import { useRandomSerie } from "../hooks/useRandomSerie";

import { getRandomMovie } from "../services/catalogService";
import { getRandomSerie } from "../services/catalogService";

function ShuffleSection( { type, catalog, loading } ) {

    const { randomMovie, randomMovieLoading } = useRandomMovie();
    const { randomSerie, randomSerieLoading } = useRandomSerie();

    const [selectedItem, setSelectedItem] = useState(null);

    const [isShuffling, setIsShuffling] = useState(false);

    useEffect(() => {
        if (type === "Movie" && randomMovie) {
            setSelectedItem(randomMovie);
        } else if (type === "Serie" && randomSerie) {
            setSelectedItem(randomSerie);
        }
    }, [randomMovie, randomSerie, type]);

    async function handleShuffle() {
        setIsShuffling(true);

        let result = null;

        if (type === "Movie") {
            result = await getRandomMovie();
        } else if (type === "Serie") {
            result = await getRandomSerie();
        }

        await new Promise(resolve => setTimeout(resolve, 800));

        setSelectedItem(result);
        setIsShuffling(false);        
    }

    return (
        <div className="w-full flex flex-col items-center justify-center mt-8 px-4">

            {/* HERO */}
            <div className="w-full h-[100px] mt-[50px] flex flex-col items-center justify-center">
                <h1 className="text-5xl font-bold text-violet-500">Not Sure What to Watch?</h1>
                <p className="text-gray-400 mt-2">Get a random {type} in one click</p>
            </div>

            {/* SHUFFLE SECTION */}
            { isShuffling && (
                <div className="h-[310px] w-[200px] bg-zinc-800 rounded-xl animate-pulse" />
            )}
            
            {selectedItem && !isShuffling && (
                <div key={selectedItem.id} className="group bg-zinc-900 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer">
                    <div className="relative h-[250px] w-[200px]">
                        <img
                            src={selectedItem.image}
                            alt={selectedItem.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                            <span className="opacity-0 group-hover:opacity-100 transition text-sm text-white">
                                View Details
                            </span>
                        </div>
                    </div>
                    <div className="p-3">
                        <h3 className="text-white text-sm font-bold">{selectedItem.title}</h3>
                        <p className="text-xs text-gray-400">
                            {selectedItem.year} • ⭐ {selectedItem.rating}
                        </p>
                    </div>
                </div>
            )}

            <button
                onClick={handleShuffle}
                className="bg-violet-600 text-white text-sm px-5 py-2 rounded-full hover:bg-violet-700 mt-4 font-bold"
            >Shuffle
            </button>

        </div>
    );
}   

export default ShuffleSection;