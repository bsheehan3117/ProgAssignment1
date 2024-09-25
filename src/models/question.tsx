import { getMetaData } from "../utils/index";
import { QuestionParamType, QuestionPropsInterface } from "../types/types";

/**
 * This class represents the question model.
 * It contains the question details.
 * @implements {QuestionPropsInterface}
 */
export default class Question implements QuestionPropsInterface {
    qid: string;
    title: string;
    text: string;
    tagIds: string[];
    askedBy: string;
    askDate: Date;
    ansIds: string[];
    views: number;
    newAnsDate?: Date;

    /**
     * Creates an instance of Question.
     * @param {QuestionParamType} param - The data to be used for creating the instance.
     */
    constructor({ qid, title, text, tagIds, askedBy, askDate, ansIds, views }: QuestionParamType) {
        this.qid = qid;
        this.title = title;
        this.text = text;
        this.tagIds = tagIds;
        this.askedBy = askedBy;
        this.askDate = askDate;
        this.ansIds = ansIds;
        this.views = views;
    }

    /**
     * 
     * @returns {number} The number of answers for the question.
     */
    getAnswerCount(): number {
        return this.ansIds.length;
    }

    /**
     * Adds an answer to the question.
     * @param {string} aid - The id of the answer.
     */
    addAnswer(aid: string) {
        console.log("Adding answer to question");
    }

    /**
     * gets the ids of the answers for the question.
     * @returns {string[]}
    */
    getAnswersId() {
        return this.ansIds;
    }

    /**
     * gets the ids of the tags for the question.
     * @returns {string[]}
    */
    getTagsId() {
        return this.tagIds;
    }

    /**
     * calculates the time elapsed since the question was asked.
     * @returns {string}
    */
    calculateTimeElapsed() {
        return getMetaData(this.askDate);
    }

    /**
     * gets the number of views for the question.
     * @returns {number}
    */
    getQuestionViews() {
        return this.views;
    }

    /**
     * increments the number of views for the question.
    */
    addViewCount() {
        this.views++;
    }

    /**
     * sets the date of the newest answer for the question.
     * @param {Date} date - The date of the newest answer.
    */
    setNewestAnswerDate(date: Date) {
        if (this.newAnsDate == null || this.newAnsDate < date) {
            this.newAnsDate = date;
        }
    }
}
