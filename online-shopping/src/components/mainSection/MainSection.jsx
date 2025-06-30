import React from 'react'
import "./mainSection.css"
const MainSection = ({img}) => {
  return (
    <>
        <div className='main-section'>
                 <div className="hero-content">
                    <span className ="evaluate">Elevate Your</span>
                    <span className='style'>Style!</span>
                      <hr/>
                      <p className='favorite'>yours favorite <br />only on best sellers product</p>
                    <button className='hero-btn'onClick={()=>{alert("Order Placed Successfully!")}}>Shop Now</button>
                </div>
                <div className="hero-img">
                     <img src={img} alt="main image"/>
                </div>
         </div>
    </>
  )
}

export default MainSection