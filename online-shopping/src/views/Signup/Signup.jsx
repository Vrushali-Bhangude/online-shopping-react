import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css'

const Signup = () => {
  // State variables for user input
  // These will hold the values entered by the user in the signup form
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // ✅ Password validation: 

  const isPasswordValid = (pass) => {
    const regex = /^[A-Za-z0-9]{6,}$/;
    return regex.test(pass);
  };

  const handleSubmit = (e) => {     // Handle signup form submission
    // Prevent the default form submission behavior
    e.preventDefault();

    if (!isPasswordValid(password)) {           // Validate password
      // If the password is not valid, show an alert and return
      alert('The password must be at least 6 characters long and contain only letters or numbers.');
      return;
    }

    const newUser = {             // Create a new user object with the input values
      fullName,
      email,
      password,
    };

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];     // Retrieve existing users from localStorage or initialize an empty array
    const userExists = storedUsers.some((user) => user.email === email);     // Check if the user already exists based on the email

    if (userExists) {      
       // If the user already exists, show an alert and redirect to the login page
      alert("You are already registered. Please log in.");  
      navigate('/login');
    } else {
      // If the user does not exist, add the new user to the stored users array
      // and save it back to localStorage
      storedUsers.push(newUser);
      localStorage.setItem('users', JSON.stringify(storedUsers));
      alert("Signup successful.!");
      navigate('/login');
    }
  };


  return (
    <>

      <div className='background-image'>
        <div className='main-container-page'>
          <div className='signup-container'>
            <form onSubmit={handleSubmit}>
              <h1> Cloth Store  <i className="ri-shopping-cart-line"></i></h1>
              <h2>Registration<i className="ri-login-circle-line"></i></h2>
              <div className="input-box">
                <input type="text" placeholder='Full Name' value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required />
                <i className="ri-user-3-line"></i>
              </div>
              <div className="input-box">
                <input type="text" placeholder='Email' value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required />
                <i className="ri-mail-ai-line"></i>
              </div>
              <div className="input-box">
                <input type="Password" placeholder='Password' value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required />
                <i className="ri-lock-2-line"></i>
              </div>
              <div className="login-msg">
                Already have an account ?<a href="/login">Login</a>
              </div>
              <button type="submit" className="btn">Register</button>
              <p>or login with social platforms</p>
              <div className="icons">
                <a href="#"><i className="ri-google-fill"></i></a>
                <a href="#"><i className="ri-facebook-circle-fill"></i></a>
                <a href="#"><i className="ri-github-fill"></i></a>
                <a href="#"><i className="ri-linkedin-box-fill"></i></a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup