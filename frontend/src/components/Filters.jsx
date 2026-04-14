function Filters() {
    let currentYear = new Date().getFullYear();

    return (
    <div className="min-h-screen bg-black text-white">

        <h1 className="text-5xl font-bold text-white text-center mt-[80px]">Search for what you like</h1>

      {/* SEARCH BAR */}
      <div className="w-full flex justify-center mt-6 px-4">
        
        <div className="w-full md:w-[60%] relative">
          <input
            type="text"
            placeholder="Search for movies..."
            className="w-full p-4 pl-12 rounded-xl bg-zinc-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            🔍
          </span>
        </div>
      </div>

      {/* QUICK FILTERS (CENTERED) */}
      <div className="w-full flex justify-center mt-6 px-4">
        <div className="flex gap-3 overflow-x-auto max-w-[800px]">
          {["Action", "Comedy", "Drama", "Horror", "Sci-Fi"].map((genre) => (
            <button
              key={genre}
              className="px-4 py-2 rounded-full bg-zinc-800 text-gray-300 hover:bg-purple-600 hover:text-white transition whitespace-nowrap"
            >
              {genre}
            </button>
          ))}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex gap-8 px-6 mt-10">

        {/* SIDEBAR */}
        <div className="hidden lg:block w-[250px] bg-zinc-900/70 backdrop-blur-md p-5 rounded-xl h-fit sticky">
          <h2 className="text-white text-lg font-semibold mb-4">Filters</h2>

          {/* Year FROM - TO */}
          <div className="mb-6">
            <label className="text-gray-400 text-sm">Year</label>
            <div className="flex gap-2 mt-2">
              <input
                type="number"
                placeholder="From"
                className="w-1/2 bg-zinc-800 p-2 rounded-md text-white placeholder-gray-500"
              />
              <input
                type="number"
                placeholder="To"
                defaultValue={currentYear}
                className="w-1/2 bg-zinc-800 p-2 rounded-md text-white placeholder-gray-500"
              />
            </div>
          </div>

          {/* Rating */}
          <div className="mb-6">
            <label className="text-gray-400 text-sm">Rating</label>
            <select className="w-full mt-2 bg-zinc-800 p-2 rounded-md text-white">
              <option>All</option>
              <option>7+</option>
              <option>8+</option>
              <option>9+</option>
            </select>
          </div>

          {/* Sort */}
          <div>
            <label className="text-gray-400 text-sm">Sort By</label>
            <select className="w-full mt-2 bg-zinc-800 p-2 rounded-md text-white">
              <option>Popular</option>
              <option>Latest</option>
              <option>Top Rated</option>
            </select>
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex-1">

          {/* MOVIES GRID */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="bg-zinc-900 rounded-xl overflow-hidden hover:scale-105 transition cursor-pointer"
              >
                <div className="h-[200px] bg-zinc-800" />
                <div className="p-3">
                  <h3 className="text-sm font-semibold">Movie Title</h3>
                  <p className="text-xs text-gray-400">2024 • Action</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
    );
}

export default Filters;