import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import defaultMovie from '../images/defaultMovie.png';
import { MovieListContainer } from './MoviesListStyled';

const MoviesList = ({ movies, location, ...rest }) => {
  return (
    <MovieListContainer>
      {movies.map(movie => {
        return (
          <li key={movie.id} className="listItem">
            <Link
              className="link"
              to={{
                pathname: `/movies/${movie.id}`,
                state: { from: location },
              }}
            >
              <img
                className="listImg"
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                    : defaultMovie
                }
                alt={movie.original_title || movie.name}
              />
              <p className="listTitle">{movie.original_title || movie.name}</p>
            </Link>
          </li>
        );
      })}
    </MovieListContainer>
  );
};

export default withRouter(MoviesList);
