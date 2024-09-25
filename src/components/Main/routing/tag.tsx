import PageClass from ".";
import TagPage from "../tagPage";

/**
 * Class representing a TagPageClass.
 * @extends PageClass
 * */
export default class TagPageClass extends PageClass {
    /**
     * @returns JSX.Element containing the TagPage component.
     * @override
     */
    getContent() {
        return null;
    }

    /**
     * @returns "t" to indicate that the tags menu item is selected.
     * @override
     */
    getSelected() {
        return "t";
    }
}