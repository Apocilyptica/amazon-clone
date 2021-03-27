import React from "react";
import styled from "styled-components";

// Components
import CartItem from "../CartItem";

const CartItems = ({ cartItems, gift, setGift }) => {
  return (
    <Container>
      <Title>Shopping Cart</Title>
      <ItemsContainer>
        {cartItems.map((item, index) => (
          <>
            <hr />
            <CartItem key={index} id={item.id} item={item.product} gift={gift} setGift={setGift} />
          </>
        ))}
      </ItemsContainer>
    </Container>
  );
};

export default CartItems;

const Container = styled.div`
  background-color: white;
  flex: 0.8;
  margin-right: 18px;
  padding: 20px;
`;

const Title = styled.div`
  margin-bottom: 8px;
`;

const ItemsContainer = styled.div``;
