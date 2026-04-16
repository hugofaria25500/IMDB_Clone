import React, { useState, useEffect, useRef } from "react";

const currentYear = new Date().getFullYear();

// MOCK DATA (with real TMDB posters)
const moviesMock = [
  { id: 1, title: "Inception", year: 2010, rating: 8.8, image: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg" },
  { id: 2, title: "The Dark Knight", year: 2008, rating: 9.0, image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg" },
  { id: 3, title: "Interstellar", year: 2014, rating: 8.6, image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg" },
  { id: 4, title: "Gladiator", year: 2000, rating: 8.5, image: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg" },
  { id: 5, title: "The Matrix", year: 1999, rating: 8.7, image: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg" },
  { id: 6, title: "Fight Club", year: 1999, rating: 8.8, image: "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg" },
  { id: 7, title: "Pulp Fiction", year: 1994, rating: 8.9, image: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg" },
  { id: 8, title: "The Godfather", year: 1972, rating: 9.2, image: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg" },
  { id: 9, title: "Avengers: Endgame", year: 2019, rating: 8.4, image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg" },
  { id: 10, title: "Joker", year: 2019, rating: 8.5, image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg" },
  { id: 11, title: "Titanic", year: 1997, rating: 7.9, image: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg" },
  { id: 12, title: "Avatar", year: 2009, rating: 7.9, image: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg" },
  { id: 13, title: "The Batman", year: 2022, rating: 7.8, image: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg" },
  { id: 14, title: "Dune", year: 2021, rating: 8.0, image: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg" },
  { id: 15, title: "John Wick", year: 2014, rating: 7.4, image: "https://image.tmdb.org/t/p/w500/5vHssUeVe25bMrof1HyaPyWgaP.jpg" },
  { id: 16, title: "Inception", year: 2010, rating: 8.8, image: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg" },
  { id: 17, title: "The Dark Knight", year: 2008, rating: 9.0, image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg" },
  { id: 18, title: "Interstellar", year: 2014, rating: 8.6, image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg" },
  { id: 19, title: "Gladiator", year: 2000, rating: 8.5, image: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg" },
  { id: 20, title: "The Matrix", year: 1999, rating: 8.7, image: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg" },
  { id: 21, title: "Fight Club", year: 1999, rating: 8.8, image: "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg" },
  { id: 22, title: "Pulp Fiction", year: 1994, rating: 8.9, image: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg" },
  { id: 23, title: "The Godfather", year: 1972, rating: 9.2, image: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg" },
  { id: 24, title: "Avengers: Endgame", year: 2019, rating: 8.4, image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg" },
  { id: 25, title: "Joker", year: 2019, rating: 8.5, image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg" },
  { id: 26, title: "Titanic", year: 1997, rating: 7.9, image: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg" },
  { id: 27, title: "Avatar", year: 2009, rating: 7.9, image: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg" },
  { id: 28, title: "The Batman", year: 2022, rating: 7.8, image: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg" },
  { id: 29, title: "Dune", year: 2021, rating: 8.0, image: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg" },
  { id: 30, title: "John Wick", year: 2014, rating: 7.4, image: "https://image.tmdb.org/t/p/w500/5vHssUeVe25bMrof1HyaPyWgaP.jpg" },
  { id: 31, title: "Inception", year: 2010, rating: 8.8, image: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg" },
  { id: 32, title: "The Dark Knight", year: 2008, rating: 9.0, image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg" },
  { id: 33, title: "Interstellar", year: 2014, rating: 8.6, image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg" },
  { id: 34, title: "Gladiator", year: 2000, rating: 8.5, image: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg" },
  { id: 35, title: "The Matrix", year: 1999, rating: 8.7, image: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg" },
  { id: 36, title: "Fight Club", year: 1999, rating: 8.8, image: "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg" },
  { id: 37, title: "Pulp Fiction", year: 1994, rating: 8.9, image: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg" },
  { id: 38, title: "The Godfather", year: 1972, rating: 9.2, image: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg" },
  { id: 39, title: "Avengers: Endgame", year: 2019, rating: 8.4, image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg" },
  { id: 40, title: "Joker", year: 2019, rating: 8.5, image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg" },
  { id: 41, title: "Titanic", year: 1997, rating: 7.9, image: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg" },
  { id: 42, title: "Avatar", year: 2009, rating: 7.9, image: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg" },
  { id: 43, title: "The Batman", year: 2022, rating: 7.8, image: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg" },
  { id: 44, title: "Dune", year: 2021, rating: 8.0, image: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg" },
  { id: 45, title: "John Wick", year: 2014, rating: 7.4, image: "https://image.tmdb.org/t/p/w500/5vHssUeVe25bMrof1HyaPyWgaP.jpg" },
];

const seriesMock = [
  { id: 101, title: "Breaking Bad", year: 2008, rating: 9.5, image: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg" },
  { id: 102, title: "Game of Thrones", year: 2011, rating: 9.2, image: "https://image.tmdb.org/t/p/w500/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg" },
  { id: 103, title: "Stranger Things", year: 2016, rating: 8.7, image: "https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg" },
  { id: 104, title: "The Office", year: 2005, rating: 8.9, image: "https://image.tmdb.org/t/p/w500/qWnJzyZhyy74gjpSjIXWmuk0ifX.jpg" },
  { id: 105, title: "Friends", year: 1994, rating: 8.9, image: "https://image.tmdb.org/t/p/w500/f496cm9enuEsZkSPzCwnTESEK5s.jpg" },
  { id: 106, title: "The Mandalorian", year: 2019, rating: 8.8, image: "https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg" },
  { id: 107, title: "Dark", year: 2017, rating: 8.8, image: "https://image.tmdb.org/t/p/w500/5LoLkH9nC6u3s4Qh6w3w4z1yXyS.jpg" },
  { id: 108, title: "The Witcher", year: 2019, rating: 8.2, image: "https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg" },
  { id: 109, title: "Peaky Blinders", year: 2013, rating: 8.8, image: "https://image.tmdb.org/t/p/w500/bGZn5RVzMMXju4ev7xbl1aLdXqq.jpg" },
  { id: 110, title: "Loki", year: 2021, rating: 8.2, image: "https://image.tmdb.org/t/p/w500/voHUmluYmKyleFkTu3lOXQG702u.jpg" },
];

// fake API with pagination
const pageSize = 24;

const fetchMovies = async (page) => {
  await new Promise((res) => setTimeout(res, 500));

  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  return moviesMock.slice(start, end);
};

function Filters() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(moviesMock.length / pageSize);

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const cache = useRef({});

  useEffect(() => {
    let isMounted = true;

    const load = async () => {
      if (cache.current[page]) {
        setMovies(cache.current[page]);
        return;
      }

      setLoading(true);
      const data = await fetchMovies(page);

      if (!isMounted) return;

      cache.current[page] = data;
      setMovies(data);
      setLoading(false);

      if (!cache.current[page + 1] && page < totalPages) {
        fetchMovies(page + 1).then((nextData) => {
          cache.current[page + 1] = nextData;
        });
      }
    };

    load();

    return () => {
      isMounted = false;
    };
  }, [page]);

  const getPages = () => {
    let start = Math.max(page - 2, 1);
    let end = Math.min(start + 4, totalPages);

    if (end - start < 4) {
      start = Math.max(end - 4, 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  return (
    <div className="min-h-screen bg-black text-white px-[25px]">

      {/* HERO */}
      <div className="w-full h-[100px] mt-[50px] flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold text-violet-500">Your Movie Journey Starts Here</h1>
        <p className="text-gray-400 mt-2">Search and discover films you'll love</p>
      </div>

      {/* SEARCH BAR */}
      <div className="w-full flex justify-center mt-6 px-4">
        <div className="w-full md:w-[60%] relative">
          <input
            type="text"
            placeholder="Search for movies..."
            className="w-full p-4 pl-12 rounded-xl bg-zinc-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            🔍
          </span>
        </div>
      </div>

      {/* QUICK FILTERS */}
      <div className="w-full flex justify-center mt-6 px-4">
        <div className="flex gap-3 overflow-x-auto max-w-[800px]">
          {["Action", "Comedy", "Drama", "Horror", "Sci-Fi"].map((genre) => (
            <button
              key={genre}
              className="px-4 py-2 rounded-full bg-zinc-800 text-gray-300 hover:bg-purple-600 hover:text-white transition-all duration-300 whitespace-nowrap"
            >
              {genre}
            </button>
          ))}
        </div>
      </div>

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

          {/* PAGINATION */}
          <div className="flex justify-center mt-10 gap-2 flex-wrap">

            <button
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              disabled={page === 1}
              className="px-4 py-2 rounded-md bg-zinc-800 disabled:opacity-50 hover:bg-purple-600 transition"
            >
              Prev
            </button>

            {getPages().map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`px-4 py-2 rounded-md transition-all duration-300 ${
                  page === p
                    ? "bg-purple-600 text-white"
                    : "bg-zinc-800 hover:bg-purple-600"
                }`}
              >
                {p}
              </button>
            ))}

            <button
              onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
              disabled={page === totalPages}
              className="px-4 py-2 rounded-md bg-zinc-800 disabled:opacity-50 hover:bg-purple-600 transition"
            >
              Next
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}


export default Filters;