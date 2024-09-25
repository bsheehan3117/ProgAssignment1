import "./index.css";
import { TagProps } from "../../../../types/types";

/**
 * 
 * @param {TagProps} props - The props to be passed to the component.
 * @returns JSX.Element containing the tag.
 */
const Tag = ({ t, getQuestionCountByTag, clickTag }: TagProps) => {
    
    return (
        <div
            className="tagNode"
            onClick={() => {
                clickTag(t.name);
            }}
        >
            <div className="tagName">Tag Name</div>
            <div>0 questions</div>
        </div>
    );
};

export default Tag;
