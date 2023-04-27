import styled from "styled-components";

const Frame = styled.div`
  padding: 10px 20px 10px 20px;
  border-bottom: solid 2px darkred;
  line-height: 10px;
  display: flex;
`;

const Price = styled.p`
  color: darkred;
  font-weight: bold;
`;

const PriceQuantity = styled.div`
  display: flex;
`;

const Quantity = styled.div`
  border: solid 1px;
  border-color: #0003;
  height: 20px;
  padding: 5px 10px 0 10px;
  margin: 10px 30px;
  font-weight: bold;
  border-radius: 3px;
`;

const Buttons = styled.div`
  margin: 35px 10px 0 auto;
`;

const Button = styled.button`
  width: 40px;
  height: 30px;
  margin: 5px;
  background-color: white;
  border: solid 1.5px;
  border-radius: 5px;
  border-color: #8b000080;
  color: #8b000080;
  &:hover {
    background-color: #8b0000;
    color: white;
  }
`;

export default function CartItem({ item, addCart, subtractCart }) {
  function addClickHandler() {
    addCart(item.id, 1);
  }

  function subtractClickHandler() {
    subtractCart(item.id);
  }

  return (
    <Frame>
      <div>
        <h2>{item.name}</h2>
        <PriceQuantity>
          <Price>${item.price}</Price>
          <Quantity onClick={subtractClickHandler}>x{item.S} S</Quantity>
          <Quantity onClick={subtractClickHandler}>x{item.M} M</Quantity>
          <Quantity onClick={subtractClickHandler}>x{item.L} L</Quantity>
          <h3>{item.price * (item.S + item.M + item.L)}Rs</h3>
        </PriceQuantity>
      </div>
    </Frame>
  );
}
