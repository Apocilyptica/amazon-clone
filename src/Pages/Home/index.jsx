import React, { useEffect, useState } from "react";
import styled from "styled-components";

// Components
import Product from "../../Components/Product";

// Data
// import { Products } from "../../Data/Products";
import { db } from "../../Firebase/config";

const Home = ({ setItemsTotal, itemsTotal }) => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    db.collection("products").onSnapshot((snapshot) => {
      let tempProducts = [];

      tempProducts = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data(),
      }));

      setProducts(tempProducts);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container>
      <Banner />
      <Content>
        {products.map((data, index) => {
          return <Product key={index} product={data.product} id={data.id} setItemsTotal={setItemsTotal} itemsTotal={itemsTotal} />;
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
  flex-wrap: wrap;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: -350px;
`;
