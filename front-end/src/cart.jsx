import PropTypes from "prop-types";
import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

function Cart(props) {

    const [thelist, setThelist] = useState([]);
    const [u_username, setU_username] = useState("");

    const navigate = useNavigate();

    const go = ()=>{navigate('/payment_details')};
    const get_products = async()=>{
        try{
            const response = await fetch('http://localhost:3000/api/users/get_order',{
                method: 'GET',
                credentials: 'include'
            });

            const data = await response.json();

            if(data.message ==="correct"){
                setThelist(data.list_of_results);
                setU_username(data.username);
            }
            else{
                alert (data.message);
            }
        }catch(err){
            
        }
    };

    useEffect(()=>{
        get_products();
    },[]);

    return (
        <>
            <div className="cart_body">
                
                <h3 className="flexcell">{u_username}'s cart</h3>

                <div className="flexcell flex_grid">
                    
                    <div className="table_header">
                        <div>ID</div>
                        <div>category</div>
                        <div>Description</div>
                        <div>Price</div>
                        <div>Count</div>
                        <div>Total</div>
                    </div>

                    {thelist.map((element, index) => (
                        <div key={index} className="one_product">
                            <div>{element.p_id}</div>
                            <div>{element.product_name}</div>
                            <div>{element.description}</div>
                            <div>{element.price}</div>
                            <div>{element.quantity}</div>
                            <div>{element.total_price}</div>
                        </div>
                    ))}

                </div>

                <div className="flexcell">
                    <button onClick={go}>Proceed to Checkout</button>
                </div>

            </div>
        </>
    );
}

export default Cart;
