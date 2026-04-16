function Grid({ movies, loading }) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 transition-opacity duration-300">
            {loading
              ? Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="bg-zinc-800 h-[250px] rounded-xl animate-pulse" />
                ))
              : movies.map((movie) => (
                  <div
                    key={movie.id}
                    className="group bg-zinc-900 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <div className="relative h-[250px]">
                      <img
                        src={movie.image}
                        alt={movie.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 transition text-sm">
                          View Details
                        </span>
                      </div>
                    </div>
                    <div className="p-3">
                      <h3 className="text-sm font-semibold">{movie.title}</h3>
                      <p className="text-xs text-gray-400">
                        {movie.year} • ⭐ {movie.rating}
                      </p>
                    </div>
                  </div>
                ))}
          </div>
    );
} 

export default Grid;