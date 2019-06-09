import React from "react";

export type Dispatch = React.Dispatch<IAction>;

export interface IState {
  episodes: IEpisode[];
  favourites: IEpisode[];
}

export interface IAction {
  type: string;
  payload: IEpisode | any;
}

export interface IEpisode {
  airdate: string;
  airstamp: string;
  airtime: string;
  id: number;
  image: { medium: string; original: string };
  name: string;
  number: number;
  runtime: number;
  season: number;
  summary: string;
  url: string;
}

export interface IEpisodeProps {
  store: {
    state: IState;
    dispatch: Dispatch;
  };
  episodes: IEpisode[];
  favourites: IEpisode[];
  toggleFavAction: (
    state: IState,
    dispatch: Dispatch,
    episode: IEpisode
  ) => IAction;
}
