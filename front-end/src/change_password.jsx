import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Change_password(){

    const navigate = useNavigate();
    function go_to_home_page(){
        navigate("/");
    }

    const [email, setEmail] = useState("");
    function setting_the_email (event){
        setEmail(event.target.value);
    }

    const [newpassword, setNewpassword] = useState("");
    function setting_the_newpassword (event){
        setNewpassword(event.target.value);
    }

    const [oldpassword,  setOldpassword] = useState("");
    function setting_the_oldpassword(event){
        setOldpassword(event.target.value);
    }

    async function change_the_password(){
        try{
            const response = await fetch('http://localhost:3000/change_password',{
                method: 'PUT',
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify({old_email: email, old_password: oldpassword,new_password: newpassword})
            })
            console.log("Font-end: the email is :"+email +"\n"+"the old password is :"+oldpassword );
            const response_message =await response.json();
            console.log("the message is :"+response_message.message);
            alert(response_message.message);
            

        }catch(err){
            console.log(err);
        }
    }

    return(
        <div className="change_password" >
            <div className="inputing_fields">
                <input placeholder="email" value={email} onChange={setting_the_email} required></input>
                <input placeholder="old password" value={oldpassword} onChange={setting_the_oldpassword}></input>
                <input placeholder="new password" value={newpassword} onChange={setting_the_newpassword} required></input>
                <div className="buttons_in_row">
                    <button className="Home_page_button" onClick={change_the_password}>change password</button>
                    <button className="Home_page_button" onClick={go_to_home_page}>go to home</button>
                </div>
            </div>
        </div>
    );
}



export default Change_password;