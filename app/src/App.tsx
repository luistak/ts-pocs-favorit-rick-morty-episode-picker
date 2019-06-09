import React from "react";
import "./App.scss";
import { Link } from "@reach/router";
import { Store } from "./Store";
import { IState } from "./interfaces";

const App = ({ children }: any): JSX.Element => {
  const { state }: { state: IState } = React.useContext(Store);
  const { favourites } = state;

  return (
    <>
      <header className="header">
        <div>
          <h1>Rick and Morty</h1>
          <p>Pick your favorite episode</p>
        </div>
        <div>
          <Link to="/"> Home </Link>
          <Link to="/favourites"> Favourite(s): {favourites.length} </Link>
        </div>
      </header>
      {children}
    </>
  );
};

export default App;
