import "./selection_card.css"
import { useNavigate } from "react-router-dom";

function Selection_card1(props){

    const navigate=useNavigate();
    const go_to_list=()=>{
        navigate(props.direction);
    }

    return(
        <div className="selection_card">
            <img src={props.image} alt="selection" style={{borderRadius:'10px'}}/>
            <hr/>
            <button onClick={go_to_list}>select</button>
        </div>
    );
}

export default Selection_card1;