import PageClass from ".";
import NewQuestion from "../newQuestion";

/**
 * Class representing a NewQuestionPageClass.
 * @extends PageClass
 */
export default class NewQuestionPageClass extends PageClass {
    /**
     * @returns JSX.Element containing the NewQuestion component.
     * @override 
     */
    getContent() {
        console.log(this);
        return null;
    }

    /**
     * @returns empty string to indicate that no tab in the menu is selected.
     * @override
     */
    getSelected() {
        return "";
    }
}