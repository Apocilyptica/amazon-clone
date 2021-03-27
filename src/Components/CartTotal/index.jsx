import React, { useState } from "react";
import styled from "styled-components";
import NumberFormat from "react-number-format";

const CartTotal = ({ cartTotal, itemsTotal, gift, setGift }) => {
  const handleChecked = () => {
    if (!gift) {
      setGift(true);
    } else {
      setGift(false);
    }
  };
  return (
    <Container>
      <TotalContainer>
        <Title>Subtotal ({itemsTotal} items):</Title>
        <PriceContainer>
          <NumberFormat value={cartTotal} displayType={"text"} thousandSeparator={true} prefix={"$"} />
        </PriceContainer>
      </TotalContainer>
      <GiftContainer>
        <Checkbox>
          <input type="checkbox" onClick={handleChecked} checked={gift} />
        </Checkbox>
        <GiftText>This order contains a gift</GiftText>
      </GiftContainer>
      <Button>Proceed to checkout</Button>
    </Container>
  );
};

export default CartTotal;

const Container = styled.div`
  height: 120px;
  background-color: white;
  flex: 0.2;
  margin-right: 18px;
  padding: 20px;
`;

const TotalContainer = styled.div`
  display: flex;
`;

const GiftContainer = styled.div`
  display: flex;
`;

const Checkbox = styled.div``;

const GiftText = styled.div`
  margin-left: 8px;
`;

const Title = styled.div`
  margin-bottom: 8px;
  font-size: 20px;
`;

const PriceContainer = styled.div`
  margin-left: 8px;
  font-weight: 700;
  font-size: 20px;
`;

const Button = styled.button`
  box-shadow: 0 2px 5px 0 rgb(213 217 217 / 50%);
  background: #ffd814;
  background-color: #fcd200;
  padding: 10px;
  width: 100%;
  margin: 20px 0px;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  :hover {
    background: #f7ca00;
    border-color: #f2c200;
    box-shadow: 0 2px 5px 0 rgb(213 217 217 / 50%);
  }
`;
