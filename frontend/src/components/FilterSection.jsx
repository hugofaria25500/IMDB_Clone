/*REACT*/
import React, { useState, useEffect, useRef } from "react";

/*COMPONENTS*/
import SearchBar from "./SearchBar";
import QuickFilters from "./QuickFilters";
import FilterBox from "./FilterBox";
import Grid from "./Grid";
import GridPagination from "./GridPagination";

function FilterSection({ catalog = [], loading = false }) {
  const pageSize = 24;
  const scrollOffset = 300;

  const [page, setPage] = useState(1);
  const resultsRef = useRef(null);

  /* Keep at least one page available while the catalog is still loading. */
  const totalPages = Math.max(Math.ceil(catalog.length / pageSize), 1);

  /* The current page decides which slice of the catalog is shown in the grid. */
  const firstItemIndex = (page - 1) * pageSize;
  const lastItemIndex = firstItemIndex + pageSize;
  const paginatedCatalog = catalog.slice(firstItemIndex, lastItemIndex);

  /* When the catalog changes, return to page one so the page number never feels stale. */
  useEffect(() => {
    setPage(1);
  }, [catalog]);

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

  const handlePageChange = (nextPage) => {
    const validPage = getValidPage(nextPage);

    if (validPage === page) return;

    setPage(validPage);
    scrollToResults();
  };

  return (
    <div className="min-h-screen bg-black text-white px-[25px]">
      {/* Hero section */}
      <div className="w-full h-[100px] mt-[50px] flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold text-violet-500">Your Movie Journey Starts Here</h1>
        <p className="text-gray-400 mt-2">Search and discover films you'll love</p>
      </div>

      <SearchBar />

      {/* Fast category shortcuts above the full filter area */}
      <QuickFilters />

      <div ref={resultsRef} className="flex gap-8 px-6 mt-10">
        {/* Left column with the detailed filters */}
        <FilterBox />

        <div className="flex-1">
          {/* Only the items for the selected page reach the grid */}
          <Grid catalog={paginatedCatalog} loading={loading} />

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
