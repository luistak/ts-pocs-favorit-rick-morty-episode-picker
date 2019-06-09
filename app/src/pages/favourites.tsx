import React from "react";

import { Link } from "@reach/router";
import { Store } from "../Store";
import { toggleFavAction } from "../actions";
import { IState, Dispatch } from "../interfaces";

const EpisodeList = React.lazy<any>(() => import("../EpisodesList"));

const FavouritesPage = (): JSX.Element => {
  const {
    state,
    dispatch
  }: { state: IState; dispatch: Dispatch } = React.useContext(Store);
  const { favourites } = state;

  return (
    <React.Suspense fallback={<div> ... Loading </div>}>
      <section className="episode-layout">
        {favourites.length === 0 ? (
          <>
            <h1>
              Oops it seem's like there is no favourites episodes, please
              favourite one on the Home page:
            </h1>
            <Link to="/"> Home </Link>
          </>
        ) : (
          <EpisodeList
            episodes={favourites}
            favourites={favourites}
            toggleFavAction={toggleFavAction}
            store={{ state, dispatch }}
          />
        )}
      </section>
    </React.Suspense>
  );
};

export default FavouritesPage;
