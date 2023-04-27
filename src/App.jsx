import { useEffect, useState } from "react";
import "./App.css";

import ShoeForm from "./components/ShoeForm";
import ShoeList from "./components/ShoeList";
import { createPortal } from "react-dom";
import Cart from "./components/Cart";

export default function App() {
  const endpoint = "4f7d9a1c80de4bd18e5bc8bb9c4802de";
  const link = `https://crudcrud.com/api/${endpoint}`;

  const [id, setId] = useState();
  const [shoes, setShoes] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  async function initializeOrFetchFromBackend() {
    const res = await fetch(link);
    const data = await res.json();
    if (data.length === 0) {
      const response = await fetch(`${link}/${em}/shoe`, {
        method: "POST",
        body: JSON.stringify({ cart: [], product: [] }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setId(data[0]._id);
    } else {
      const response = await fetch(`${link}/${em}`);
      const data = await response.json();
      setCartItems(data[0].cart);
      setShoes(data[0].product);
      setId(data[0]._id);
    }
  }

  useEffect(() => {
    initializeOrFetchFromBackend();
  }, []);

  useEffect(() => {
    fetch(`${link}/${id}`, {
      method: "PUT",
      body: JSON.stringify({ cart: cartItems, product: shoes }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }, JSON.stringify(shoes));

  function addShoe(shoe) {
    setShoes((shoes) => [shoe, ...shoes]);
  }

  function toggleCartVisibility() {
    setIsCartVisible((isCartVisible) => !isCartVisible);
  }

  function addCart(id, size) {
    const shoe = shoes.find((shoe) => shoe.id === id);
    if (shoe[size] < 1) {
      return;
    }
    setShoes((shoes) => {
      return shoes.map((shoe) => {
        if (shoe.id === id) {
          const newShoe = { ...shoe };
          newShoe[size]--;
          return newShoe;
        }
        return shoe;
      });
    });
    setCartItems((cartItems) => {
      const item = cartItems.find((item) => item.id === id);
      if (item === undefined) {
        const ret = [
          { ...shoes.find((shoe) => shoe.id === id), S: 0, L: 0, M: 0 },
          ...cartItems,
        ];
        ret[0][size] = 1;
        return ret;
      }
      return cartItems.map((cartItem) => {
        if (cartItem.id === id) {
          const item = { ...cartItem };
          item[size]++;
          return item;
        }
        return cartItem;
      });
    });
  }

  return (
    <div className="flex center">
      <div className="center">
        <ShoeForm addShoe={addShoe} />
        <ShoeList shoes={shoes} addCart={addCart} />
      </div>
      <button onClick={toggleCartVisibility}>
        Your Cart(
        {cartItems.reduce((acc, item) => acc + item.S + item.M + item.L, 0)})
      </button>
      {isCartVisible &&
        createPortal(
          <Cart
            cartItems={cartItems}
            toggleCartVisibility={toggleCartVisibility}
            addCart={addCart}
          />,
          document.getElementById("cart")
        )}
    </div>
  );
}
