import "./App.css";
import styled from "styled-components";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Header from "./Components/Header";
import Cart from "./Components/Cart";

// Pages
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <Container>
        <Header />
        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;

const Container = styled.div`
  height: 100vh;
  background-color: #eaeded;
`;
