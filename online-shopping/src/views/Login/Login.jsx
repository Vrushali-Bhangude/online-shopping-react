import React from 'react'
import 'remixicon/fonts/remixicon.css'
import  './login.css'

const Login = () => {
  return (  
    <>
    <div className='main-container'>
          <div className='heading'>
            <h1><i class="ri-shopping-cart-fill"></i> Welcome to Cloth Store – Your Smart Shopping Partner</h1>
            <h3>Login to explore trendy fashion and exclusive deals!</h3>
          </div>
      <div className="container">
        <div className="form-box login">
          <form action="">
            <h1> Cloth Store <i class="ri-shopping-cart-line"></i></h1>
            <h2>Login <i class="ri-login-circle-line"></i></h2>
            <div className="input-box">
              <input type="text" placeholder='Email' />
                <i className="ri-mail-ai-line"></i>
            </div>
            <div className="input-box">
              <input type="Password" placeholder='Password' />
                <i className="ri-lock-2-line"></i>
            </div>
            <div className="forgot-link">
              If you have to create account ?<a href="#">  Signup</a>
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