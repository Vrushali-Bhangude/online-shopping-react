import React from 'react';
import './Kids.css';

const kidsProducts = [
  {
    id: 1,
    name: 'Cute Teddy Bear',
    image: '/images/teddy.jpg',
    price: 499,
  },
  {
    id: 2,
    name: 'Kids Sneakers',
    image: '/images/sneakers.jpg',
    price: 999,
  },
  {
    id: 3,
    name: 'Cartoon T-Shirt',
    image: '/images/tshirt.jpg',
    price: 299,
  },
  {
    id: 4,
    name: 'Learning Puzzle',
    image: '/images/puzzle.jpg',
    price: 349,
  },
];

function Kids() {
  const handleAddToCart = (product) => {
    alert(`${product.name} added to cart!`);
  };

  return (
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
  );
}

export default Kids;
