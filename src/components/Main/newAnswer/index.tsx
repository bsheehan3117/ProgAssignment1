import "./index.css";
import Form from "../baseComponents/form";
import { NewAnswerProps } from "../../../types/types";

/**
 * @param {NewAnswerProps} props - The props to be passed to the component.
 * @returns JSX.Element containing the new answer form.
 */
const NewAnswer = () => {
  
  return (
    <Form>
      <p> New Answer Form </p>
    </Form>
  );
};

export default NewAnswer;
