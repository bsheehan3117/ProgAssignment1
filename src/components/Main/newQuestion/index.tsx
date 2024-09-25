import Form from "../baseComponents/form";
import "./index.css";
import { NewQuestionProps } from "../../../types/types";

/**
 * @param {NewQuestionProps} props - The props to be passed to the component.
 * @returns JSX.Element containing the form to add a new question.
 */
const NewQuestion = () => {


  return (
    <Form>
      <p> New Question Form</p>
    </Form>
  );
};

export default NewQuestion;
