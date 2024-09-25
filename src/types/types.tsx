import { ReactNode } from "react";
import Question from "../models/question";
import Answer from "../models/answer";
import Tag from "../models/tag";

/**
 * The interface represents the props for the Header component.
 * it contains the search string and the function to set question page as per the search string.
 */
export interface HeaderProps {
    search: string;
    setQuesitonPage: (search: string, title: string) => void;
}

/**
 * The interface represents the props for the FakeStackOverflow component.
 * it contains the application data object.
 */
export interface FakeStackOverflowProps {
    app: ApplicationInterface;
}

/**
 * The interface represents the props for the Main component.
 * it contains the search string, 
 * application data object, and the title of the page.
 */
export interface MainProps {
    search: string;
    app: ApplicationInterface; 
    title: string;
    setQuesitonPage: (search?: string, title?: string) => void;
}

/**
 * The interface represents the props for Answer page component of a question.
 * it contains a question object, 
 * an array of answers, 
 * and functions to handle new question and new answer requests.
 */
export interface AnswerPageProps {
    question: {
        getAnswerCount: () => number;
        title: string;
        getQuestionViews: () => number;
        text: string;
        askedBy: string;
        calculateTimeElapsed: () => string;
    };
    ans: Array<{
        text: string;
        ansBy: string;
        calculateTimeElapsed: () => string;
    }>;
    handleNewQuestion: () => void;
    handleNewAnswer: () => void;
}

/**
 * The interface represents the props for the Answer component.
 * it contains the answer text, 
 * the person who answered, 
 * and the metadata of the answer.
 */
export interface AnswerProps {
    text: string;
    ansBy: string;
    meta: string;
}

/**
 * The interface represents the props for the AnswerHeader component.
 * it contains the number of answers, 
 * the title of the question, 
 * and the function to handle new question request.
 */
export interface AnswerHeaderProps {
    ansCount: number;
    title: string;
    handleNewQuestion: () => void;
}

/**
 * The interface represents the props for the QuestionBody component
 * of an answer. 
 */
export interface QuestionBodyProps {
  views: number;
  text: string;
  askby: string;
  meta: string;
}

/**
 * The interface represents the props for a form component.
 */
export interface FormProps {
    children: ReactNode;
} 

/**
 * The interface represents the props for a textual Input component.
 * Such components are typically used in form components.
 */
export interface InputProps {
    title: string;
    hint?: string;
    id: string;
    mandatory?: boolean;
    val: string;
    setState: (value: string) => void;
    err?: string;
}

/**
 * The interface represents the props for a text area component.
 * This component is typically used in form components.
 */
export interface TextareaProps {
    title: string;
    mandatory?: boolean;
    hint?: string;
    id: string;
    val: string;
    setState: (value: string) => void;
    err?: string;
}

/**
 * The interface represents the props for the NewAnswer component.
 * The component is used to represent a form to capture a new answer.
 */
export interface NewAnswerProps {
    qid: string;
    addAnswer: (qid: string, answer: { text: string; ansBy: string }) => void;
    handleAnswer: (qid: string) => void;
}

/**
 * The interface represents the props for the NewQuestion component.
 * The component is used to represent a form to capture a new question.
 */
export interface NewQuestionProps {
    addQuestion: (question: {
      title: string;
      text: string;
      tags: string[];
      askedBy: string;
    }) => void;
    handleQuestions: () => void;
}

/**
 * The interface represents the props for the Question component.
 * The component is used to render a question 
 * and metadata about the question.
 */
export interface QuestionProps {
    qid: string;
    title: string;
    text: string;
    tagIds: string[];
    askedBy: string;
    askDate: Date;
    ansIds: string[];
    views: number;
    getAnswerCount: () => number;
    getQuestionViews: () => number;
    getTagsId: () => string[];
    calculateTimeElapsed: () => string;
}

/**
 * The interface represents the props for the QuestionPage component.
 * The component is used to render a collection of questions.
 */
export interface QuestionPageProps {
    title_text: string;
    qlist: QuestionProps[];
    getTagById: (id: string) => Tag | null;
    setQuestionOrder: (order: string) => void;
    clickTag: (tagName: string) => void;
    handleAnswer: (qid: string) => void;
    handleNewQuestion: () => void;
}

/**
 * The interface represents the props for the QuestionHeader component.
 * The component is used to render the header of the question page.
 */
