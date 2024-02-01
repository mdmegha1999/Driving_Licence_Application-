import React, { useState } from "react";
import "./LoginPage.css"; // Import your CSS file
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'; 

function LoginPage() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    address: "",
    contactDetails: "",
    email: "",
    password: "",
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const PostData = async (e) => {
    e.preventDefault();
    const { name, address, contactDetails, email, password } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        address,
        contactDetails,
        email,
        password,
      }),
    });
    const data = await res.json();
    if (res.ok) {
        window.alert("Registration Successful");
        navigate("/login");
      } else {
        console.error("Registration Failed:", data.message || "Unknown Error");
      }
  };
  return (
    <>
      <section className="signup">
        <div className="container">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">sign up</h2>

              <form method="POST" className="register-form" id="register-form">
                <div className="from-group">
                  <label htmlFor="name">
                    <i></i>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={user.name}
                    onChange={handleInputs}
                    placeholder="Your Name"
                  ></input>
                </div>
                <div className="from-group">
                  <label htmlFor="address">
                    <i></i>
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={user.address}
                    onChange={handleInputs}
                    placeholder="Address"
                  ></input>
                </div>
                <div className="from-group">
                  <label htmlFor="contactDetails">
                    <i></i>
                  </label>
                  <input
                    type=""
                    name="contactDetails"
                    id="contactDetails"
                    value={user.contactDetails}
                    onChange={handleInputs}
                    placeholder="Your Contect"
                  />
                </div>
                <div className="from-group">
                  <label htmlFor="email">
                    <i></i>
                  </label>
                  <input
                    type="text"
                    name="email"
                    value={user.email}
                    onChange={handleInputs}
                    placeholder="You Email"
                  ></input>
                </div>
                <div className="from-group">
                  <label htmlFor="password">
                    <i></i>
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleInputs}
                    placeholder="Create Password"
                  ></input>
                </div>
                <div className="foem-group from-button">
                <input type="submit" name="signup" id="sigup" className="form-submit" value="Register" onClick={PostData}/>
                <Link to="/login">
        <button className="form-login">Log In</button>
      </Link>{" "}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LoginPage;





    
