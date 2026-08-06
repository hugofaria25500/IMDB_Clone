import { useState, useEffect, useRef } from "react";

/* COMPONENTS */
import QuickFilters from "./QuickFilters";
import FilterBox from "./FilterBox";
import Grid from "./Grid";
import GridPagination from "./GridPagination";

/* JS */
import { useDiscoverMovies } from "../hooks/movies/useDiscoverMovies";

function DiscoverSection({ type, onOpenModal, filters, setFilters, genres, genresLoading, page, setPage, results, totalPages, loading }) {

    const resultsRef = useRef(null);

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
            <div
                ref={resultsRef}
                className="w-full py-4 mt-5 flex flex-col items-center text-center"
            >

                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-violet-500">
                    {type === "movies"
                        ? "Your Movie Journey Starts Here"
                        : "Discover Your Next Favorite Series"}
                </h1>

                <p className="text-gray-400 mt-2">
                    {type === "movies"
                        ? "Browse thousands of movies using powerful filters."
                        : "Discover series by genre, rating and release year."}
                </p>

            </div>

            <QuickFilters
                genres={genres}
                loading={genresLoading}
                selectedGenre={filters.genre}
                onSelect={(genre) =>
                    setFilters(prev => ({
                        ...prev,
                        genre: prev.genre === genre ? null : genre
                    }))
                }
            />

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

            <div
                ref={resultsRef}
                className="mt-10 px-[15%]"
            >

                <Grid
                    type={type}
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

export default DiscoverSection;