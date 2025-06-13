import PropTypes from "prop-types";

function Card(props){

    const adding = ()=>{
        console.log("added");
    }

    return(
        <div className = "new_card">
            <img className="card_image" src ='/elsewedy.png' alt = ""/>
            <h2 className="card_title">{props.title}</h2>
            <h5 className="card_description">{props.description}</h5>
            <h6 className="price">price: {props.price} LE</h6>
            <div className="card_button_and_left">
                <h6 className="left">only {props.count} left in stock</h6>
                <button className="card_button" onClick={adding}>add to cart</button>
            </div>
        </div>
    );
}

Card.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    count: PropTypes.number
}

Card.defaultProps ={
    title: 'missing the title',
    description: 'missing the description',
    count: 0
}
export default Card;