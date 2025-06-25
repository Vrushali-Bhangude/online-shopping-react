import React from 'react'

import  "./Nav.css";

const Nav = () => {
  return (
    <>
        <div className='nav'>
            <div className='nav-logo'>
                 <h1> Cloth Store</h1>
            </div>

            <div className="nav-search">
                  <input type="text" placeholder='Search...' />
                  <button>Search</button>
              </div>

             <div className="nav-list">
                 <ul>
                     <li>Home</li>
                     <li> Men </li>
                     <li> Women </li>
                      <li>Kids</li>
                     <li>About</li>
                     <li>Contact</li>
                 </ul>
              
             </div>

             <div className="nav-buttons">
                    <button className='login'>Login</button>
                    <button className='register'>Register</button>
              </div>

            
            
            
        </div>
    </>

  )
}

export default Nav
