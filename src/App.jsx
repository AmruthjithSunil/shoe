import { useState } from "react";
import "./App.css";

import CartButton from "./components/CartButton";
import ShoeForm from "./components/ShoeForm";
import ShoeList from "./components/ShoeList";

export default function App() {
  const [shoes, setShoes] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  function addShoe(shoe) {
    setShoes((shoes) => [shoe, ...shoes]);
  }

  return (
    <div className="flex center">
      <div className="center">
        <ShoeForm addShoe={addShoe} />
        <ShoeList shoes={shoes} />
      </div>
      <button>Your Cart(0)</button>
    </div>
  );
}
