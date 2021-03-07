import React from 'react';
import defaultMovie from '../images/defaultMovie.png';
import { MovieCardContainer } from './MovieCardStyled';

const MovieCard = ({
  title,
  poster_path,
  vote_average,
  overview,
  release_date,
  genres,
}) => {
  return (
    <MovieCardContainer>
      <img
        className="poster"
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w300${poster_path}`
            : defaultMovie
        }
        alt={title}
      />
      <div>
        {release_date && (
          <h2 className="title">
            {title} ({release_date.slice(0, 4)})
          </h2>
        )}
        <span className="vote">User Score: {vote_average * 10}%</span>
        <h2 className="title">Overview</h2>
        <p className="overview">{overview}</p>
        <h3 className="title">Genres</h3>
        {genres &&
          genres.map(genre => (
            <span className="genres" key={genre.id}>
              {genre.name}
            </span>
          ))}
      </div>
    </MovieCardContainer>
  );
};

export default MovieCard;
