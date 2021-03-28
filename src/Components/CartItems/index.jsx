import React from "react";
import styled from "styled-components";
import NumberFormat from "react-number-format";

// Components
import CartItem from "../CartItem";

// Material-ui Icons
import WarningIcon from "@material-ui/icons/Warning";

const CartItems = ({ cartItems, gift, setGift }) => {
  return (
    <Container>
      {cartItems.length > 0 ? (
        <MessageContainer>
          <Important>
            <WarningIcon fontSize="large" />
          </Important>
          <ImportantDetails>
            <ImportantMessage>Important messages about items in you Cart:</ImportantMessage>
            <ImportantTitle>1 item in your Cart has changed price.</ImportantTitle>
            <ImportantDescription>
              Items in your Shopping Cart will always reflect the most recent price displayed on their product detail pages.
            </ImportantDescription>
            <ul>
              <li>
                <ImportantItemContainer>
                  <ImportantItem>{cartItems[0].product.name}</ImportantItem>
                  <ImportantItemDescription>
                    has increased from{" "}
                    <RedPrice>
                      <NumberFormat value={cartItems[0].product.salePrice} displayType={"text"} thousandSeparator={true} prefix={"$"} />{" "}
                    </RedPrice>
                    <ImportantItemDescription>to</ImportantItemDescription>
                    <RedPrice>
                      <NumberFormat value={cartItems[0].product.salePrice + 1.2} displayType={"text"} thousandSeparator={true} prefix={"$"} />{" "}
                    </RedPrice>
                  </ImportantItemDescription>
                </ImportantItemContainer>
              </li>
            </ul>
          </ImportantDetails>
        </MessageContainer>
      ) : null}

      <CartContainer>
        {cartItems.length === 0 ? <Title>Your Amazon Cart is empty.</Title> : <Title>Shopping Cart</Title>}

        <ItemsContainer>
          {cartItems.map((item, index) => (
            <div key={index}>
              <hr />
              <CartItem id={item.id} item={item.product} gift={gift} setGift={setGift} />
            </div>
          ))}
          {cartItems.length === 0 ? (
            <EmptyCartContainer>
              <div>
                Your Shopping Cart lives to serve. Give it purpose — fill it with groceries, clothing, household supplies, electronics, and more.
              </div>
              <div>Continue shopping on the Amazon.com homepage, learn about today's deals, or visit your Wish List.</div>
            </EmptyCartContainer>
          ) : null}
        </ItemsContainer>
      </CartContainer>
    </Container>
  );
};

export default CartItems;

const Container = styled.div`
  flex: 0.8;
`;

const Title = styled.div`
  margin-bottom: 8px;
  font-weight: 700;
  font-size: 35px;
`;

const ItemsContainer = styled.div``;

const MessageContainer = styled.div`
  display: flex;
  background-color: white;
  margin-right: 18px;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  border: 3px solid #fcd200;
`;

const CartContainer = styled.div`
  background-color: white;
  margin-right: 18px;
  padding: 20px;
  border-radius: 8px;
`;

const Important = styled.div`
  color: #fcd200;
  margin-right: 20px;
`;

const ImportantDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ImportantMessage = styled.div`
  color: #fcd200;
  font-weight: 700;
  font-size: 20px;
  padding-bottom: 10px;
`;

const ImportantTitle = styled.div`
  font-weight: 500;
`;

const ImportantDescription = styled.div``;

const ImportantItemContainer = styled.div`
  display: flex;
`;

const ImportantItem = styled.div`
  display: flex;
  font-size: 15px;
  color: #2596be;
`;

const ImportantItemDescription = styled.div`
  display: flex;
  font-size: 14px;
  margin-left: 3px;
  align-items: center;
`;

const RedPrice = styled.div`
  margin-left: 3px;
  color: red;
`;

const EmptyCartContainer = styled.div``;
