import { useCallback } from "react";
import "./index.css";
import { SideBarNavProps } from "../../../types/types";

/**
 * 
 * @param {SideBarNavProps} props - The props to be passed to the component.
 * @returns JSX.Element containing the SideBarNav component.
 */
const SideBarNav = ({ selected = "", handleQuestions, handleTags }: SideBarNavProps) => {
    const handleKeyDown = useCallback((e: { key: string; }, handler: () => void) => {
        if (e.key === 'Enter' || e.key === ' ') {
            handler();
        }
    }, []);

    return (
        <div id="sideBarNav" className="sideBarNav">
            <div
                id="menu_question"
                className={`menu_button ${selected === "q" ? "menu_selected" : ""
                    }`}
                onClick={handleQuestions}
                onKeyDown={(e) => handleKeyDown(e, handleQuestions)}
                role="button"
                tabIndex={0}
            >
                Questions
            </div>
            <div
                id="menu_tag"
                className={`menu_button ${selected === "t" ? "menu_selected" : ""
                    }`}
                onClick={handleTags}
                onKeyDown={(e) => handleKeyDown(e, handleTags)}
                role="button"
                tabIndex={0}
            >
                Tags
            </div>
        </div>
    );
};

export default SideBarNav;
