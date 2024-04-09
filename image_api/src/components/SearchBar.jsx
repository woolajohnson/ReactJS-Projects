import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    const handleSearch = () => {
        onSearch(query);
    };

    return (
        <header className="h-[8rem] bg-slate-800 flex justify-center items-center">
            <input
                type="search"
                placeholder="Search anything..."
                className="p-2 w-[16rem] rounded-tl rounded-bl indent-2 outline-none"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button
                className="bg-blue-600 text-white py-2 px-5 rounded-tr rounded-br"
                onClick={handleSearch}
            >
                Search
            </button>
        </header>
    );
};

export default SearchBar;
