import React from "react";
import { Store } from "./../Store";
import { IEpisode, IAction, IState } from "../interfaces";

const URL =
  "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";

const EpisodeList = React.lazy<any>(() => import("../EpisodesList"));

const HomePage = (): JSX.Element => {
  const {
    state,
    dispatch
  }: { state: IState; dispatch: any } = React.useContext(Store);

  const { episodes, favourites } = state;

  React.useEffect(() => {
    episodes.length === 0 && fetchDateAction();
  });

  const fetchDateAction = async () => {
    const data = await fetch(URL);
    const dataJSON = await data.json();

    return dispatch({
      type: "FETCH_DATA",
      payload: dataJSON._embedded.episodes
    });
  };

  const isEpisodeOnFavourites = (episode: IEpisode): boolean =>
    favourites.includes(episode);

  const toggleFavAction = (episode: IEpisode): IAction => {
    const episodeInFav = isEpisodeOnFavourites(episode);

    return dispatch({
      type: episodeInFav ? "REM_FAV" : "ADD_FAV",
      payload: episode
    });
  };

  return (
    <React.Suspense fallback={<div> ... Loading </div>}>
      <section className="episode-layout">
        <EpisodeList
          episodes={episodes}
          favourites={favourites}
          toggleFavAction={toggleFavAction}
        />
      </section>
    </React.Suspense>
  );
};

export default HomePage;
