import React from 'react'
import "./Kids.css"
import pic1 from '../../assets/dress1.jpg'
import pic2 from '../../assets/dress2.jpg'
import pic3 from '../../assets/dress3.jpg'
import pic4 from '../../assets/dress4.jpg'
import pic5 from '../../assets/dress5.jpg'
import pic6 from '../../assets/dress6.jpg'
import pic7 from '../../assets/dress7.jpg'
import pic8 from '../../assets/dress8.jpg'
import pic9 from '../../assets/dress9.jpg'

const Kids = () => {
    return (
     <>
    <div className='main-container'>
      <div className='header'>
        <h1>Kids Cloth store</h1>
        <h4>latest fashion</h4>
      </div>

      <div className='box-container'>
        <div className='container'>
          <div className='container'><img src={pic1}></img>
          <span className='para'><h4>Kids Fashion</h4>
          <h5>$85</h5></span></div>
          <div className='container'><img src={pic2}></img>
          <h4>Kids Fashion</h4>
          <h5>$95</h5></div>
          <div className='container'><img src={pic3}></img>
          <h4>Kids Fashion</h4>
          <h5>$85</h5></div>
          <div className='container'><img src={pic4}></img>
          <h4>Kids Fashion</h4>
          <h5>$65</h5></div>
          <div className='container'><img src={pic5}></img>
          <h4>Kids Fashion</h4>
          <h5>$55</h5></div>
          <div className='container'><img src={pic6}></img>
          <h4>Kids Fashion</h4>
          <h5>$85</h5></div>
          <div className='container'><img src={pic7}></img>
          <h4>Kids Fashion</h4>
          <h5>$65</h5></div>
          <div className='container'><img src={pic8}></img>
          <h4>Kids Fashion</h4>
          <h5>$85</h5></div>
          <div className='container'><img src={pic9}></img>
          <h4>Kids Fashion</h4>
          <h5>$55</h5></div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Kids
