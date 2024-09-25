import PageClass from ".";
import NewAnswer from "../newAnswer";

/**
 * Class representing a NewAnswerPageClass.
 * @extends PageClass
 */
export default class NewAnswerPageClass extends PageClass {
    /**
     * @returns JSX.Element containing the NewAnswer component.
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