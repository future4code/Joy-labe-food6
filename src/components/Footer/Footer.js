import React from "react";
import { MainDiv, GoCartDiv, GoHomeDiv, GoProfileDiv } from "./styled";
import theme from "../../constants/theme";
import { Route, Switch, useHistory } from "react-router-dom";
import { goToFeed, goToCart, goToProfile } from "../../route/coordinator"

import { ThemeProvider } from "@material-ui/core/styles";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";

function Footer() {
  const history = useHistory();

  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <MainDiv>
          <Route exact path={["/login", "/", "/feed"]}>
            <GoHomeDiv onClick={() => goToFeed(history)}>
              <HomeOutlinedIcon color="primary" />
            </GoHomeDiv>
            <GoCartDiv onClick={() => goToCart(history)}>
              <ShoppingCartOutlinedIcon />
            </GoCartDiv>
            <GoProfileDiv onClick={() => goToProfile(history)}>
              <PersonOutlineOutlinedIcon />
            </GoProfileDiv>
          </Route>
          <Route exact path="/cart">
            <GoHomeDiv onClick={() => goToFeed(history)}>
              <HomeOutlinedIcon />
            </GoHomeDiv>
            <GoCartDiv onClick={() => goToCart(history)}>
              <ShoppingCartOutlinedIcon color="primary" />
            </GoCartDiv>
            <GoProfileDiv onClick={() => goToProfile(history)}>
              <PersonOutlineOutlinedIcon />
            </GoProfileDiv>
          </Route>
          <Route exact path="/perfil">
            <GoHomeDiv onClick={() => goToFeed(history)}>
              <HomeOutlinedIcon />
            </GoHomeDiv>
            <GoCartDiv onClick={() => goToCart(history)}>
              <ShoppingCartOutlinedIcon />
            </GoCartDiv>
            <GoProfileDiv onClick={() => goToProfile(history)}>
              <PersonOutlineOutlinedIcon color="primary" />
            </GoProfileDiv>
          </Route>
        </MainDiv>
      </Switch>
    </ThemeProvider>
  );
}

export default Footer;
