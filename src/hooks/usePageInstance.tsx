import { useState } from "react";
import HomePageClass from "../components/Main/routing/home";
import AnswerPageClass from "../components/Main/routing/answer";
import { MainProps } from "../types/types";

/**
 * Custom hook to manage the state of the page to be rendered.
 * @param {MainProps} props - The props to be passed to the component.
 * @returns {Object} - An object containing the pageInstance, handleQuestions and handleTags.
 */
const usePageInstance = ({ search, app, title, setQuesitonPage }: MainProps) => {
    /**
     * State variable to store the order of the questions.
     * @type {string}
     * @default "newest"
     */
    const [questionOrder, setQuestionOrder] = useState("newest");

    /**
     * State variable to store the id of the question being rendered.
     * @type {string}
     * @default ""
     */
    const [qid, setQid] = useState("");

    /**
     * sets {pageInstance} to render the page to display all questions.
     * @returns void
     * */
    const handleQuestions = () => {
        setQuesitonPage();
        setPageInstance(new HomePageClass(app, search, title, setQuesitonPage,
            questionOrder, setQuestionOrder, qid,
            handleQuestions, handleTags, handleAnswer,
            clickTag, handleNewQuestion, handleNewAnswer
        ));
    };

    /**
     * sets {pageInstance} to render the page to display all tags.
     * @returns void
     * */
    const handleTags = () => {
        console.log("handleTags");
    };

    /**
     * sets {pageInstance} to render the page to display the answer of a question.
     * @param {string} qid - The id of the question.
     * @returns void
     * */
    const handleAnswer = (qid: string) => {
        setQid(qid);
        setPageInstance(new AnswerPageClass(app, search, title, setQuesitonPage,
            questionOrder, setQuestionOrder, qid,
            handleQuestions, handleTags, handleAnswer,
            clickTag, handleNewQuestion, handleNewAnswer
        ));
    };

    /**
     * sets {pageInstance} to render the page to display all questions with a specific tag.
     * @param {string} tname - The name of the tag.
     * @returns void
     * */
    const clickTag = (tname: string) => {
        console.log(tname);
    };

    /**
     * sets {pageInstance} to render the page to create a new question.
     * @returns void
     */
    const handleNewQuestion = () => {
        console.log("handleNewQuestion");
    };

    /**
     * sets {pageInstance} to render the page to create a new answer.
     * @returns void
     */
    const handleNewAnswer = () => {
        console.log("handleNewAnswer");
    };

    /**
     * sets the initial page to render.
     * */
    const [pageInstance, setPageInstance] = useState(new HomePageClass(app, search, title, setQuesitonPage,
        questionOrder, setQuestionOrder, qid,
        handleQuestions, handleTags, handleAnswer,
        clickTag, handleNewQuestion, handleNewAnswer
    ));

    pageInstance.search = search;
    pageInstance.questionOrder = questionOrder;
    pageInstance.qid = qid;

    return {
        pageInstance,
        handleQuestions,
        handleTags
    };
};

export default usePageInstance;
