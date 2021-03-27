import { useEffect, useState } from "react";

import "./App.css";
import styled from "styled-components";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Header from "./Components/Header";
import Cart from "./Components/Cart";

// Pages
import Home from "./Pages/Home";

// Data
import { db } from "./Firebase/config";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [itemsTotal, setItemsTotal] = useState(0);

  const getCartItems = () => {
    db.collection("cartItems").onSnapshot((snapshot) => {
      let tempItems = [];
      tempItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data(),
      }));
      setCartItems(tempItems);
    });
  };

  useEffect(() => {
    getCartItems();
  }, []);

  return (
    <Router>
      <Container>
        <Header itemsTotal={itemsTotal} />
        <Switch>
          <Route path="/cart">
            <Cart cartItems={cartItems} setItemsTotal={setItemsTotal} itemsTotal={itemsTotal} />
          </Route>
          <Route path="/">
            <Home setItemsTotal={setItemsTotal} itemsTotal={itemsTotal} />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;

const Container = styled.div`
  height: 100%;
  background-color: #eaeded;
`;
