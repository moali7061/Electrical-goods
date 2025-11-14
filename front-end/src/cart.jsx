import PropTypes from "prop-types";
import { useState } from "react";

function Cart(props) {

    const order_list = [
        {
            product_id: 1,
            product_description: "elsewedy cable 1.5mm blue",
            price_for_one: 1500,
            count: 2,
            total_price: 3000
        },
        {
            product_id: 1,
            product_description: "elsewedy cable 1.5mm blue",
            price_for_one: 1500,
            count: 2,
            total_price: 3000
        },
        {
            product_id: 1,
            product_description: "elsewedy cable 1.5mm blue",
            price_for_one: 1500,
            count: 2,
            total_price: 3000
        }
    ];

    return (
        <>
            <div className="cart_body">
                
                <h3 className="flexcell">{props.username}'s cart</h3>

                <div className="flexcell flex_grid">
                    
                    <div className="table_header">
                        <div>ID</div>
                        <div>Description</div>
                        <div>Price</div>
                        <div>Count</div>
                        <div>Total</div>
                    </div>

                    {order_list.map((element, index) => (
                        <div key={index} className="one_product">
                            <div>{element.product_id}</div>
                            <div>{element.product_description}</div>
                            <div>{element.price_for_one}</div>
                            <div>{element.count}</div>
                            <div>{element.total_price}</div>
                        </div>
                    ))}

                </div>

                <div className="flexcell">
                    <button>Proceed to Checkout</button>
                </div>

            </div>
        </>
    );
}

export default Cart;
