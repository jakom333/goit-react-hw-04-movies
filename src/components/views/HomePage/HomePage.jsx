import React, { Component } from 'react';
import { fetchMovies } from '../../../services/fetch-api';
import MoviesList from '../../MoviesList/MoviesList';

export default class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetchMovies().then(movies => this.setState({ movies }));
  }

  render() {
    const { movies } = this.state;
    return (
      <>
        <MoviesList movies={movies} />
      </>
    );
  }
}
