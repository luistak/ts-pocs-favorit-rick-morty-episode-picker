import React from "react";
import { Store } from "./../Store";
import { IState, Dispatch } from "../interfaces";
import { fetchDateAction, toggleFavAction } from "../actions";

const EpisodeList = React.lazy<any>(() => import("../EpisodesList"));

const HomePage = (): JSX.Element => {
  const {
    state,
    dispatch
  }: { state: IState; dispatch: Dispatch } = React.useContext(Store);

  const { episodes, favourites } = state;

  React.useEffect(() => {
    episodes.length === 0 && fetchDateAction(dispatch);
  });

  return (
    <React.Suspense fallback={<div> ... Loading </div>}>
      <section className="episode-layout">
        <EpisodeList
          episodes={episodes}
          favourites={favourites}
          toggleFavAction={toggleFavAction}
          store={{ state, dispatch }}
        />
      </section>
    </React.Suspense>
  );
};

export default HomePage;
