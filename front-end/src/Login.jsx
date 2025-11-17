import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Register_login(){

const navigate = useNavigate();
  const go_to_products = async()=>{
    try{
      const response = await fetch('http://localhost:3000/api/users/log_in_user', {
        method: 'POST',
        credentials: "include",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password}),
      })
      const text = await response.json();

      
      if (text.message === 'correct') {
      navigate('/listing'); 
    } else if (text.message === 'not_correct') {
      alert('Incorrect password. Try again.');
    } else if (text.message === 'user_not_found') {
      alert('User not found.');
    } else {
      alert('Unexpected response: ' + text);
    }
    }catch(err){
      alert('something went wrong');
    }
  }

  const [email, setEmail] = useState("");
  function setting_the_email(event){
    setEmail(event.target.value);
  }

  const [password, setPassword] = useState("");
  function setting_the_pssword(event){
    setPassword(event.target.value);
  }

    return(
        <div className="login_page">
            <div className="login_part1">
              <div className='login_card'>
                <div style={{width: '100%'}}>
                  <h4>login</h4>
                </div>
                <div className="inputing_fields">
                    <input placeholder="email" value={email} onChange={setting_the_email} className="line-input" required></input>
                    <input placeholder="password" value={password} onChange={setting_the_pssword} className="line-input" required></input>
                </div>
                    <div><button style={{width:'150px', border:'solid black 2px', borderRadius: '20px'}} onClick={go_to_products}>Go to website</button></div>
               </div> 
            </div>
        </div>
    );
}

export default Register_login;