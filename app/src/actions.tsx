import { IEpisode, IAction, IState } from "./interfaces";

const isEpisodeOnFavourites = (state: IState, episode: IEpisode): boolean =>
  state.favourites.includes(episode);
const URL =
  "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";

export const fetchDateAction = async (dispatch: any) => {
  const data = await fetch(URL);
  const dataJSON = await data.json();

  return dispatch({
    type: "FETCH_DATA",
    payload: dataJSON._embedded.episodes
  });
};

export const toggleFavAction = (
  state: IState,
  dispatch: any,
  episode: IEpisode
): IAction => {
  const episodeInFav = isEpisodeOnFavourites(state, episode);

  return dispatch({
    type: episodeInFav ? "REM_FAV" : "ADD_FAV",
    payload: episode
  });
};
