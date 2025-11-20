import { useNavigate } from "react-router-dom";

    function Login_signup_changePassword(){

    const navigate= useNavigate();
    const go_home = ()=>{
        navigate('/');
    }
    const go_login =()=>{
        navigate('/login');
    }
    const go_signup = ()=>{
        navigate('/sign_up');
    }
    const go_changepassword = ()=>{
        navigate('/change_password');
    }


    return(
        <div className='login_signup' >
            <div className="login_signup_card">
                <button className='login_signup_button' onClick={go_signup}>sign up</button>
                <button className='login_signup_button' onClick={go_login}>login</button>
                <button className='login_signup_button' onClick={go_changepassword}>changes password</button>
                <button className='login_signup_button' onClick={go_home}>Home page</button>
            </div>
        </div>
    );

}

export default Login_signup_changePassword;