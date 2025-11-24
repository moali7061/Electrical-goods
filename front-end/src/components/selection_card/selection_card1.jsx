import "./selection_card.css"
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";

function Selection_card1(props){

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

    return(
        <div className="selection_card">
            <Navbar type="home"/>
            <img src={props.image} alt="selection" style={{width: '190px', height:'150px'}} direction="/listing"/>
            <hr/>
            <button onClick={go_to_list}>select</button>
        </div>
    );
}

export default Selection_card1;