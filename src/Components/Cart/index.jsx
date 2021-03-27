import React, { useEffect, useState } from "react";
import styled from "styled-components";

// Components
import CartItems from "../CartItems";
import CartTotal from "../CartTotal";

const Cart = ({ cartItems }) => {
  const [gift, setGift] = useState(false);

  return (
    <Container>
      <CartItems cartItems={cartItems} setGift={setGift} gift={gift} />
      <CartTotal cartItems={cartItems} setGift={setGift} gift={gift} />
    </Container>
  );
};

export default Cart;

const Container = styled.div`
  display: flex;
  padding: 14px 18px 0px 18px;
`;
