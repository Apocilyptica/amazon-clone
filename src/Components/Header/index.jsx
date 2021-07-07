import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";

// Material-ui

// Material-ui Icons
import SearchIcon from "@material-ui/icons/Search";
import LocationOnIcon from "@material-ui/icons/LocationOnOutlined";
import BuildIcon from "@material-ui/icons/Build";

// SVG
import CartIcon from "../../assets/images/Cart.svg";

const Header = ({ cartItems, user, signOut, id }) => {
  const getCount = () => {
    let count = 0;
    // Loop through all cart items
    cartItems.forEach((item) => {
      // add the quantity of the cart item to total
      count += item.product.quantity;
    });
    return count;
  };

  return (
    <Container id={id}>
      <HeaderLogo>
        <Link to="/">
          <img src={"https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white-768x232.png"} alt="Logo" />
        </Link>
      </HeaderLogo>

      <HeaderOptionAddress>
        <HeaderOption>
          <LocationOnIcon />
        </HeaderOption>
        <Link to="/googlemap">
          <HeaderOption>
            <OptionLineOne>Deliver to {user.name}</OptionLineOne>
            <OptionLineTwo>
              Address Still in <BuildIcon />{" "}
            </OptionLineTwo>
          </HeaderOption>
        </Link>
      </HeaderOptionAddress>

      <HeaderSearch>
        <HeaderSearchInput type="text" />
        <HeaderSearchIconContainer>
          <SearchIcon fontSize="large" />
        </HeaderSearchIconContainer>
      </HeaderSearch>

      <HeaderNavItems>
        <HeaderOption onClick={signOut}>
          <OptionLineOne>Hello, {user.name}</OptionLineOne>
          <OptionLineTwo>Account & Lists</OptionLineTwo>
        </HeaderOption>
        <HeaderOption>
          <OptionLineOne>Returns</OptionLineOne>
          <OptionLineTwo>& Orders</OptionLineTwo>
        </HeaderOption>

        <HeaderOptionCart>
          <Link to="/cart">
            <CartIconContainer src={CartIcon} />
            {getCount() < 10 ? (
              <CartCountA>
                <NumberFormat value={getCount()} displayType={"text"} />
              </CartCountA>
            ) : (
              <CartCountB>
                <NumberFormat value={getCount()} displayType={"text"} />
              </CartCountB>
            )}
            <CartTitle>Cart</CartTitle>
          </Link>
        </HeaderOptionCart>
      </HeaderNavItems>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  height: 60px;
  background-color: #0f1111;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  padding: 2px;
`;

const HeaderLogo = styled.div`
  img {
    width: 100px;
    margin-left: 11px;
  }
`;

const HeaderOptionAddress = styled.div`
  padding-left: 9px;
  display: flex;
  align-items: center;
`;

const OptionLineOne = styled.div``;

const OptionLineTwo = styled.div`
  font-weight: 700;
`;

const HeaderSearch = styled.div`
  display: flex;
  flex-grow: 1;
  height: 40px;
  border-radius: 4px;
  overflow: hidden;
  margin-left: 4px;
  background-color: white;

  :focus-within {
    box-shadow: 0 0 0 3px #f90;
  }
`;

const HeaderSearchInput = styled.input`
  flex-grow: 1;
  border: none;

  :focus {
    outline: none;
  }
`;

const HeaderSearchIconContainer = styled.div`
  background-color: #febd69;
  width: 45px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderNavItems = styled.div`
  display: flex;
`;

const HeaderOption = styled.div`
  padding: 10px 9px;
  cursor: pointer;
  color: white;

  :hover {
    box-shadow: inset 0px 0px 0px 2px white;
  }
`;

const HeaderOptionCart = styled.div`
  display: flex;
  position: relative;

  a {
    display: flex;
    align-items: center;
    padding-right: 9px;
    color: white;
    text-decoration: none;
  }

  :hover {
    box-shadow: inset 0px 0px 0px 2px white;
  }
`;

const CartCountA = styled.div`
  position: absolute;
  top: 20%;
  left: 32%;
  font-weight: 700;
  color: #febd69;
`;

const CartCountB = styled.div`
  position: absolute;
  top: 20%;
  left: 26%;
  font-weight: 700;
  color: #febd69;
`;

const CartTitle = styled.div`
  padding-left: 4px;
  font-weight: 700;
  margin-top: 20px;
`;

const CartIconContainer = styled.img`
  height: 35px;
`;
