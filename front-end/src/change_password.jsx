import { useState } from "react";


function Change_password(){

    const [email, setEmail] = useState("");
    function setting_the_email (event){
        setEmail(event.target.value);
    }

    const [password, setPassword] = useState("");
    function setting_the_password (event){
        setPassword(event.target.value);
    }

    async function change_the_password(){
        try{
            const response = await fetch('http://localhost:3000/change_password',{
                method: 'PUT',
                headers: { "Content-Type": "application/json"},
            })
        }catch(err){

        }
    }

    return(
        <div className="change_password" >
            <div className="inputing_fields">
                <input placeholder="email" value={email} onChange={setting_the_email} required></input>
                <input placeholder="password" value={password} onChange={setting_the_password} required></input>
                <div className="buttons_in_row">
                    <button className="Home_page_button">change password</button>
                    <button className="Home_page_button">go to home</button>
                </div>
            </div>
        </div>
    );
}



export default Change_password;