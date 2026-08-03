/* REACT */
import { useState, useEffect, useRef } from "react";

/* COMPONENTS */
import SearchBar from "./SearchBar";
import Grid from "./Grid";
import GridPagination from "./GridPagination";

/* HOOKS */
import { useSearchMovies } from "../hooks/useSearchMovies";

function SearchSection({ label, onOpenModal }) {

    const [query, setQuery] = useState("");
    const [debouncedQuery, setDebouncedQuery] = useState("");
    const [page, setPage] = useState(1);

    const {
        results,
        totalPages,
        loading
    } = useSearchMovies(debouncedQuery, page);

    const resultsRef = useRef(null);

    useEffect(() => {
        setPage(1);
    }, [query]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedQuery(query);
        }, 400);
        return () => clearTimeout(timeout);
    }, [query]);

    const handlePageChange = (nextPage) => {

        setPage(nextPage);

        resultsRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    };

    return (
        <div className="bg-black text-white mb-[100px]">

            {/* Hero */}
            <div ref={resultsRef} className="w-full min-h-[100px] mt-[20px] py-4 flex flex-col items-center justify-center text-center">

                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-violet-500">
                    {label === "movies"
                        ? "Search Movies"
                        : "Search Series"}
                </h1>

                <p className="text-gray-400 mt-2">
                    {label === "movies"
                        ? "Search by movie title."
                        : "Search by series title."}
                </p>
            </div>

            <SearchBar 
                value={query}
                onChange={setQuery}
                label={label}
            />

            <div className="mt-10">

                <div className="px-[15%]">
                    <Grid
                        catalog={results}
                        loading={loading}
                        onOpenModal={onOpenModal}
                        emptyTitle={"No Movies Found"}
                        emptyDescription={"Try to Search For a Different Movie."}
                    />

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

export default SearchSection;