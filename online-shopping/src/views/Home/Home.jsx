import React, { useState, useEffect } from 'react';
import "./Home.css";
import main from "../../assets/home-page/main.png";
import Nav from "../../components/Navbar/Nav"


const Home = () => {

  const [products, setProducts] = useState([]);

  
useEffect(() => {
  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
    
  };
  fetchProducts();
}, []);


  return (
    <>
      <Nav/>
      <div className="slider-content">
        <marquee >Welcome to our online shop! Hurry up and grab the best deals! 20% off on all products!</marquee>
      </div>
      <div className="main-img">
          <img src={main} alt="Main" />
           <div className="main-img-text">
              <h1>Welcome to Our Online Store</h1>
              <p>Discover the latest trends in fashion and shop from the comfort of your home.</p>
              <button className='shop-now'>Shop Now</button>
           </div>

      </div>
   
       <div className="our-products">
             <div className="heading">
                 <h1>Our Products</h1>
             </div>
            
            <div className="products-list">
               {products.map((product) => (
                <div key={product.id} className="product-item">
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p>Price {product.price}</p>
                {/* <p>{product.description}</p> */}
                <button>Buy Now</button>
              </div>
            ))}
              </div>
             
       </div>
    </>
  )
}

export default Home
