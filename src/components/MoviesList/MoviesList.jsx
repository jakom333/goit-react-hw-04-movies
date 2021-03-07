import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import defaultMovie from '../images/defaultMovie.png';

const MoviesList = ({ movies, location, ...rest }) => {
  console.log(location, rest);
  return (
    <ul>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <Link
              to={{
                pathname: `/movies/${movie.id}`,
                state: { from: location },
              }}
            >
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                    : defaultMovie
                }
                alt={movie.original_title || movie.name}
              />
              <p>{movie.original_title || movie.name}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default withRouter(MoviesList);
