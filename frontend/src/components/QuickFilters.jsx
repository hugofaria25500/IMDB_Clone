function QuickFilters({ genres, loading, selectedGenre, onSelect }) {
    return (
        <div className="w-full flex justify-center mt-6 px-4">

            <div className="flex flex-wrap gap-3 justify-center max-w-[800px]">

                {loading ? (

                    Array.from({ length: 8 }).map((_, index) => (

                        <div
                            key={index}
                            className="h-10 w-24 rounded-full bg-zinc-800 animate-pulse"
                        />

                    ))

                ) : (

                    genres?.map((genre) => (

                        <button
                            key={genre.id}
                            className={`px-4 py-2 rounded-full transition-all duration-300 whitespace-nowrap ${
                                selectedGenre === genre.id
                                    ? "bg-purple-600 text-white"
                                    : "bg-zinc-800 text-gray-300 hover:bg-purple-600 hover:text-white"
                            }`}
                            onClick={() => onSelect(genre.id)}
                        >
                            {genre.name}
                        </button>

                    ))

                )}

            </div>

        </div>

    );

}

export default QuickFilters;