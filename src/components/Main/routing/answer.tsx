import PageClass from ".";
import AnswerPage from "../answerPage";

/**
 * Class representing an AnswerPageClass.
 * @extends PageClass
 */
export default class AnswerPageClass extends PageClass {
    /**
     * @returns JSX.Element containing the AnswerPage component or question not found component.
     * @override
    */
    getContent() {
        const q = this.app.getQuestionById(this.qid);
        if(q === undefined){
            return (
                <div>
                    <h1>Question Not Found</h1>
                    <p>The question you are looking for does not exist or has been removed.</p>
                </div>
            );
        }
        q.addViewCount();
        return (
            <AnswerPage />
        );
    }

    /**
     * @returns empty string to indicate that no tab in the menu is selected.
     * @override
     */
    getSelected() {
        return "";
    }
}