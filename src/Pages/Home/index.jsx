import React from "react";
import styled from "styled-components";

// Components
import Product from "../../Components/Product";

// Data
import { Products } from "../../Data/Products";

const Home = () => {
  return (
    <Container>
      <Banner></Banner>
      <Content>
        {Products.map((product, index) => {
          return <Product key={index} product={product} />;
        })}
      </Content>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  max-width: 1500px;
  margin: 0 auto;
`;

const Banner = styled.div`
  background-image: url(https://i.imgur.com/SYHeuYM.jpg);
  min-height: 600px;
  background-position: center;
  background-size: cover;
  z-index: 1;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;

const Content = styled.div`
  display: flex;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: -350px;
`;
