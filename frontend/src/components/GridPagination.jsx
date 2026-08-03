/*REACT*/
import React from "react";

function GridPagination({
    currentPage,
    totalPages,
    onPageChange
}) {

    if (totalPages <= 1) return null;

    return (

        <div className="flex items-center justify-center gap-8 mt-12">

            <button
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
                className="px-5 py-2 rounded-lg bg-zinc-800 hover:bg-violet-600 disabled:opacity-40 disabled:hover:bg-zinc-800 transition"
            >
                Previous
            </button>

            <span className="text-gray-300">
                Page <span className="font-semibold text-white">{currentPage}</span> of {totalPages}
            </span>

            <button
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
                className="px-5 py-2 rounded-lg bg-zinc-800 hover:bg-violet-600 disabled:opacity-40 disabled:hover:bg-zinc-800 transition"
            >
                Next
            </button>

        </div>

    );
}

export default GridPagination;
                    
