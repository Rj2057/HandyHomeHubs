import React, { useState } from 'react';
import './LoginSignup.css';
import crossImg from '../Assets/cross-icon.png';

const LoginSignup = ({ onClose }) => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    console.log("Login Function Executed", formData);
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json(); // Await the response

      if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token); // Save token in localStorage
        window.location.replace("/"); // Redirect to home page
      } else {
        alert(responseData.errors); // Show error message
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const signup = async () => {
    console.log("Signup Function Executed", formData);
    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json(); // Await the response

      if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token); // Save token in localStorage
        window.location.replace("/"); // Redirect to home page
      } else {
        alert(responseData.errors); // Show error message
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (state === "Login") {
      login();
    } else {
      signup();
    }
  };

  return (
    <div className="loginsignup">
      <form className="loginsignupContainer" onSubmit={onSubmitHandler}>
        <div className="loginsignupTitle">
          <h2>{state}</h2>
          <img onClick={onClose} src={crossImg} alt="close" className="close-icon" />
        </div>
        <div className="loginsignupInputs">
          {state === "Sign Up" && (
            <input
              name="username"
              value={formData.username}
              onChange={changeHandler}
              type="text"
              placeholder="Your Name"
              required
            />
          )}
          <input
            name="email"
            value={formData.email}
            onChange={changeHandler}
            type="email"
            placeholder="Enter Email"
            required
          />
          <input
            name="password"
            value={formData.password}
            onChange={changeHandler}
            type="password"
            placeholder="Enter Password"
            required
          />
        </div>
        <button type="submit">Continue</button>
        {state === "Sign Up" ? (
          <p className="loginsignup-login">
            Already have an account? <span onClick={() => setState("Login")}>Login here</span>
          </p>
        ) : (
          <p className="loginsignup-login">
            Create an account? <span onClick={() => setState("Sign Up")}>Click here</span>
          </p>
        )}
        {state === "Sign Up" && (
          <div className="loginsignupCondition">
            < input type="checkbox" required />
            <p>
              By Continuing, I agree to the <span>terms of use</span> & <span>privacy policy</span>
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default LoginSignup;