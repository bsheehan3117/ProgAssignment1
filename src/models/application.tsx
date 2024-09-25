import Question from "./question";
import Tag from "./tag";
import Answer from "./answer";
import { ApplicationInterface, ApplicationProps } from "../types/types";

/**
 * This class represents the application model.
 * It contains the questions, tags, and answers.
 * @implements {ApplicationInterface}
 */

export default class Application implements ApplicationInterface {

    private static instance: Application; /* Singleton instance */
    questions: Question[]; /* List of questions */
    tags: Tag[];        /* List of tags */
    answers: Answer[];  /* List of answers */

    /**
     * Creates an instance of Application.
     * @param {ApplicationProps} data - The data to be used for creating the instance.
     */
    private constructor({ questions, tags, answers }: ApplicationProps) {
        this.questions = [];
        this.tags = [];
        this.answers = [];

        questions.forEach((q) => {
            this.questions.push(new Question(q));
        });
        
        tags.forEach((t) => {
            this.tags.push(new Tag(t));
        });

        answers.forEach((a) => {
            this.answers.push(new Answer(a));
        });
    }

    /**
     * Gets the singleton instance of Application.
     * @param {ApplicationProps} data - The data to be used for creating the instance.
     * @returns {Application} The singleton instance of Application.
     */
    public static getInstance(data: ApplicationProps): Application {
        if (!Application.instance) {
            Application.instance = new Application(data);
        }
        return Application.instance;
    }

    /**
     * Adds an answer to a question.
     * @param {string} qid - The id of the question.
     * @param {{ text: string; ansBy: string }} answer - The answer to be added.
     * @returns {string} The id of the answer.
     */
    addAnswer = (qid: string, answer: { text: string; ansBy: string }) => {
        return "aid";
    };

    /**
     * Adds a question to the list of questions in the application.
     * @param {{ title: string; text: string; askedBy: string; tags: string[] }} question - The question to be added.
     * @returns {string} The id of the question added.
     */
    addQuestion = (question: {
        title: string;
        text: string;
        askedBy: string;
        tags: string[];
    }) => {
        return "qid";
    };

    /**
     * Adds a tag to the list of tags in the application if it doesn't already exist.
     * @param {string} tagname - The name of the tag to be added.
     * @returns {string} The id of the tag added.
     */
    addTag = (tagname: string) => {
        return "tid";
    };

    /**
     * Finds number of questions with the given tag.
     * @param tid 
     * @returns {number} The number of questions with the given tag.
     */
    getQuestionCountByTag = (tid: string) => {
        return 0;
    };

    /**
     * Finds questions based on the order and search filters.
     * @param {string} order - The order of the questions.
     * order can be "newest", "unanswered", "active".
     * @param {string} search - The search string.
     * @returns {Question[]} The list of questions based on the filter.
     */
    getQuestionsByFilter = (order = "newest", search = "") => {
        return [];
    };

    /** 
     * Finds a question by its id.
     * @param {string} qid - The id of the question.
     * @returns {Question | undefined} The question with the given id.
     * */
    getQuestionById = (qid: string) => {
        return undefined;
    };

    /**
     * gets a list of answers for a question.
     * @param question | null
     * @returns Answer[]
     */
    getQuestionAnswer = (question: Question | null) => {
        return [];
    };

    /**
     * Gets the number of tags in the application.
     * @returns {number} The number of tags in the application.
     * */
    getTagCount = (): number => {
        return 0;
    };

    /**
     * Gets the list of tags in the application.
     * @returns {Tag[]} The list of tags in the application.
     */
    getTags = (): Tag[] => {
        return [];
    };

    /**
     * Gets a tag by its id.
     * @param {string} id - The id of the tag.
     * @returns {Tag | null} The tag with the given id.
     */
    getTagById = (id: string): Tag | null => {
        return null;
    };
}
