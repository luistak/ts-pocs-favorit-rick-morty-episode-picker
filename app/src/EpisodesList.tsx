import React from "react";
import { IEpisode, IEpisodeProps } from "./interfaces";

const EpisodesList = ({
  store: { state, dispatch },
  episodes,
  favourites,
  toggleFavAction
}: IEpisodeProps): JSX.Element[] =>
  episodes.map((episode: IEpisode) => {
    const { id, image, name, season, number } = episode;
    return (
      <section key={id} className="episode-box">
        {image && <img src={image.medium} alt={`Rick and morty ${name}`} />}
        <p>{name}</p>
        <section>
          <div>
            Season: {season} Number: {number}
          </div>
          <button
            type="button"
            onClick={() => toggleFavAction(state, dispatch, episode)}
          >
            {favourites.includes(episode) ? "Unfavourite" : "Favourite"}
          </button>
        </section>
      </section>
    );
  });

export default EpisodesList;
