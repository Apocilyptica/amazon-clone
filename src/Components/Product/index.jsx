import React from "react";
import styled from "styled-components";
import moment from "moment";

// Material-ui Icons
import CheckIcon from "@material-ui/icons/Check";

const Product = ({ product }) => {
  return (
    <Container>
      <Title>{product.title}</Title>
      <PriceContainer>
        <Price>{product.price}</Price>
        {product.isPrime ? (
          <PrimeContainer>
            <CheckIcon color="inherit" />
            <Prime>prime</Prime>
          </PrimeContainer>
        ) : null}
      </PriceContainer>
      <PriceContainer>
        <SalePrice>{product.salePrice}</SalePrice>
        {product.isPrime ? (
          <PrimeContainer>
            <PrimeShippingContainer>
              Free Delivery<PrimeShippingDate>{moment().add(2, "days").format("ddd, MMMM Do")}</PrimeShippingDate>
            </PrimeShippingContainer>
          </PrimeContainer>
        ) : null}
      </PriceContainer>
      <RatingContainer>
        <Rating>⭐⭐⭐⭐⭐</Rating>
        <Ratings>{product.ratings}</Ratings>
      </RatingContainer>
      <Image src={product.image} />
      <br />
      <ProductDetailsContainer>
        Display Size:<ProductDetails>{product.displaySize}</ProductDetails>
      </ProductDetailsContainer>
      <ProductDetailsContainer>
        Disk Size:<ProductDetails>{product.diskSize}</ProductDetails>
      </ProductDetailsContainer>
      <ProductDetailsContainer>
        Connectivity:<ProductDetails>{product.connectivity}</ProductDetails>
      </ProductDetailsContainer>
      <ProductDetailsContainer>
        Brand:<ProductDetails>{product.brand}</ProductDetails>
      </ProductDetailsContainer>
      <br />
      <ActionSection>
        <AddToCartButton>Add to Cart</AddToCartButton>
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
  margin: 10px;
  max-height: 500px;
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

const Rating = styled.div``;

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
