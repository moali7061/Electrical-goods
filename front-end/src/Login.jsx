import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Register_login(){

const navigate = useNavigate();
  const go_to_products = ()=>{
    
    navigate('/listing');
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