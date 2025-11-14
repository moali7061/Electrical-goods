import PropTypes from "prop-types";
import { useState } from "react";

function Card(props) {
    const [count, setCount] = useState(0);

    const [availableCount, setAvailableCount] = useState(props.count);

    const adding = async () => {
        console.log("added");
        console.log(props);

        const product_id = props.product_id;
        const price = props.price
         try {
            console.log(product_id);
             const response = await fetch("http://localhost:3000/api/users/add_order", {
                 method: "POST",
                 credentials: "include",
                 headers: {
                     "Content-Type": "application/json",
                 },
                 body: JSON.stringify({
                     product_id: product_id,
                     count: count,
                     price_one: price
                 }),
             });

             const data = await response.json();
             alert(data.message.message +"the count is " + data.message.count);
             props.updateCount(product_id, data.message.count);  
             setAvailableCount(data.message.count); 
             setCount(0);             



         } catch (err) {
             console.error(err);
             alert("Error adding to cart");
         }
    };

    const increment = () => {
        if (count >= availableCount) return;
        setCount(count + 1);
    };


    const decrement = () => {
        if (count < 1) {
            setCount(0);
        } else {
            setCount(count - 1);
        }
    };

    return (
        <div className="card">
            <img 
                src={`/${props.product_name}.png`} 
                className="card_image" 
                alt={props.product_name} 
            />
            <h3>{props.product_name}</h3>
            <p>{props.description}</p>
            <p style={{ color: availableCount <= 0 ||  availableCount<= 10? 'red' : 'black', fontWeight: 'bold' }}>
                {availableCount===0 || availableCount<0? 'not available':`only ${availableCount} available`}
            </p>
            <p>price {props.price} L.E</p>
            <div className="button_and_counter">
                <div className="in_button_and_counter">
                    <button onClick={increment} className="idbutton">+</button>
                    <p className="count">{count}</p>
                    <button onClick={decrement} className="idbutton">-</button>
                </div>
                <button className="add_to_cart" onClick={adding} disabled={count <= 0}>
                    add to cart
                </button>
            </div>    
        </div>
    );
}
 
Card.propTypes = {
    product_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    product_id: PropTypes.number.isRequired,
};

Card.defaultProps = {
    product_name: "missing the name",
    description: "missing the description",
    count: 0,
    price: 0,
    email: "",
    product_id: 0,
};

export default Card;
