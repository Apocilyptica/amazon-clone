import React, { useState } from "react";
import styled from "styled-components";
import moment from "moment";
import NumberFormat from "react-number-format";

// Material-ui Icons
import CheckIcon from "@material-ui/icons/Check";

// Data
import { db } from "../../Firebase/config";

const CartItem = ({ id, item, gift, setGift }) => {
  let options = [];

  for (let i = 1; i < Math.max(item.quantity + 1, 20); i++) {
    options.push(
      <option key={i} value={i}>
        {" "}
        Qty: {i}{" "}
      </option>
    );
  }

  const handleQtyChange = (event) => {
    event.preventDefault();
    const Quantity = parseInt(event.target.value, 10);
    const cartItem = db.collection("cartItems").doc(id);
    cartItem.get().then((doc) => {
      cartItem.update({
        quantity: Quantity,
      });
    });
  };

  const handleDelete = (event) => {
    event.preventDefault();
    const cartItem = db.collection("cartItems").doc(id);
    cartItem.delete();
  };

  const handleChecked = (event) => {
    if (!gift) setGift(event.target.checked);
  };

  return (
    <Container>
      <ImageContainer>
        <img src={item.image} alt="something" />
      </ImageContainer>

      <CartItemInfo>
        <CartItemInfoTop>
          <h2>{item.name}</h2>
          <DetailsContainer>
            <div>In Stock</div>
            {item.isPrime ? (
              <PrimeContainer>
                <CheckIcon color="inherit" />
                <Prime>
                  prime <span>& FREE Returns</span>
                </Prime>
              </PrimeContainer>
            ) : null}
            <GiftContainer>
              <Checkbox>
                <input type="checkbox" onClick={handleChecked} checked={gift} />
              </Checkbox>
              <GiftText>This order contains a gift</GiftText>
            </GiftContainer>
            {item.details.map((detail, index) => {
              let detailTitle = /[^:]*/;
              let detailDesc = detail.substr(detail.indexOf(":") + 1);
              return (
                <ProductDetailsContainer key={index}>
                  {detail.match(detailTitle)}:<ProductDetails>{detailDesc}</ProductDetails>
                </ProductDetailsContainer>
              );
            })}
          </DetailsContainer>
        </CartItemInfoTop>
        <CartItemInfoBottom>
          <CartItemQuantityContainer>
            <select onChange={handleQtyChange} value={item.quantity}>
              {options}
            </select>
          </CartItemQuantityContainer>
          <CartItemDeleteContainer onClick={handleDelete}>Delete</CartItemDeleteContainer>
        </CartItemInfoBottom>
      </CartItemInfo>

      <CartItemPrice>
        <PriceContainer>
          {item.price !== 0 ? (
            <Price>
              <NumberFormat value={item.price} displayType={"text"} thousandSeparator={true} prefix={"$"} />
            </Price>
          ) : null}

          <SalePrice>
            <NumberFormat value={item.salePrice} displayType={"text"} thousandSeparator={true} prefix={"$"} />
          </SalePrice>
        </PriceContainer>
        <PrimeShippingContainer>
          Free Delivery<PrimeShippingDate>{moment().add(2, "days").format("ddd, MMMM Do")}</PrimeShippingDate>
        </PrimeShippingContainer>
      </CartItemPrice>
    </Container>
  );
};

export default CartItem;

const Container = styled.div`
  padding: 12px 0px;
  display: flex;
  border-bottom: 1ps solid #ddd;
`;

const ImageContainer = styled.div`
  width: 180px;
  height: 180px;
  flex-shrink: 0;
  flex-grow: 0;
  margin-right: 16px;

  img {
    object-fit: contain;
    height: 100%;
    width: 100%;
  }
`;

const CartItemInfo = styled.div`
  flex-grow: 1;
`;

const CartItemInfoTop = styled.div`
  color: #007185;
  h2 {
    font-size: 18px;
  }
`;

const CartItemInfoBottom = styled.div`
  display: flex;
  margin-top: 4px;
  align-items: center;
`;

const CartItemQuantityContainer = styled.div`
  select {
    border-radius: 7px;
    background-color: #f0f2f2;
    padding: 8px;
    box-shadow: 0 2px 5px rgba(15, 17, 17, 0.15);

    :focus {
      outline: none;
    }
  }
`;

const CartItemDeleteContainer = styled.button`
  color: #007185;
  margin-left: 16px;
  cursor: pointer;
  border-radius: 7px;
  background-color: #f0f2f2;
  padding: 8px;
  box-shadow: 0 2px 5px rgba(15, 17, 17, 0.15);

  :focus {
    outline: none;
  }
`;

const CartItemPrice = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Price = styled.span`
  font-weight: 500;
  margin-top: 3px;
  text-decoration: line-through;
`;

const SalePrice = styled.span`
  color: red;
  font-weight: 500;
  padding-left: 8px;
`;

const PriceContainer = styled.div``;

const PrimeContainer = styled.div`
  display: flex;
  color: #f0c14b;
`;

const Prime = styled.div`
  color: #00a8e1;
  font-weight: 700;

  span {
    color: black;
  }
`;

const ShippingDate = styled.div``;

const PrimeShippingContainer = styled.div`
  display: flex;
  color: black;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  min-width: 1px;
`;

const PrimeShippingDate = styled.div`
  color: #595855;
  font-weight: 500;
  margin-left: 4px;
`;

const DetailsContainer = styled.div`
  color: black;
`;

const GiftContainer = styled.div`
  display: flex;
`;

const Checkbox = styled.div``;

const GiftText = styled.div`
  margin-left: 8px;
`;
const ProductDetailsContainer = styled.div`
  display: flex;
`;

const ProductDetails = styled.div`
  margin-left: 5px;
  font-weight: 700;
`;
