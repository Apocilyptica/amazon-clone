import React from "react";
import styled from "styled-components";
import moment from "moment";
import NumberFormat from "react-number-format";

// Material-ui Icons
import CheckIcon from "@material-ui/icons/Check";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";

// Data
import { db } from "../../Firebase/config";

const Product = ({ product, id, setItemsTotal, itemsTotal, index }) => {
  const addToCart = () => {
    const cartItem = db.collection("cartItems").doc(id);
    cartItem.get().then((doc) => {
      if (doc.exists) {
        cartItem.update({
          quantity: doc.data().quantity + 1,
        });
        setItemsTotal(Math.abs(itemsTotal + 1));
      } else {
        db.collection("cartItems").doc(id).set({
          name: product.name,
          image: product.image,
          price: product.price,
          salePrice: product.salePrice,
          isPrime: product.isPrime,
          details: product.details,
          quantity: 1,
        });
      }
    });
  };

  return (
    <Container>
      <Title>{product.name}</Title>
      <PriceContainer>
        {product.price !== 0 ? (
          <Price>
            <NumberFormat value={product.price} displayType={"text"} thousandSeparator={true} prefix={"$"} />
          </Price>
        ) : (
          <SalePrice>
            <NumberFormat value={product.salePrice} displayType={"text"} thousandSeparator={true} prefix={"$"} />
          </SalePrice>
        )}
        {product.isPrime ? (
          <PrimeContainer>
            <CheckIcon color="inherit" />
            <Prime>prime</Prime>
          </PrimeContainer>
        ) : null}
      </PriceContainer>
      <PriceContainer>
        {product.price !== 0 ? (
          <SalePrice>
            <NumberFormat value={product.salePrice} displayType={"text"} thousandSeparator={true} prefix={"$"} />
          </SalePrice>
        ) : null}

        {product.isPrime ? (
          <PrimeContainer>
            <PrimeShippingContainer>
              Free Delivery<PrimeShippingDate>{moment().add(2, "days").format("ddd, MMMM Do")}</PrimeShippingDate>
            </PrimeShippingContainer>
          </PrimeContainer>
        ) : null}
      </PriceContainer>
      <RatingContainer>
        <Rating>
          {Array(product.rating)
            .fill()
            .map((rating, index) => (
              <p key={index}>
                <StarIcon />
              </p>
            ))}
          {Array(Math.abs(5 - product.rating))
            .fill()
            .map((rating, index) => (
              <p key={index}>
                <StarBorderIcon />
              </p>
            ))}
        </Rating>
        <Ratings>
          <NumberFormat value={product.ratings} displayType={"text"} thousandSeparator={true} />
        </Ratings>
      </RatingContainer>
      <Image src={product.image} />
      <br />
      {product.details.map((detail, index) => {
        let detailTitle = /[^:]*/;
        let detailDesc = detail.substr(detail.indexOf(":") + 1);
        return (
          <ProductDetailsContainer key={index}>
            {detail.match(detailTitle)}:<ProductDetails>{detailDesc}</ProductDetails>
          </ProductDetailsContainer>
        );
      })}
      <br />
      <ActionSection>
        <AddToCartButton onClick={addToCart}>Add to Cart</AddToCartButton>
      </ActionSection>
    </Container>
  );
};

export default Product;

const Container = styled.div`
  background-color: white;
  z-index: 100;
  flex: 1;
  padding: 20px;
  // margin: 10px;

  display: flex;
  flex-direction: column;
`;

const Title = styled.span``;

const Price = styled.span`
  font-weight: 500;
  margin-top: 3px;
  text-decoration: line-through;
`;

const SalePrice = styled.span`
  color: red;
  font-weight: 500;
`;

const Rating = styled.div`
  display: flex;
  color: #f0c14b;
`;

const Image = styled.img`
  max-height: 200px;
  object-fit: contain;
`;

const AddToCartButton = styled.button`
  width: 100px;
  height: 30px;
  background-color: #f0c14b;
  border: 2px solid #a88734;
  border-radius: 2px;
  cursor: pointer;
`;

const ActionSection = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RatingContainer = styled.div`
  display: flex;
`;

const Ratings = styled.div`
  color: blue;
`;

const ProductDetailsContainer = styled.div`
  display: flex;
`;

const ProductDetails = styled.div`
  margin-left: 5px;
  font-weight: 700;
`;

const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PrimeContainer = styled.div`
  display: flex;
  color: #f0c14b;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
`;

const Prime = styled.div`
  color: #00a8e1;
  font-weight: 700;
`;

const PrimeShippingContainer = styled.div`
  display: flex;
  color: black;
`;

const PrimeShippingDate = styled.div`
  color: #595855;
  font-weight: 500;
  margin-left: 4px;
`;
