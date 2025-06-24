import PropTypes from "prop-types";
import picture from '/h-bridge.png';


function Card(props){

    const adding = ()=>{
        console.log("added");
        console.log(props);
    }


    return(
        <div className = "card">
           <img src = {picture} className="card_image" ></img>
           <h2>{props.description}</h2>
           <p>{props.description}</p>
           <button>add to cart</button>
        </div>
    );
}






Card.propTypes = {
    product_name: PropTypes.string,
    description: PropTypes.string,
    count: PropTypes.number
}

Card.defaultProps ={
    product_name: 'missing the title',
    description: 'missing the description',
    count: 0
}
export default Card;