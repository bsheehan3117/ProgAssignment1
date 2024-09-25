import React from 'react';
import PageClass from '.';
import QuestionPage from "../questionPage";

/**
 * Class representing a HomePageClass.
 * @extends PageClass
 */
export default class HomePageClass extends PageClass {
    /**
     * @returns JSX.Element containing the QuestionPage component.
     * @override
     */
    getContent() {
        return (
            <QuestionPage
                title_text={this.title}
                qlist={this.app.getQuestionsByFilter(this.questionOrder.toLowerCase(), this.search)}
                getTagById={this.app.getTagById}
                setQuestionOrder={this.setQuestionOrder}
                clickTag={this.clickTag}
                handleAnswer={this.handleAnswer}
                handleNewQuestion={this.handleNewQuestion}
            />
        );
    }

    /** 
     * @returns "q" to indicate that the questions menu item is selected.
     * @override
     * */
    getSelected() {
        return "q";
    }
}