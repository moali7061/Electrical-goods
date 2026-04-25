import "./selection_card.css";
import { useNavigate } from "react-router-dom";

function Selection_card1(props) {
    const navigate = useNavigate();

    const go_to_list = () => {
        if (typeof props.direction === "string") {
            navigate(props.direction);
        } else {
            navigate(props.direction.path, {
                state: props.direction.state
            });
        }
    };

    return (
        <div className="selection_card" onClick={go_to_list}>
            <img
                src={props.image}
                alt="selection"
                className="selection_card__img"
            />
            <hr className="selection_card__divider" />
            <button className="selection_card__btn">Select</button>
        </div>
    );
}

export default Selection_card1;