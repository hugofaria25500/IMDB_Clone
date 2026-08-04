/*REACT*/
import { useState } from "react";

//JS
import { backdropPathBase } from "../js/constants";

function ReleaseMediaCard({ item, onOpenTrailerModal }) {

  return (
    <div className="relative h-[calc(100vh-100px)] w-full md:flex md:flex-row md:items-center md:justify-center">
      
        <div className="absolute bottom-0 left-0 right-0 z-20 pb-8 px-6 bg-gradient-to-t from-black/80 to-transparent md:bg-none md:relative md:h-full md:w-[35%] md:flex md:flex-col md:items-center md:justify-center md:px-0 md:pb-0">

            <div className="z-20 flex flex-col items-start justify-center md:h-[250px] md:w-[400px] md:ml-[150px]">
                
                <h1 className="text-2xl md:text-5xl font-bold text-white">{item?.title}</h1>

                <span className="block text-xs text-gray-300">{item?.releaseDate?.substring(0,4)}</span>

                <p className="text-gray-500 text-left text-sm mt-2">{item?.overview}</p>
                
                <button className="bg-violet-600 text-white text-sm px-5 py-2 rounded-full hover:bg-violet-700 mt-4 font-bold" onClick={() => onOpenTrailerModal(item)}>
                    Watch Trailer
                </button>
            
            </div>
            
        </div>

        <div className="absolute inset-0 md:relative md:w-full md:h-full bg-black overflow-hidden">

            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10" />

            <img className="w-full h-full object-cover object-[center_50%] border-2 border-black" src={backdropPathBase+item?.backdropPath} alt={item?.title} />
        </div>

    </div>
  );
}

export default ReleaseMediaCard;