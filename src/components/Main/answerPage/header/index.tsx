import { AnswerHeaderProps } from "../../../../types/types";
import "./index.css";

/**
 * The component is used to render the header part of the answer page.
 * @param {AnswerHeaderProps} props - The props to be passed to the component.
 * @returns JSX.Element containing the answer header.
 */
const AnswerHeader = () => {
    return (
        <div id="answersHeader" className="space_between right_padding">
            Answer Header
        </div>
    );
};

export default AnswerHeader;
