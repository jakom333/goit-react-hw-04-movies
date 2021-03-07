import React, { Component } from 'react';
import { searchMovies } from '../../../services/fetch-api';
import MoviesList from '../../MoviesList/MoviesList';
import { SearchForm } from './MoviesPageStyled';

export default class MoviesPage extends Component {
  state = {
    query: '',
    movies: [],
  };
  componentDidMount() {
    if (this.props.location.search) {
      const { query } = Object.fromEntries(
        new URL(window.location).searchParams.entries(),
      );
      searchMovies(query).then(movies => this.setState({ movies }));
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.search !== this.props.location.search) {
      searchMovies(this.state.query).then(movies => this.setState({ movies }));
    }
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `?query=${this.state.query}`,
    });
  };

  onHandleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { query, movies } = this.state;
    return (
      <SearchForm>
        <form onSubmit={this.onSubmit}>
          <input
            className="input"
            type="text"
            name="query"
            value={query}
            onChange={this.onHandleChange}
          />
          <button type="submit" className="btn">
            Search
          </button>
        </form>
        <MoviesList movies={movies} />
      </SearchForm>
    );
  }
}
