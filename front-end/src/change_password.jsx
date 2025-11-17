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
            const response = await fetch('http://localhost:3000/api/users/change_password',{
                method: 'POST',
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify({email: email, old_password: oldpassword,new_password: newpassword})
            })
            //console.log("Font-end: the email is :"+email +"\n"+"the old password is :"+oldpassword );
            const response_message =await response.json();
            //console.log("the message is :"+response_message.message);
            alert(response_message.message);
            

        }catch(err){
            console.log(err);
        }
    }

    return(
        <div className="change_password" >
            <div className='login_card'>
                <div>
                    <h4>change password</h4>
                </div>
                <div className="inputing_fields">
                    <input placeholder="email" value={email} onChange={setting_the_email} className="line-input" required></input>
                    <input placeholder="old password" value={oldpassword} onChange={setting_the_oldpassword} className="line-input" ></input>
                    <input placeholder="new password" value={newpassword} onChange={setting_the_newpassword} className="line-input" required></input>
                    <div className="buttons_in_row">
                        <button style={{width:'100px', border:'solid black 2px', borderRadius: '20px', marginRight: '10px', fontSize:'10px'}} onClick={change_the_password}>change password</button>
                        <button style={{width:'100px', border:'solid black 2px', borderRadius: '20px', fontSize:'10px'}} onClick={go_to_home_page}>home page</button>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default Change_password;