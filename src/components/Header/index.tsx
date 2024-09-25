import "./index.css";
import { HeaderProps } from "../../types/types";

/**
 * A functional component representing the Header containing a title and a search bar.
 * @param props containing the search string and the function to set question page as per the search string. 
 * @returns JSX.Element containing Header component.
 * @uses {useHeader} hook.
 */
const Header = ({ search, setQuesitonPage }: HeaderProps) => {

    return (
        <div id="header" className="header">
            <div></div>
            <div className="title">Fake Stack Overflow</div>
            <input
                id="searchBar"
                placeholder="Search ..."
                type="text"
            />
        </div>
    );
};

export default Header;
