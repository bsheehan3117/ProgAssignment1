import "./index.css";
import { FormProps } from "../../../../types/types";

/**
 * The component is used to render a generic form.
 * @param {FormProps} props - The props to be passed to the component.
 * @returns JSX.Element containing the form elements.
 * */
const Form = ({ children }: FormProps) => {
    return <div className="form">{children}</div>;
};

export default Form;
