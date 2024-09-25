import { TextareaProps } from "../../../../types/types";
import "../input/index.css";

/**
 * The component is used to render a textarea.
 * @param {TextareaProps} props - The props to be passed to the component.
 * @returns JSX.Element containing the textarea.
 */
const Textarea = ({
    title,
    mandatory = true,
    hint,
    id,
    val,
    setState,
    err,
}: TextareaProps) => {
    return (
        <>
            <div className="input_title">
                {title}
                {mandatory ? "*" : ""}
            </div>
            {hint && <div className="input_hint">{hint}</div>}
            <textarea
                id={id}
                className="input_input"
                value={val}
                onInput={(e) => {
                    setState((e.target as HTMLTextAreaElement).value);
                }}
            />
            {err && <div className="input_error">{err}</div>}
        </>
    );
};

export default Textarea;
