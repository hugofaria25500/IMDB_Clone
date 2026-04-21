import { useState } from "react";

function ShuffleSection( { movie, loading } ) {

    return (
        <div className="w-full flex flex-col items-center justify-center mt-8 px-4">

            {/* HERO */}
            <div className="w-full h-[100px] mt-[50px] flex flex-col items-center justify-center">
                <h1 className="text-5xl font-bold text-violet-500">Not Sure What to Watch?</h1>
                <p className="text-gray-400 mt-2">Get a random movie in one click</p>
            </div>

            {/* SHUFFLE SECTION */}
            <div>
                <div className="w-[200px] h-[260px] mt-[20px] bg-gray-800 rounded-lg flex items-center justify-center">
                    <p className="text-gray-400">Movie</p>
                </div>
            </div>

            <button
                onClick={() => {console.log("Shuffle button clicked");}}
                className="bg-violet-600 text-white text-sm px-5 py-2 rounded-full hover:bg-violet-700 mt-4 font-bold"
            >Shuffle
            </button>

        </div>
    );
}   

export default ShuffleSection;