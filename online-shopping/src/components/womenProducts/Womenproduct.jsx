import React from 'react'
import { Link } from "react-router-dom"
import "./product.css"
import Productdetails from '../ProductDetails/Productdetails'
 
const Womenproduct = ({ Product }) => {
   const handleBuyNow =()=>{
      alert("Thank You For Your Purchase");
   }
  return (
           <>
               <div className='product-stock' >

                     
                        <img src={Product?.image || Product.thumbnail } alt={ Product?.title || Product.name} className='women-product-img' />
                      
                       <div className='women-product-info'>
                        <p>{ Product?.title ||  Product.name}</p>
                        <span className='price'>
                           <b> Price :</b> { Product?.price}
                        </span>

                        <span><b>Rating:</b> {Product?.rating?.rate || Product.rating}</span>
                    
  
                         <button className='product-btn' onClick={handleBuyNow}>buy now</button>
                       </div>
                       
                    
                    </div>
                 
         
           </>
  )
}

export default Womenproduct;