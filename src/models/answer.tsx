import { getMetaData } from "../utils/index";
import { AnswerParamType, AnswerPropsInterface } from "../types/types";

export default class Answer implements AnswerPropsInterface {
    aid: string;
    text: string;
    ansBy: string;
    ansDate: Date;

    constructor({ aid, text, ansBy, ansDate }: AnswerParamType) {
        this.aid = aid;
        this.text = text;
        this.ansBy = ansBy;
        this.ansDate = ansDate;
    }

    calculateTimeElapsed(): string {
        return getMetaData(this.ansDate);
    }
}