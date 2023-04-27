import styled from "styled-components";
import CartItem from "./CartItem";

const Frame = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #000d;
`;

const Backdrop = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

const Overlay = styled.div`
  width: 60%;
  position: fixed;
  top: 10%;
  left: 20%;
  background: white;
`;

export default function cart({
  toggleCartVisibility,
  cartItems,
  addCart,
  subtractCart,
}) {
  return (
    <Frame>
      <Backdrop onClick={toggleCartVisibility} />
      <Overlay>
        {cartItems.map((cartItem) => (
          <CartItem
            addCart={addCart}
            subtractCart={subtractCart}
            key={cartItem.id}
            item={cartItem}
          />
        ))}
        <div>
          <h2>
            Total :
            {cartItems.reduce(
              (totalAmount, cartItem) =>
                totalAmount +
                (cartItem.S + cartItem.M + cartItem.L) * cartItem.price,
              0
            )}
          </h2>
        </div>
      </Overlay>
    </Frame>
  );
}
