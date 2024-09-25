import "./index.css";
import OrderButton from "./orderButton";
import { QuestionHeaderProps } from "../../../../types/types";

/**
 * 
 * @param {QuestionHeaderProps} props - The props to be passed to the component.
 * @returns JSX.Element containing the question header.
 */
const QuestionHeader = ({
    title_text,
    qcnt,
    setQuestionOrder,
    handleNewQuestion,
}: QuestionHeaderProps) => {
    return (
        <div>
            <div className="space_between right_padding">
                <div className="bold_title">{title_text}</div>
                <button
                    className="bluebtn"
                    onClick={() => {
                        handleNewQuestion();
                    }}
                >
                    Ask a Question
                </button>
            </div>
            <div className="space_between right_padding">
                <div id="question_count">{qcnt} questions</div>
                <div className="btns">
                    {["Newest", "Active", "Unanswered"].map((m, idx) => (
                        <OrderButton
                            key={idx}
                            message={m}
                            setQuestionOrder={setQuestionOrder}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default QuestionHeader;
