/*REACT*/
import { useState } from "react";
import { useEffect } from "react";

/*COMPONENTS*/
import MediaCard from "./MediaCard";

/*JS*/
import { useRandomMovie } from "../hooks/useRandomMovie";
import { useRandomSerie } from "../hooks/useRandomSerie";

import { getRandomMovie } from "../services/catalogService";
import { getRandomSerie } from "../services/catalogService";

function ShuffleSection( { type, item, loading, onShuffle, onOpenModal } ) {

    return (
        <div className="w-full flex flex-col items-center justify-center mt-8 px-4">

            {/* HERO */}
            <div className="w-full h-[100px] mt-[50px] flex flex-col items-center justify-center">
                <h1 className="text-2xl sm:text-5xl font-bold text-violet-500">Not Sure What to Watch?</h1>
                <p className="text-gray-400 mt-2">Get a random {type} in one click</p>
            </div>

            {/* SHUFFLE SECTION */}
            { loading && (
                <div className="h-[310px] w-[200px] bg-zinc-800 rounded-xl animate-pulse" />
                
            )}
            
            {item && !loading && (
                <MediaCard item={item} onClick={onOpenModal} />
            )}

            <button
                onClick={onShuffle}
                className="bg-violet-600 text-white text-sm px-5 py-2 rounded-full hover:bg-violet-700 mt-4 font-bold"
            >Shuffle
            </button>

        </div>
    );
}   

export default ShuffleSection;