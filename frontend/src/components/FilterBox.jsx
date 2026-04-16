function FilterBox() {

  const currentYear = new Date().getFullYear();

    return (
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
    );
}

export default FilterBox;