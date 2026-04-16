function ReleaseMovieCard({ movie }) {
  return (
    <div className="relative h-[calc(100vh-100px)] w-full flex flex-row items-center justify-center">
      
        <div className="relative h-full w-[35%] flex flex-col items-center justify-center z-20">

            <div className="h-[250px] w-[400px] z-20 flex flex-col items-start justify-center ml-[150px]">
                
                <h1 className="text-5xl font-bold text-white text-center">{movie.title}</h1>

                <span className="block text-xs text-gray-300 text-center">{movie.year}</span>

                <p className="text-gray-500 text-left text-sm mt-2">{movie.description}</p>
                
                <button className="bg-violet-600 text-white text-sm px-5 py-2 rounded-full hover:bg-violet-700 mt-4 font-bold">Watch Trailer</button>
            
            </div>
            
        </div>

        <div className="relative w-full h-full bg-black overflow-hidden">

            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10" />

            <img className="w-full h-full object-cover object-[center_50%] border-2 border-black" src={movie.image} alt={movie.title} />
        </div>

    </div>
  );
}

export default ReleaseMovieCard;