import "./index.css";
import { OrderButtonProps } from "../../../../../types/types";

/**
 * 
 * @param {OrderButtonProps} - The props to be passed to the component.
 * @returns JSX.Element containing the order button.
 */
const OrderButton = ({ message, setQuestionOrder }: OrderButtonProps) => {
    return (
        <button
            className="btn"
            onClick={() => {
                setQuestionOrder(message);
            }}
        >
            {message}
        </button>
    );
};

export default OrderButton;
