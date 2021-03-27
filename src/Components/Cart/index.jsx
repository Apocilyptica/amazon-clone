import React, { useEffect, useState } from "react";
import styled from "styled-components";

// Components
import CartItems from "../CartItems";
import CartTotal from "../CartTotal";

const Cart = ({ cartItems, setItemsTotal, itemsTotal }) => {
  const [cartTotal, setCartTotal] = useState(0);
  const [gift, setGift] = useState(false);

  useEffect(() => {
    const CartTotal = cartItems.reduce((accumulator, item) => {
      return accumulator + Math.abs(item.product.quantity * item.product.salePrice);
    }, 0);
    let numberA = parseFloat(CartTotal, 10).toFixed(2);
    setCartTotal(numberA);
    const ItemsTotal = cartItems.reduce((accumulator, item) => {
      return accumulator + item.product.quantity;
    }, 0);
    let numberB = parseInt(ItemsTotal, 10);
    setItemsTotal(numberB);
  }, [cartItems]);

  return (
    <Container>
      <CartItems cartItems={cartItems} setGift={setGift} gift={gift} />
      <CartTotal cartTotal={cartTotal} itemsTotal={itemsTotal} setGift={setGift} gift={gift} />
    </Container>
  );
};

export default Cart;

const Container = styled.div`
  display: flex;
  padding: 14px 18px 0px 18px;
`;
