import React from "react";
import { IEpisode } from "./interfaces";

const EpisodesList = ({
  episodes,
  favourites,
  toggleFavAction
}: any): JSX.Element[] =>
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
          <button type="button" onClick={() => toggleFavAction(episode)}>
            {favourites.includes(episode) ? "Unfavourite" : "Favourite"}
          </button>
        </section>
      </section>
    );
  });

export default EpisodesList;
