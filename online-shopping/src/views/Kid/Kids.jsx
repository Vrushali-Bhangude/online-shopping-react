import React from 'react';
import './Kids.css';
import Nav from '../../components/Navbar/Nav';
import Footer from '../../components/Footer/Footer';
// Sample data for kids products
 const kidsProducts = [
  {
    id: 1,
    name: 'Cute Teddy Bear',
    image: 'https://m.media-amazon.com/images/I/61a+GEvULPL._AC_UL480_FMwebp_QL65_.jpg',
    price: 499,
  },
  {
    id: 2,
    name: 'Kids Sneakers',
    image: 'https://m.media-amazon.com/images/I/71RZ5qDY03L._UL1500_.jpg',
    price: 999,
  },
  {
    id: 3,
    name: 'Cartoon T-Shirt',
    image: 'https://m.media-amazon.com/images/I/71vFKBpKakL._UL1500_.jpg',
    price: 299,
  },
  {
    id: 4,
    name: 'Learning Puzzle',
    image: 'https://m.media-amazon.com/images/I/81UwnLWdLaL._SL1500_.jpg',
    price: 349,
  },
  {
    id: 5,
    name: 'Kids Backpack - Unicorn',
    image: 'https://m.media-amazon.com/images/I/71X+7X1JeaL._SL1500_.jpg',
    price: 699,
  },
  {
    id: 6,
    name: 'Remote Control Car',
    image: 'https://m.media-amazon.com/images/I/71N1n-j1yNL._SL1500_.jpg',
    price: 1299,
  },
  {
    id: 7,
    name: 'Baby Girl Dress',
    image: 'https://m.media-amazon.com/images/I/71w4bW2TsmL._UL1500_.jpg',
    price: 799,
  },
  {
    id: 8,
    name: 'Stuffed Bunny Plush Toy',
    image: 'https://m.media-amazon.com/images/I/71xQvF1SrxL._SL1500_.jpg',
    price: 449,
  }
];



function Kids() {
  const handleAddToCart = (product) => {
    alert(`${product.name} added to cart!`);
  };

  return (
    
   <>
     <Nav/>
      <section className="kids-section">
      <h2>🧒 Kids Section</h2>
      <div className="kids-grid">
        {kidsProducts.map((product) => (
          <div key={product.id} className="kids-product">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>


     <Footer/>
     </>
  );
}

export default Kids;
