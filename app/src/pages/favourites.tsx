import React from "react";

import { Store } from "../Store";
import { IState } from "../interfaces";

const FavouritesPage = ({ children }: any): JSX.Element => {
  const {
    state: { favourites }
  }: { state: IState } = React.useContext(Store);
  return <h1> Favourite(s): {favourites.length} </h1>;
};

export default FavouritesPage;
