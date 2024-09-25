import "./index.css";
import Tag from "./tag";
import { TagPageProps } from "../../../types/types";

/**
 * 
 * @param {TagPageProps} props - The props to be passed to the component.
 * @returns JSX.Element containing the tag page.
 */
const TagPage = ({
    tlist,
    getQuestionCountByTag,
    clickTag,
    handleNewQuestion,
}: TagPageProps) => {
    return (
        <>
            <div className="space_between right_padding">
                <div className="bold_title">{tlist.length} Tags</div>
                <div className="bold_title">All Tags</div>
                <button
                    className="bluebtn"
                    onClick={() => {
                        handleNewQuestion();
                    }}
                >
                    Ask a Question
                </button>
            </div>
            <div className="tag_list right_padding">
                {tlist.map((t, idx) => (
                    <Tag
                        key={idx}
                        t={t}
                        getQuestionCountByTag={getQuestionCountByTag}
                        clickTag={clickTag}
                    />
                ))}
            </div>
        </>
    );
};

export default TagPage;
