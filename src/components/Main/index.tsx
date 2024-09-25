import "./index.css";
import SideBarNav from "./sideBarNav";

import usePageInstance from "../../hooks/usePageInstance";
import { MainProps } from "../../types/types";

/**
 * The component is used to render the main content of the page.
 * The content of the page is determined by user interaction.
 * @uses {usePageInstance} hook.
 * @param {MainProps} props - The props to be passed to the component.
 * @returns JSX.Element containing SideBarNav and the content of the page.
 */
const Main = ({ search, app, title, setQuesitonPage }: MainProps) => {
    const {
        pageInstance,
        handleQuestions,
        handleTags
    } = usePageInstance({search, app, title, setQuesitonPage});

    return (
        <div id="main" className="main">
            <SideBarNav
                selected={pageInstance.getSelected()}
                handleQuestions={handleQuestions}
                handleTags={handleTags}
            />
            <div id="right_main" className="right_main">
                {pageInstance.getContent()}
            </div>
        </div>
    );
};

export default Main;
