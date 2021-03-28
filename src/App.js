import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import "./App.css";
import styled from "styled-components";

import { Switch, Route, withRouter } from "react-router-dom";

// Material-ui
import Fab from "@material-ui/core/Fab";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Zoom from "@material-ui/core/Zoom";

// Material-ui Styles
import { makeStyles } from "@material-ui/core/styles";

// Material-ui Icons
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

// Components
import Header from "./Components/Header";
import Cart from "./Components/Cart";

// Pages
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import ShoppingCart from "./Pages/ShoppingCart";

// Data
import { db, auth } from "./Firebase/config";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 2,
  },
}));

const ScrollTop = (props) => {
  const { children } = props;
  const classes = useStyles();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = document.querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
};

function App(props) {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const history = useHistory();
  const classes = useStyles();

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

  const signOut = () => {
    auth.signOut().then(() => {
      localStorage.removeItem("user");
      setUser(null);
      history.push("/");
    });
  };

  useEffect(() => {
    getCartItems();
  }, []);

  return (
    <div>
      {!user ? (
        <Switch>
          <Route exact path="/">
            <Login setUser={setUser} />
          </Route>
          <Route path="/signup">
            <SignUp setUser={setUser} />
          </Route>
        </Switch>
      ) : (
        <Container>
          <Header cartItems={cartItems} signOut={signOut} user={user} id="back-to-top-anchor" />
          <Switch>
            <Route path="/login">
              <Login setUser={setUser} />
            </Route>
            <Route path="/cart">
              <Cart cartItems={cartItems} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <ScrollTop {...props}>
            <Fab className={classes.fab} color="primary" size="small" aria-label="scroll back to top">
              <KeyboardArrowUpIcon />
            </Fab>
          </ScrollTop>
        </Container>
      )}
    </div>
  );
}

export default withRouter(App);

const Container = styled.div`
  height: 100%;
  background-color: #eaeded;
`;
