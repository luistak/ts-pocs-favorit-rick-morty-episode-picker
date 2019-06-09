import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { StoreProvider } from "./Store";

import { Router, RouteComponentProps } from "@reach/router";

import HomePage from "./pages/home";
import FavouritesPage from "./pages/favourites";

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;

ReactDOM.render(
  <StoreProvider>
    <Router>
      <App path="/">
        <RouterPage pageComponent={<HomePage />} path="/" />
        <RouterPage pageComponent={<FavouritesPage />} path="favourites" />
      </App>
    </Router>
  </StoreProvider>,
  document.getElementById("root")
);
