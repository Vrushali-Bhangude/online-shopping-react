import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import axios from "axios"
import "./women.css"

import heroImg from "../../assets/mainImg.png";
import girl1 from "../../assets/Girl1.jpg"
import girl2 from "../../assets/Girl2.jpg"
import MainSection from '../../components/mainSection/Mainsection.jsx';
import Womenproduct from '../../components/womenProducts/Womenproduct.jsx';
import Nav from '../../components/Navbar/Nav';
import Footer from '../../components/Footer/Footer';

const Women = () => {
  const[womensProduct, setwomensProduct] = useState([]);
  const[SecProduct, setSecProduct]= useState([]);
  
  const handleBuyNow =()=>{
      alert("Thank You For Your Purchase");
   }

  useEffect(()=>{
    const AllProducts =async() =>{
      try {
         const result =await axios.get("https://fakestoreapi.com/products/category/women%27s%20clothing");

         const fakestore= result.data.map(item =>({
             ...item,
             source:"fakestore"
         }))
         setwomensProduct(fakestore);
        } catch (error) {
        console.log(error);
      }
    }
     AllProducts();
  },[]);
     useEffect(()=>{
    const SecProduct =async() =>{
      try {
           const WomenData = await axios.get("https://dummyjson.com/products/category/tops");
             
           const Dummy=WomenData.data.products.map(item =>({
              ...item,
              source:"dummy"
           }))
              setSecProduct(Dummy);
        } catch (error) {
        console.log(error);
      }
    }
      SecProduct();
},[]);
  return (
    <>
    <Nav/>
    <div className='main-women-container'>
       <div className="hero-section">
          <MainSection img={heroImg}/>
       </div>
       <div className='wearable-stock-heading'>Trendy Women's Wear</div>
       <div className='wearable-stock'>
           { womensProduct.map((product) => (
              <Link to={`/product/${product.id}/${product.source}`} key={product.id}  className='link-style' >
                   < Womenproduct key={product.id} Product={product} />
                </Link>
             ))}
          
       </div>-
       <hr />
         <div className='available-stocks'> 
               
                      <img  src={girl1} className='girl1'/>
              
               <div className='offer'>
                    <h3 className="offer-content">spring Collection</h3>
                    <h1 className="off">30% OFF</h1>
                    <button className='offer-btn' onClick={handleBuyNow}>buy now</button>
               </div>
              
                     <img src={girl2} className='girl2'/>
             
           </div>
           <hr />
      
                <div className='wearable-stock-heading'>Fashionable Tops</div>
               <div className='wearable-stock'>
             {SecProduct.map((item) => (
                <Link to={`/product/${item.id}/${item.source}`} key={item.id} className='link-style' >
             < Womenproduct key={item.id} Product={item} />
                </Link>
             ))}
           </div>
      </div>
     <Footer/>
    </>
  )
}

export default Women
