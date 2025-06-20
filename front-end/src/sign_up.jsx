import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Signup(){

const navigate = useNavigate();

    const go_to_home = ()=>{
        navigate('/home');
    }
 
  const signing_up_user = async () => {
    try{
        const response = await fetch('http://localhost:3000/signup_user',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username, email, password}),

            });
            const text = await response.text();
            
            if(text === 'created')
                {
                    alert('user created successfully \n go to home page to login');
                }
            else if(text ==='email_exist'){
                alert('this email is registered before try using another email');
            }
            else if(text ==='username_exist'){
                alert('this username is registered before try using another email');
            }else{
                alert('unexpected response ' + text);
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
                <h1 style={{fontSize: '200px', marginTop: '200px'}}>Sign Up</h1>
                <div className="inputing_fields">
                    <input style={{marginTop: '50px'}} placeholder="username" value={username} onChange={setting_the_username} required></input>

                    <input placeholder="email" value={email} onChange={setting_the_email} required></input>

                    <input placeholder="password" value={password} onChange={setting_the_pssword} required ></input>

                    <div className = 'two_buttons'>
                        <button onClick={signing_up_user} style={{width:'300px', border:'solid black 2px', borderRadius: '20px'}} >Register</button>
                        <button onClick={go_to_home} style={{width:'300px', border:'solid black 2px', borderRadius: '20px'}} >go to home page</button>
                    </div>
                </div>
            </div>


            <div className="login_part2">
            </div>
        </div>
    );
}

export default Signup;