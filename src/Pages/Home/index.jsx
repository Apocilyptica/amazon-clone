import React, { useEffect, useState } from "react";
import styled from "styled-components";

// Material-ui
import Grid from "@material-ui/core/Grid";

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
        <Grid container spacing={3}>
          {products.map((data, index) => {
            return (
              <Grid item xs={index < 2 ? 6 : 4}>
                <ProductContainer>
                  <Product key={index} product={data.product} id={data.id} setItemsTotal={setItemsTotal} itemsTotal={itemsTotal} index={index} />
                </ProductContainer>
              </Grid>
            );
          })}
        </Grid>
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
  padding-left: 10px;
  padding-right: 10px;
  margin-top: -350px;
`;

const ProductContainer = styled.div`
  overflow: hidden;
  height: 100%;
  width: 100%;
  display: flex;
  border-radius: 5px;
  box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);
`;
