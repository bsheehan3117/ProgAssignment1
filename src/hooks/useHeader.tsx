import { useState } from "react";

/*
    * Custom hook to manage the state of header component.
    * @param {string} search - The search string.
    * @param {(string, string) => void} setQuesitonPage - The function to set header with search string and page title.
    * @returns {Object} - An object containing the val, handleInputChange, handleKeyDown and handleSearch.
    */
export const useHeader = (search: string, setQuesitonPage: (search: string, title: string) => void) => {
    const [val, setVal] = useState(search);

    const handleSearch = () => {
        setQuesitonPage(val, "Search Results");
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVal(e.target.value);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleSearch();
        }
    };

    return {
        val,
        handleInputChange,
        handleKeyDown,
        handleSearch
    };
};