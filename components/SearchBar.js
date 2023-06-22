"use client";

import SearchManufacturer from "../components/SearchManufacturer";
import SearchDate from "../components/SearchDate";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

function SearchBar() {
  return (
    <form className="flex items-center justify-start max-sm:flex-col w-full max-sm:gap-4 max-w-3xl mt-4">
      <div className="sm:flex-1 max-sm:w-full sm:flex justify-start sm:items-start sm:shadow-none shadow-md relative">
        <SearchManufacturer />
        <SearchDate />
        {/* <div className=" absolute h-full right-0 top-0 max-sm:hidden flex max-sm:w-full max-sm:mt-4  justify-center items-start border-[1px] max-sm:rounded-[4px] sm:rounded-r-full sm:shadow-md border-[#F3C974] bg-[#F3C974]/0  hover:bg-[#F3C974]/100 hover:text-gray-800 transition duration-300 ease-in-out">
          <button className="py-1 px-4">
            <MagnifyingGlassIcon className="w-6 h-6" />
          </button>
        </div> */}
      </div>
      <div className=" flex max-sm:w-full max-sm:mt-4  justify-center items-start border-[1px] max-sm:rounded-[4px] sm:rounded-r-full sm:shadow-md border-[#F3C974] bg-[#F3C974]/0  hover:bg-[#F3C974]/100 hover:text-gray-800 transition duration-300 ease-in-out">
          <button className="py-2 px-4">
            <MagnifyingGlassIcon className="w-6 h-6" />
          </button>
        </div>
    </form>
  );
}

export default SearchBar;
