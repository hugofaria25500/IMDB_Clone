function QuickFilters({ selectedGenre, onSelect }) {
    return (
         
      <div className="w-full flex justify-center mt-6 px-4">
        <div className="flex flex-wrap gap-3 justify-center max-w-[800px]">
          {["Action", "Comedy", "Drama", "Horror", "Sci-Fi", "Animation", "Crime"].map((genre) => (
            <button
              key={genre}
              className={`px-4 py-2 rounded-full transition-all duration-300 whitespace-nowrap ${
                selectedGenre === genre
                  ? "bg-purple-600 text-white"
                  : "bg-zinc-800 text-gray-300 hover:bg-purple-600 hover:text-white"
              }`}
              onClick={() => onSelect(genre)}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>
    );
}

export default QuickFilters;