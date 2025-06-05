import { useState } from "react";

import SearchContext from "../context/SearchContext";

const SearchProvider = ({ children }) => {
    const [searchValue, setSearchValue] = useState("");

    const changeSearchValue = (value) => {
        setSearchValue(value);
    };

    const resetSearchValue = () => {
        setSearchValue("");
    };

    return (
        <SearchContext.Provider
            value={{ searchValue, changeSearchValue, resetSearchValue }}
        >
            {children}
        </SearchContext.Provider>
    );
};

export default SearchProvider;
