import React from 'react';
import CartButton from './CartButton';

const products = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 20 },
  // Add more products as needed
];

const BuyProducts = () => {
  return (
    <div>
      <h1>Buy Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <CartButton item={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BuyProducts;
