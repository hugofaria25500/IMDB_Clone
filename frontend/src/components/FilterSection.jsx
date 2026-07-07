/*REACT*/
import React, { useState, useEffect, useRef, useMemo } from "react";

/*COMPONENTS*/
import SearchBar from "./SearchBar";
import QuickFilters from "./QuickFilters";
import FilterBox from "./FilterBox";
import Grid from "./Grid";
import GridPagination from "./GridPagination";

function FilterSection({ catalog = [], onOpenModal, loading = false }) {
  const pageSize = 24;
  const scrollOffset = 300;

  const [page, setPage] = useState(1);
  const [isPageLoading, setIsPageLoading] = useState(false);
  const resultsRef = useRef(null);

  const [filters, setFilters] = useState({
    search: "",
    genre: null,
    yearFrom: "",
    yearTo: "",
    rating: "all",
    sortBy: "popular",
  });

  const filteredCatalog = useMemo(() => {

    let result = catalog;

     if (filters.search) {
        result = result.filter(movie => movie.title.toLowerCase().includes(filters.search.toLowerCase()));
    }

    if (filters.genre) {
        result = result.filter(movie =>
            movie.genres.includes(filters.genre)
        );
    }

    return result;

  }, [catalog, filters]);

  /* Keep at least one page available while the catalog is still loading. */
  const totalPages = Math.max(Math.ceil(filteredCatalog.length / pageSize), 1);

  /* The current page decides which slice of the catalog is shown in the grid. */
  const firstItemIndex = (page - 1) * pageSize;
  const lastItemIndex = firstItemIndex + pageSize;
  const paginatedCatalog = filteredCatalog.slice(firstItemIndex, lastItemIndex);

  /* When the catalog changes, return to page one so the page number never feels stale. */
  useEffect(() => {
    setPage(1);
  }, [catalog]);

  useEffect(() => {
    setPage(1);
  }, [filters.search, filters.genre, filters.yearFrom, filters.yearTo, filters.rating, filters.sortBy]);

  const scrollToResults = () => {
    if (!resultsRef.current) return;

    const resultsTop =
      resultsRef.current.getBoundingClientRect().top +
      window.scrollY -
      scrollOffset;

    window.scrollTo({
      top: resultsTop,
      behavior: "smooth",
    });
  };

  const getValidPage = (nextPage) => {
    return Math.min(Math.max(nextPage, 1), totalPages);
  };

 const handlePageChange = async (nextPage) => {
      const validPage = getValidPage(nextPage);

      if (validPage === page) return;

      setPage(validPage);
      scrollToResults();

      setIsPageLoading(true);
      // delay fake
      await new Promise(resolve => setTimeout(resolve, 800));
      setIsPageLoading(false);
  };    

  return (
    <div className="min-h-screen bg-black text-white px-[25px]">
      {/* Hero section */}
      <div className="w-full h-[100px] mt-[50px] flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold text-violet-500">Your Movie Journey Starts Here</h1>
        <p className="text-gray-400 mt-2">Search and discover films you'll love</p>
      </div>

      <SearchBar value={filters.search} onChange={(value) => setFilters(prev => ({...prev, search: value,}))} />

      {/* Fast category shortcuts above the full filter area */}
      <QuickFilters selectedGenre={filters.genre}
        onSelect={(genre) =>
            setFilters(prev => ({
                ...prev,
                genre: prev.genre === genre ? null : genre,
            }))
        } />

      <div ref={resultsRef} className="flex gap-8 px-6 mt-10">
        {/* Left column with the detailed filters */}
        <FilterBox />

        <div className="flex-1">
          {/* Only the items for the selected page reach the grid */}
          <Grid catalog={paginatedCatalog} onOpenModal={onOpenModal} loading={loading || isPageLoading} />

          {/* Page controls send the next page request back to this component */}
          <GridPagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
}

export default FilterSection;
