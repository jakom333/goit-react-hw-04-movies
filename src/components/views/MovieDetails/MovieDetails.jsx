import React, { Component } from 'react';
import { Link, NavLink, Route, Switch } from 'react-router-dom';
import { fetchData } from '../../../services/fetch-api';
import Cast from '../../Cast/Cast';
import MovieCard from '../../MovieCard/MovieCard';
import Reviews from '../../Reviews/Reviews';
import routes from '../../../routes';

export default class MovieDetails extends Component {
  state = {
    movie: {},
    cast: [],
    reviews: [],
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    fetchData(movieId).then(([movie, cast, reviews]) => {
      this.setState({ movie, cast, reviews });
    });
  }

  handleGoBack = () => {
    const { location, history } = this.props;
    history.push(location?.state?.from || routes.home);
  };

  render() {
    const { movie } = this.state;
    const { url, path } = this.props.match;
    return (
      <>
        <button type="button" onClick={this.handleGoBack}>
          Go back
        </button>
        <MovieCard {...movie} />
        <div>
          <h4>Additional Information</h4>
          <NavLink
            to={{
              pathname: `${url}/cast`,
              state: { from: this.props.location?.state?.from },
            }}
          >
            Cast
          </NavLink>
          <NavLink
            to={{
              pathname: `${url}/reviews`,
              state: { from: this.props.location?.state?.from },
            }}
          >
            Reviews
          </NavLink>
        </div>
        <Switch>
          <Route
            path={`${path}/cast`}
            render={props => <Cast cast={this.state.cast} />}
          />
          <Route
            path={`${path}/reviews`}
            render={props => <Reviews reviews={this.state.reviews} />}
          />
        </Switch>
      </>
    );
  }
}
