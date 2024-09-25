import "./index.css";
import QuestionHeader from "./header";
import Question from "./question";
import { QuestionPageProps } from "../../../types/types";

/**
 * 
 * @param {QuestionPageProps} props - The props to be passed to the component.
 * @default title_text - "All Questions"
 * @default qlist - []
 * @returns JSX.Element containing the QuestionHeader and the list of questions.
 * @returns JSX.Element containing a message if no questions are found.
 */
const QuestionPage = ({
    title_text = "All Questions",
    qlist = [],
    getTagById,
    setQuestionOrder,
    clickTag,
    handleAnswer,
    handleNewQuestion,
}: QuestionPageProps) => {
    return (
        <>
            <QuestionHeader
                title_text={title_text}
                qcnt={qlist.length}
                setQuestionOrder={setQuestionOrder}
                handleNewQuestion={handleNewQuestion}
            />        
            <div id="question_list" className="question_list">
                {qlist.map((q, idx) => (
                    <Question
                        q={q}
                        key={idx}
                        getTagById={getTagById}
                        clickTag={clickTag}
                        handleAnswer={handleAnswer}
                    />
                ))}
            </div>
            {title_text === "All Questions" && qlist.length === 0 && (
                <div className="bold_title right_padding">
                    No Questions Found
                </div>
            )}         
        </>
    );
};

export default QuestionPage;
