import { useState, useEffect, useRef } from "react";

/* COMPONENTS */
import QuickFilters from "./QuickFilters";
import FilterBox from "./FilterBox";
import Grid from "./Grid";
import GridPagination from "./GridPagination";

/* JS */
import { useDiscoverMovies } from "../hooks/useDiscoverMovies";

function FilterSection({onOpenModal, label}) {

    const resultsRef = useRef(null);

    const [page, setPage] = useState(1);

    const [filters, setFilters] = useState({
        genre: null,
        yearFrom: "",
        yearTo: "",
        rating: "all",
        sortBy: "popularity.desc",
    });

    console.log(filters);
    const {
        results,
        totalPages,
        loading
    } = useDiscoverMovies(filters, page);

    useEffect(() => {
        setPage(1);
    }, [filters]);

    const handlePageChange = (nextPage) => {

        setPage(nextPage);

        resultsRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    };

    return (

        <div className="bg-black text-white">

            {/* Hero */}
            <div ref={resultsRef} className="w-full py-4 mt-5 flex flex-col items-center text-center">

                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-violet-500">
                    {label === "movies"
                        ? "Your Movie Journey Starts Here"
                        : "Discover Your Next Favorite Series"}
                </h1>

                <p className="text-gray-400 mt-2">
                    {label === "movies"
                        ? "Search and discover films you'll love"
                        : "Explore unforgettable stories, one episode at a time."}
                </p>

            </div>

            {/* Quick Genres */}
            <QuickFilters
                selectedGenre={filters.genre}
                onSelect={(genre) =>
                    setFilters(prev => ({
                        ...prev,
                        genre: prev.genre === genre ? null : genre
                    }))
                }
            />

            {/* Filters */}
            <div className="mt-8 flex justify-center">

                <FilterBox
                    filters={filters}
                    onFilterChange={(newFilters) =>
                        setFilters(prev => ({
                            ...prev,
                            ...newFilters
                        }))
                    }
                />

            </div>

            {/* Results */}
            <div
                ref={resultsRef}
                className="mt-10 px-[15%]"
            >

                <Grid
                    catalog={results}
                    loading={loading}
                    onOpenModal={onOpenModal}
                />

                <GridPagination
                    currentPage={page}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />

            </div>

        </div>

    );

}

export default FilterSection;