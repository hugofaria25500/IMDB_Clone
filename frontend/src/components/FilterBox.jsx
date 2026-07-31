import { useState } from "react";

function FilterBox({ filters, onFilterChange }) {

  const currentYear = new Date().getFullYear();
  const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full lg:w-[250px] shrink-0">

          {/* Toggle button — visible only on mobile */}
          <button
            className="lg:hidden w-full flex items-center justify-between bg-zinc-900/70 text-white px-4 py-3 rounded-xl mb-2"
            onClick={() => setIsOpen(prev => !prev)}
          >
            <span className="font-semibold text-sm">Filters</span>
            <span className="text-violet-400 text-xs">{isOpen ? '▲ Hide' : '▼ Show'}</span>
          </button>

          <div className={`${isOpen ? 'block' : 'hidden'} lg:block bg-zinc-900/70 backdrop-blur-md p-5 rounded-xl h-fit lg:sticky`}>
          <h2 className="text-white text-lg font-semibold mb-4">Filters</h2>

          {/* Year FROM - TO */}
          <div className="mb-6">
            <label className="text-gray-400 text-sm">Year</label>

            <div className="flex gap-2 mt-2">

              {/* FROM */}
              <select
                className="w-1/2 bg-zinc-800 p-2 rounded-md text-white cursor-pointer"
                value={filters.yearFrom}
                onChange={(e) =>
                  onFilterChange({
                    yearFrom: e.target.value ? Number(e.target.value) : "",
                  })
                }
              >
                <option value="">From</option>

                {Array.from(
                  { length: currentYear - 1960 + 1 },
                  (_, i) => {
                    const year = currentYear - i;

                    return (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    );
                  }
                )}
              </select>

              {/* TO */}
              <select
                className="w-1/2 bg-zinc-800 p-2 rounded-md text-white cursor-pointer"
                value={filters.yearTo}
                onChange={(e) =>
                  onFilterChange({
                    yearTo: e.target.value ? Number(e.target.value) : "",
                  })
                }
              >
                <option value="">To</option>

                {Array.from(
                  {
                    length:
                      currentYear - (filters.yearFrom || 1960) + 1,
                  },
                  (_, i) => {
                    const year = currentYear - i;

                    if (year < (filters.yearFrom || 1960)) return null;

                    return (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    );
                  }
                )}
              </select>

            </div>
          </div>

          {/* Rating */}
          <div className="mb-6">
            <label className="text-gray-400 text-sm">Rating</label>
            <select className="w-full mt-2 bg-zinc-800 p-2 rounded-md text-white" value={filters.rating} onChange={(e) => onFilterChange({ rating: e.target.value })}>
              <option value="all">All</option>
              <option value={6}>6+</option>
              <option value={7}>7+</option>
              <option value={8}>8+</option>
              <option value={9}>9+</option>
            </select>
          </div>

          {/* Sort */}
          <div>
            <label className="text-gray-400 text-sm">Sort By</label>
            <select className="w-full mt-2 bg-zinc-800 p-2 rounded-md text-white" value={filters.sortBy} onChange={(e) => onFilterChange({ sortBy: e.target.value })}>
              <option value="alphabetical">Alphabetical</option>
              <option value="popular">Popular</option>
              <option value="latest">Latest</option>
              <option value="top_rated">Top Rated</option>
            </select>
          </div>
        </div>
        </div>
    );
}

export default FilterBox;