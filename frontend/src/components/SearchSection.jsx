/* REACT */
import { useState, useEffect } from "react";

/* COMPONENTS */
import SearchBar from "./SearchBar";
import Grid from "./Grid";
import GridPagination from "./GridPagination";

/* HOOKS */
import { useSearchMovies } from "../hooks/useSearchMovies";

function SearchSection({ label, onOpenModal }) {

    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1);

    const {
        results,
        totalPages,
        loading
    } = useSearchMovies(query, page);

    useEffect(() => {
        setPage(1);
    }, [query]);

    return (
        <div className="min-h-screen bg-black text-white px-[25px]">

            {/* Hero */}
            <div className="w-full min-h-[100px] mt-[20px] py-4 flex flex-col items-center justify-center text-center">

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

                <Grid
                    catalog={results}
                    loading={loading}
                    onOpenModal={onOpenModal}
                />

                <GridPagination
                    currentPage={page}
                    totalPages={totalPages}
                    onPageChange={setPage}
                />

            </div>

        </div>
    );
}

export default SearchSection;