import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import "./sign_up.css"

function Signup(){

const navigate = useNavigate();

    const go_to_home = ()=>{
        navigate('/');
    }
 
  const signing_up_user = async () => {
    try{
        const response = await fetch('http://localhost:3000/api/users/signup_user',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username, email, password}),

            });
            const text = await response.json();
            console.log("the text is",text);
            console.log(text.message);

            if (!response.ok) {
              alert(text.message);
                return;
            }

            if(text.message === 'created')
                {
                    alert('user created successfully \n go to home page to login');
                }
            else if(text.message ==='email exists'){
                alert('this email is registered before try using another email');
            }else if(text.message === 'username exists'){
                alert('this username is used before try using another one');
            }else{
                alert('unexpected response haa' + text);
            }
            
    }catch(err){
        console.log(err);
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

  const [username, setUsername]=useState("");
  function setting_the_username(event){
        setUsername(event.target.value);
  }

    return(
        <div className="login_page">
            <div className="login_part1">
                <div className='login_card'>
                    <h4>Sign Up</h4>
                    <div className="inputing_fields">
                        <input placeholder="username" value={username} onChange={setting_the_username} className="line-input" required></input>

                        <input placeholder="email" value={email} onChange={setting_the_email} className="line-input" required></input>

                        <input placeholder="password" value={password} onChange={setting_the_pssword} className="line-input" required ></input>

                        <div className = 'two_buttons'>
                            <button onClick={signing_up_user} style={{width:'100px', border:'solid black 2px', borderRadius: '20px', fontSize:'10px', marginRight:'10px'}}>Sign up</button>
                            <button onClick={go_to_home} style={{width:'100px', border:'solid black 2px', borderRadius: '20px', fontSize:'10px'}} >go to home page</button>
                        </div>
                    </div>
                </div>
            </div>


            
        </div>
    );
}

export default Signup;