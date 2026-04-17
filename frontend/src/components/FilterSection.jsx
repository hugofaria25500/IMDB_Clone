/*REACT*/
import React, { useState, useEffect, useRef } from "react";

/*COMPONENTS*/
import SearchBar from "./SearchBar";
import QuickFilters from "./QuickFilters";
import FilterBox from "./FilterBox";
import Grid from "./Grid";
import GridPagination from "./GridPagination";

function FilterSection({ catalog }) {
  const pageSize = 24;

  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(catalog.length / pageSize);

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

  const fetchMovies = async (page) => {
    await new Promise((res) => setTimeout(res, 500));

    const start = (page - 1) * pageSize;
    const end = start + pageSize;

    return catalog.slice(start, end);
  };

  return (
    <div className="min-h-screen bg-black text-white px-[25px]">

      {/* HERO */}
      <div className="w-full h-[100px] mt-[50px] flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold text-violet-500">Your Movie Journey Starts Here</h1>
        <p className="text-gray-400 mt-2">Search and discover films you'll love</p>
      </div>

      <SearchBar />

      {/* QUICK FILTERS */}
      <QuickFilters />

      <div className="flex gap-8 px-6 mt-10">

        {/* FILTER BOX */}
        <FilterBox />
   
        <div className="flex-1">
          {/* MOVIES GRID */}
          <Grid catalog={movies} loading={loading} />

          {/* PAGINATION */}
          <GridPagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={(p) => setPage(p)}
          />  
        </div>

      </div>
    </div>
  );
}


export default FilterSection;