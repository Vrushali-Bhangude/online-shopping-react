import React from 'react'
import './signup.css'

const Signup = () => {
  return (
    <>
     
      <div className='background-image'>
         <div className='header2'>
        <marquee behavior="scroll" direction="left"><h1> Welcome in Cloth Store  <i class="ri-shopping-cart-line">."Create your account to explore the latest fashion."</i></h1></marquee>
      </div>
        <div className='main-container-page'>
          <div className='signup-container'>
            <form action="">
              <h1> Cloth Store  <i class="ri-shopping-cart-line"></i></h1>
              <h2>Registration<i class="ri-login-circle-line"></i></h2>
              <div className="input-box">
                <input type="text" placeholder='Full Name' />
                <i className="ri-user-3-line"></i>
              </div>
              <div className="input-box">
                <input type="text" placeholder='Email' />
                <i className="ri-mail-ai-line"></i>
              </div>
              <div className="input-box">
                <input type="Password" placeholder='Password' />
                <i className="ri-lock-2-line"></i>
              </div>
              <div className="login-msg">
                Already have an account ?<a href="#">Login</a>
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