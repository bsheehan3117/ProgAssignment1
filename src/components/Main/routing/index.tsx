import { NoParamHandler, StringHandler, SetQuestionPage, ApplicationInterface } from "../../../types/types";

/**
 * Abstract class representing a PageClass.
 */
export default abstract class PageClass {
  public app: ApplicationInterface;
  public search: string;
  public title: string;
  public setQuesitonPage: SetQuestionPage;
  public questionOrder: string;
  public setQuestionOrder: StringHandler;
  public qid: string;
  public handleQuestions: NoParamHandler;
  public handleTags: NoParamHandler;
  public handleAnswer: StringHandler;
  public clickTag: StringHandler;
  public handleNewQuestion: NoParamHandler;
  public handleNewAnswer: NoParamHandler;

  constructor(
    app: ApplicationInterface,
    search: string,
    title: string,
    setQuesitonPage: SetQuestionPage,
    questionOrder: string,
    setQuestionOrder: StringHandler,
    qid: string,
    handleQuestions: NoParamHandler,
    handleTags: NoParamHandler,
    handleAnswer: StringHandler,
    clickTag: StringHandler,
    handleNewQuestion: NoParamHandler,
    handleNewAnswer: NoParamHandler
  ) {
    this.app = app;
    this.search = search;
    this.title = title;
    this.setQuesitonPage = setQuesitonPage;
    this.questionOrder = questionOrder;
    this.setQuestionOrder = setQuestionOrder;
    this.qid = qid;
    this.handleQuestions = handleQuestions;
    this.handleTags = handleTags;
    this.handleAnswer = handleAnswer;
    this.clickTag = clickTag;
    this.handleNewQuestion = handleNewQuestion;
    this.handleNewAnswer = handleNewAnswer;
  }

  abstract getContent(): void;

  abstract getSelected(): void; 
}
