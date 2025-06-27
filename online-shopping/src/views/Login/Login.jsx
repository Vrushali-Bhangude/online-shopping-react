import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import 'remixicon/fonts/remixicon.css'
import "./login.css"

const Login = () => {
  // State variables for user input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
   const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');

  const navigate = useNavigate();

  const handleLogin = (e) => {   // Handle login form submission
    // Prevent the default form submission behavior
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];  // Retrieve existing users from localStorage or initialize an empty array

    const matchedUser = users.find(                                  // Find the user in the stored users array
      (user) => user.email === email && user.password === password
    );

    if (matchedUser) {       // If a matching user is found, login is successful
       setMessage('Login successful.Welcome to Cloth Store!');
        setMessageType('success');
      setTimeout(() => navigate('/'), 2000);
    } else {
       setMessage("Incorrect email or password. Please try again.");
       setMessageType('error');
    }
  };

  return (
    <>
      <div className='main-container'>
         {  /* Message Box  */}
        {message && (
          <div className={`message-box ${messageType}`}>
            {message}
          </div>
        )}
        <div className='heading'>
          <h1><i className="ri-shopping-cart-fill"></i> Welcome to Cloth Store – Your Smart Shopping Partner</h1>
          <h3>Login to explore trendy fashion and exclusive deals!</h3>
        </div>
        <div className="container">
          <div className="form-box login">
            <form onSubmit={handleLogin}>
              <h1> Cloth Store <i className="ri-shopping-cart-line"></i></h1>
              <h2>Login <i className="ri-login-circle-line"></i></h2>
              <div className="input-box">
                <input type="text" placeholder='Email' value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required />
                <i className="ri-mail-ai-line"></i>
              </div>
              <div className="input-box">
                <input type="Password" placeholder='Password' value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <i className="ri-lock-2-line"></i>
              </div>
              <div className="forgot-link">
                If you have to create account ?<a href="/signup">  Signup</a>
              </div>
              <button type="submit" className="btn">Login</button>
              <p>or login with social platforms</p>
              <div className="social-icons">
                <a href="#"><i className="ri-google-fill"></i></a>
                <a href="#"><i className="ri-facebook-circle-fill"></i></a>
                <a href="#"><i className="ri-github-fill"></i></a>
                <a href="#"><i className="ri-linkedin-box-fill"></i></a>
              </div>
            </form>
          </div>
          <div className='img-container'>
            <img src="/src/assets/Login-Signup/Online_Shopping.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Login