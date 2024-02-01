import React, { useState } from "react";
import "./LogIn.css"; 
import { useNavigate } from "react-router-dom";
function LogIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginUser = async (e) => {
    e.preventDefault();

    if (!email || !password){
      window.alert("Please fill in both email and password.");
    return;
    }
    const res = await fetch('/login',{
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email, 
        password
      })
    })
    const data = res.json();
    if(res.status === 400 || !data){
      window.alert("Invalid login");
    }else if (data.error) {
      window.alert("Incorrect email or password");
    }else{
      window.alert("Login successful");
      navigate("/profile")
    }
  }
  return (
    <>
    <section className="sign-in">
    <div className="login-container">
      <div className="login-form">
        <h2 className="form-title">Log In</h2>

        <form method = 'POST' className="register-form" id="register-form">
          <div className="form-group">
            <label htmlFor="email">
              <i></i>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">
              <i></i>
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group form-button">
            <input
            className="form-submit"
              type="submit"
              name="signin"
              id="signin"
              value="Log In"
              onClick={loginUser}
            />
          </div>
        </form>
      </div>
    </div>
    </section>
    </>
  );
}

export default LogIn
