import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Register_login(){

const navigate = useNavigate();
  const go_to_products = async()=>{
    try{
      const response = await fetch('http://localhost:3000/log_in_user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password}),
      })
      const text = await response.text();
      if (text === 'correct') {
      navigate('/listing'); 
    } else if (text === 'not_correct') {
      alert('Incorrect password. Try again.');
    } else if (text === 'user_not_found') {
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
                <h1 style={{fontSize: '200px', marginTop: '200px'}}>Log in</h1>
                <div className="inputing_fields">
                    <input style={{marginTop: '50px'}} placeholder="email" value={email} onChange={setting_the_email} required></input>

                    <input placeholder="password" value={password} onChange={setting_the_pssword} required ></input>

                    <button style={{width:'300px', border:'solid black 2px', borderRadius: '20px'}} onClick={go_to_products}>Go to website</button>
                </div>
            </div>


            <div className="login_part2">
            </div>
        </div>
    );
}

export default Register_login;