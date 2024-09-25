import { useState } from "react";

/**
 * Custom hook to manage the state of application's parent componet.
 * @returns {Object} - An object containing the search, mainTitle and setQuesitonPage.
 */
export const useFakeStackOverflow = () => {
    const [search, setSearch] = useState("");
    const [mainTitle, setMainTitle] = useState("All Questions");

    /**
     * A function to set the page.
     * @param {string} search - The search string.
     * @param {string} title - The title of the page.
     */
    const setQuesitonPage = (search = "", title = "All Questions") => {
        setSearch(search);
        setMainTitle(title);
    };

    return {
        search,
        mainTitle,
        setQuesitonPage,
    };
};