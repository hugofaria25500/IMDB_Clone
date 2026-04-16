/*REACT*/
import React, { useState, useEffect, useRef } from "react";

function GridPagination({ currentPage, totalPages }) {

    const page = currentPage;
    
    const getPages = () => {
        let start = Math.max(page - 2, 1);
        let end = Math.min(start + 4, totalPages);
        if (end - start < 4) {
            start = Math.max(end - 4, 1);
        }   
        return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    };

    {/* PAGINATION */}
    return (
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
    );
}

export default GridPagination;
                    