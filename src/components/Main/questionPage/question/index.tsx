import { useCallback } from "react";
import "./index.css";
import { QuestionProps, TagParamType } from "../../../../types/types";

interface qComponentProps {
    q: QuestionProps;
    getTagById: (tid: string) => TagParamType | null;
    clickTag: (tagName: string) => void;
    handleAnswer: (qid: string) => void;
}

/**
 * 
 * @param {qComponentProps} props - The props to be passed to the component.
 * @returns JSX.Element containing the question details.
 */
const Question = ({ q, getTagById, clickTag, handleAnswer }: qComponentProps) => {
    const handleQuestionClick = useCallback(() => {
        handleAnswer(q.qid);
    }, [handleAnswer, q.qid]);

    const handleKeyDown = useCallback((e: { key: string; }) => {
        if (e.key === 'Enter' || e.key === ' ') {
            handleQuestionClick();
        }
    }, [handleQuestionClick]);
    return (
        <div
            className="question right_padding"
            onClick={handleQuestionClick}
            onKeyDown={handleKeyDown}
            role="button"
            tabIndex={0}
        >
            <div className="postStats">
                <div>{q.getAnswerCount()} answers</div>
                <div>{q.getQuestionViews()} views</div>
            </div>
            <div className="question_mid">
                <div className="postTitle">{q.title}</div>
                <div className="question_tags">
                    {q.getTagsId().map((tid, idx) => {
                        const t = getTagById(tid);
                        return (
                            <button
                                key={idx}
                                className="question_tag_button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    clickTag(t == null ? "" : t.name);
                                }}
                            >
                                {t?.name}
                            </button>
                        );
                    })}
                </div>
            </div>
            <div className="lastActivity">
                <div className="question_author">{q.askedBy}</div>
                <div>&nbsp;</div>
                <div className="question_meta">
                    asked {q.calculateTimeElapsed()}
                </div>
            </div>
        </div>
    );
};

export default Question;
