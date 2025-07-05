import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";
import "./details.css"

const Productdetails = () => {
     const { id,source }= useParams();
     const[product ,setProduct] = useState();
     const[loading , setloading]= useState(true);

     const handlefavorite =()=>{
      alert("Added to Favorites");
   }
     useEffect(()=>{
      const fetchProduct =async () =>{
      setloading(true);
      try {
        
         if(source === "fakestore"){
            const res= await axios.get(`https://fakestoreapi.com/products/${id}`) 
            setProduct(res.data)
           
            }else if(source === "dummy"){
              const res2 =await axios.get(`https://dummyjson.com/products/${id}`)
              setProduct(res2.data)
            
          }
         
      } catch (error) {
        console.log(error);
      }
       setloading(false);
    } 
       fetchProduct();
     },[id,source]);

     if(loading)return <p>Loading...</p>
     if(!product) return <p>Product Not Found</p>
  return (
    <div className="details-container">
         <div className="heading">PRODUCT DETAILS</div>

    <div className="product-details">
      <img src={product?.image || product?.thumbnail} alt={product?.title || product?.name} className="detail-img"/>
       <h2> {product?.title || product?.name} </h2>
      <p> <b>Price:</b> $ {product?.price}</p>
      <p className="description"> <b>Description:</b> {product?.description}</p>
      <p><b>Rating:</b>  {product?.rating?.rate || product?.rating}%</p>
      {product?.discountPercentage && (<p><b>Discount : </b> {product.discountPercentage}% OFF</p>)}

        <button className="favBtn" onClick={handlefavorite}>Favorite<i class="ri-heart-line"></i></button>
      <Link to = "/women" className="go-back">Go Back</Link>
    
    </div>
    </div>
  );
};

export default Productdetails;