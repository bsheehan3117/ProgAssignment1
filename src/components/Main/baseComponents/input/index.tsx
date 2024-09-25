import { InputProps } from "../../../../types/types";
import "./index.css";

/**
 * 
 * @param {InputProps} props - The props to be passed to the component.
 * @returns JSX.Element containing the input component.
 */
const Input = ({ title, hint, id, mandatory = true, val, setState, err }: InputProps) => {
    return (
        <>
            <div className="input_title">
                {title}
                {mandatory ? "*" : ""}
            </div>
            {hint && <div className="input_hint">{hint}</div>}
            <input
                id={id}
                className="input_input"
                type="text"
                value={val}
                onInput={(e) => {
                    setState((e.target as HTMLInputElement).value);
                }}
            />
            {err && <div className="input_error">{err}</div>}
        </>
    );
};

export default Input;
