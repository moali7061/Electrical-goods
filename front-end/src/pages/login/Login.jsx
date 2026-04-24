import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./login.css";
 
function Register_login() {
  const navigate = useNavigate();
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const go_to_products = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/users/log_in_user', {
        method: 'POST',
        credentials: "include",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
 
      const text = await response.json();
 
      if (!response.ok) {
        alert(text.message);
        return;
      }
 
      if (text.message === 'correct') {
        navigate('/listing');
      } else if (text.message === 'not_correct') {
        alert('Incorrect password. Try again.');
      } else if (text.message === 'user_not_found') {
        alert('User not found.');
      } else {
        alert('Unexpected response: ' + text);
      }
    } catch (err) {
      alert('Something went wrong.');
    }
  };
 
  return (
    <div className="login_page">
      <div className="login_part1">
        <div className="login_card">
          <h4>Login</h4>
          <div className="inputing_fields">
            <input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="line-input"
              type="email"
            />
            <input
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="line-input"
              type="password"
            />
          </div>
          <button className="login_btn" onClick={go_to_products}>
            Go Shopping
          </button>
          <button className="login_btn" onClick={() => navigate('/')}>
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
 
export default Register_login;