import { BsPhone } from "react-icons/bs";

import "./User_info_to_pay.css"

function User_info_to_pay(){

    return(
        <div className="user_info_page">   
                <div className="payment_grid">
                    <div className="payment_grid_cell" style={{borderRight:'1px solid black'}}>
                        <div style={{marginRight:'auto', marginLeft:'auto'}}>
                            <input placeholder="name"></input>
                            <input placeholder="phone number"></input>
                        </div>
                        <div  style={{marginRight:'auto', marginLeft:'auto'}}>
                            <input placeholder="address"></input>
                        </div>
                        <div  style={{marginRight:'auto', marginLeft:'auto'}}>
                            <input placeholder="building/house number"></input>
                            <input placeholder="floor"></input>
                        </div>
                    </div>
                    
                    <div className="payment_grid_cell">hala</div>
                </div>
        </div>
    );
}

export default User_info_to_pay;