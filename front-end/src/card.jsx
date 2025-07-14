import PropTypes from "prop-types";
import picture from '/h-bridge.png';
import { useState } from "react";

function Card(props){

    const adding = ()=>{
        console.log("added");
        console.log(props);
    }

    const [count,setCount] = useState(0);
    
    const increment = ()=>{
        if(count >= props.count){
            setCount(count);w
        }else{
            setCount(count+1);
        }
    }
    
    const decrement = ()=>{
        if(count<1){
            setCount(0);
        }else{
            setCount(count-1);
        }
    }

    

    return(
        <div className = "card">
           <img src = {picture} className="card_image" ></img>
           <h3>{props.product_name}</h3>
           <p>{props.description}</p>
           <p>only {props.count} available</p>
           <p>price {props.price} L.E</p>
           <div className="button_and_counter">
                <div className="in_button_and_counter">
                    <button onClick={increment} className="idbutton">+</button>
                    <p className="count">{count}</p>
                    <button onClick={decrement} className="idbutton">-</button>
                </div>
                <button className="add_to_cart" onClick={adding}>add to cart</button>
            </div>    
        </div>
    );
}


const add_to_cart = async()=>{
        try{
            const response = await fetch('http://localhost:3000/add_to_cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({username , count, product_id}),
            })
            const text = await response.message();
            alert(text);
        }catch(err){
            console.log(err);
        }
    }

Card.propTypes = {
    product_name: PropTypes.string,
    description: PropTypes.string,
    count: PropTypes.number
}

Card.defaultProps ={
    product_name: 'missing the name',
    description: 'missing the description',
    count: 0
}
export default Card;