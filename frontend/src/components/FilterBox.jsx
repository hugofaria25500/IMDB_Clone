import { useState } from "react";

function FilterBox({ filters, onFilterChange, showYear = true}) {

  const currentYear = new Date().getFullYear();
  const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-[50%] max-w-6xl bg-zinc-900/70 rounded-xl p-2">

          <div className="flex flex-row w-full gap-6">

            {showYear && (

              <div className="w-1/3">
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

            )}

            {/* Rating */}
            <div className={showYear ? "w-1/3" : "w-1/2"}>
              <label className="text-gray-400 text-sm">Rating</label>
              <select className="w-full mt-2 bg-zinc-800 p-2 rounded-md text-white" value={filters.rating} onChange={(e) =>
                  onFilterChange({
                      rating:
                          e.target.value === "all"
                              ? "all"
                              : parseFloat(e.target.value),
                  })
              }>
                <option value="all">All</option>
                <option value={6}>6+</option>
                <option value={7}>7+</option>
                <option value={8}>8+</option>
                <option value={9}>9+</option>
              </select>
            </div>

            {/* Sort */}
            <div className={showYear ? "w-1/3" : "w-1/2"}>
              <label className="text-gray-400 text-sm">Sort By</label>
              <select className="w-full mt-2 bg-zinc-800 p-2 rounded-md text-white" value={filters.sortBy} onChange={(e) => onFilterChange({ sortBy: e.target.value })}>
                {showYear && (
                  <option value="popularity.desc">Most Popular</option>
                )}
                <option value="vote_average.desc">Top Rated</option>
                <option value="release_date.desc">Latest Releases</option>
                <option value="title.asc">Alphabetical</option>
              </select>
            </div>

          </div>

        </div>
    );
}

export default FilterBox;