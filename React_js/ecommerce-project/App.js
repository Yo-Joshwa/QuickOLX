import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SellProducts from './SellProducts';
import BuyProducts from './BuyProducts';
import Cart from './Cart';
import { CartProvider } from './CartContext';

const App = () => {
  return (
    <Router>
      <CartProvider>
        <div>
          <h1>E-commerce Website</h1>
          <Switch>
            <Route path="/sell" component={SellProducts} />
            <Route path="/buy" component={BuyProducts} />
            <Route path="/cart" component={Cart} />
            <Route path="/" exact component={() => <div>Home</div>} />
          </Switch>
        </div>
      </CartProvider>
    </Router>
  );
};

export default App;
