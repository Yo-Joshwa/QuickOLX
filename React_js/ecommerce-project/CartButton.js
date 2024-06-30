import React from 'react';
import { useCart } from '../CartContext';

const CartButton = ({ item }) => {
  const { addToCart } = useCart();

  return (
    <button onClick={() => addToCart(item)}>Add to Cart</button>
  );
};

export default CartButton;
