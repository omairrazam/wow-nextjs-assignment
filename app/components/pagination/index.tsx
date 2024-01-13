// Pagination.tsx

import { ChevronLeft } from "@/app/assets/icons/ChevronLeft";
import { ChevronRight } from "@/app/assets/icons/ChevronRight";
import React from "react";

interface PaginationProps {
  noOfPages: number[];
}

export const Pagination: React.FC<PaginationProps> = ({ noOfPages }) => {
  const activePage = 1;

  return (
    <div>
      <div className="flex items-center gap-4">
        <button
          className={`${activePage === 1 ? "text-zinc-300" : "text-zinc-500"}`}
        >
          <ChevronLeft />
        </button>
        <div className="flex items-center gap-2">
          {noOfPages.map((pageNumber) => (
            <div
              key={pageNumber}
              className={`cursor-pointer rounded-md w-8 h-8 flex items-center justify-center 
                          ${
                            pageNumber === activePage
                              ? "bg-black text-white"
                              : "bg-white text-zinc-500"
                          }
                          hover:bg-zinc-50 hover:text-zinc-500`}
            >
              {pageNumber}
            </div>
          ))}
        </div>
        <button className="text-zinc-500">
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};
