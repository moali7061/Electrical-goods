import { BsPhone } from "react-icons/bs";

import "./User_info_to_pay.css"

function User_info_to_pay(){

    return(
        <div className="Payment_page">
            <div className="payment_grid">
                <p className="paymen_grid_cell">
                    <div>
                        <input placeholder="name"></input>
                        <input placeholder="phone number"></input>
                    </div>
                    <div>
                        <input placeholder="address"></input>
                    </div>
                    <div>
                        <input placeholder="building/house number"></input>
                        <input placeholder="floor"></input>
                    </div>
                </p>
                <p className="paymen_grid_cell">hala</p>
            </div>
        </div>
    );
}

export default User_info_to_pay;