export interface QuestionHeaderProps {
    title_text: string;
    qcnt: number;
    setQuestionOrder: (order: string) => void;
    handleNewQuestion: () => void;
}

/**
 * The interface represents the props for the OrderButton component.
 * The component is used to display the question order buttons, 
 * which are used to sort the list of questions being displayed.
 */
export interface OrderButtonProps {
    message: string;
    setQuestionOrder: (order: string) => void;
}

/**
 * The interface represents the props for the TagPage component.
 * The component is used to render all the tags.
 */
export interface TagPageProps {
    tlist: Tag[];
    getQuestionCountByTag: (tid: string) => number;
    clickTag: (tagName: string) => void;
    handleNewQuestion: () => void;
}

/**
 * The interface represents the props for the Tag component.
 * The component is used to render a tag.
 */
export interface TagProps {
    t: Tag;
    getQuestionCountByTag: (tid: string) => number;
    clickTag: (tagName: string) => void;
}

/**
 * The interface represents the props for the SideBarNav component.
 * The component is used to render the side bar menu, 
 * which contains links to the questions and tags pages.
 */
export interface SideBarNavProps {
    selected?: string;
    handleQuestions: () => void;
    handleTags: () => void;
}

/**
 * The interface represents a function 
 * that takes no parameters and returns void.
 * The function may introduce side effects.
 */
export type NoParamHandler = () => void;

/**
 * A handler function to handle string parameters.
 * The function may introduce side effects.
 */
export type StringHandler = (param: string) => void;

/**
 * An exported type alias for handler functions.
 * Handler functions are used to handle user interactions.
 */
export type {
    StringHandler as HandleAnswer,
    StringHandler as ClickTag,
    StringHandler as SetQuestionOrder,
    NoParamHandler as HandleQuestions,
    NoParamHandler as HandleTags,
    NoParamHandler as HandleNewQuestion,
    NoParamHandler as HandleNewAnswer,
};

/**
 * A type alias for the function to set the question page
 * based on the search string and the title.
 */
export type SetQuestionPage = (search: string, title: string) => void;

/**
 * An interface for the Answer model
 */
export interface AnswerPropsInterface
 {
    aid: string;
    text: string;
    ansBy: string;
    ansDate: Date;
    calculateTimeElapsed: () => string;
}

/**
 * An interface for the Answer model constructor parameters
 */
export interface AnswerParamType
 {
    aid: string;
    text: string;
    ansBy: string;
    ansDate: Date;
}

/**
 * An interfae for the Question model
 */
export interface QuestionPropsInterface 
{
    qid: string;
    title: string;
    text: string;
    tagIds: string[];
    askedBy: string;
    askDate: Date;
    ansIds: string[];
    views: number;
    getAnswerCount: () => number;
    addAnswer: (aid: string) => void;
    getAnswersId: () => string[];
    getTagsId: () => string[];
    calculateTimeElapsed: () => string;
    getQuestionViews: () => number;
    addViewCount: () => void;
    setNewestAnswerDate: (date: Date) => void;
}

/**
 * An interface for the Question model constructor parameters
 */
export interface QuestionParamType {
    qid: string;
    title: string;
    text: string;
    tagIds: string[];
    askedBy: string;
    askDate: Date;
    ansIds: string[];
    views: number;
}

/**
 * An interface for the Tag model
 */
export interface TagParamType {
    tid: string;
    name: string;
}

/**
 * An interface for the Application model constructor parameters
 */
export interface ApplicationProps {
    questions: QuestionParamType[];
    tags: TagParamType[];
    answers: AnswerParamType[];
}


/**
 * An interface for the Application model
 */
export interface ApplicationInterface {
    questions: QuestionParamType[];
    tags: TagParamType[];
    answers: AnswerParamType[];
    addAnswer: (qid: string, answer: { text: string; ansBy: string }) => string;
    addQuestion: (question: {
        title: string;
        text: string;
        askedBy: string;
        tags: string[];
    }) => string;
    addTag: (tagname: string) => string;
    getQuestionCountByTag: (tid: string) => number;
    getQuestionsByFilter: (order?: string, search?: string) => Question[];
    getQuestionById: (qid: string) => Question | undefined;
    getQuestionAnswer: (question: Question | null) => Answer[];
    getTagCount: () => number;
    getTags: () => Tag[];
    getTagById: (id: string) => Tag | null;
}

