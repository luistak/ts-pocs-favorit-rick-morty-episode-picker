import React from "react";
import { IState, IAction } from "./interfaces";

const initialState: IState = {
  episodes: [],
  favourites: []
};

function reducer(state: IState, { type, payload }: IAction): IState {
  switch (type) {
    case "FETCH_DATA":
      return {
        ...state,
        episodes: payload
      };
    case "ADD_FAV":
      return {
        ...state,
        favourites: state.favourites.concat(payload)
      };
    case "REM_FAV":
      const filteredFavourites = state.favourites.filter(
        episode => episode.id !== payload.id
      );
      return {
        ...state,
        favourites: filteredFavourites
      };
    default:
      return state;
  }
}

export const Store = React.createContext<IState | any>(initialState);

export function StoreProvider({ children }: any): JSX.Element {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
}
