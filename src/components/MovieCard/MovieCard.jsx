import React from 'react';
import defaultMovie from '../images/defaultMovie.png';

const MovieCard = ({
  title,
  poster_path,
  vote_average,
  overview,
  release_date,
  genres,
}) => {
  return (
    <>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w300${poster_path}`
            : defaultMovie
        }
        alt={title}
      />
      <div>
        {release_date && (
          <h2>
            {title} ({release_date.slice(0, 4)})
          </h2>
        )}
        <span>User Score: {vote_average * 10}%</span>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h3>Genres</h3>
        {genres &&
          genres.map(genre => <span key={genre.id}>{genre.name}</span>)}
      </div>
    </>
  );
};

export default MovieCard;
