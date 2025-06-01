import React from "react";
import { FaSearch } from "react-icons/fa";
import Button from "@mui/material/Button";

const Search = () => {
  return (
    <div className="  bg-accent flex items-center justify-center gap-2 px-3 py-1 rounded w-full md:w-auto">
      <input
        type="text"
        placeholder="Search for products..."
        aria-label="Search"
        className="flex-1 md:flex-none min-w-[350px] md:w-auto px-3 py-1 rounded outline-none"
      />
      <Button
        variant="secondary"
        className=" !rounded-full !p-4 "
        aria-label="Search Button"
      >
        <FaSearch className="font-bold text-black text-xl " />
      </Button>
    </div>
  );
};

export default Search;
