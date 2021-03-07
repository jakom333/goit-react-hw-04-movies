import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import { fetchData } from '../../../services/fetch-api';
import Cast from '../../Cast/Cast';
import MovieCard from '../../MovieCard/MovieCard';
import Reviews from '../../Reviews/Reviews';
import routes from '../../../routes';
import { MovieDetailsContainer } from './MovieDetailsStyled';

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
    const { movie, cast, reviews } = this.state;
    const { url, path } = this.props.match;
    return (
      <MovieDetailsContainer>
        <button className="btn" type="button" onClick={this.handleGoBack}>
          Go back
        </button>
        <MovieCard {...movie} />
        <div>
          <h4 className="subTitle">Additional Information</h4>
          <NavLink
            exact
            className="navLink"
            activeClassName="activeNavLink"
            to={{
              pathname: `${url}/cast`,
              state: { from: this.props.location?.state?.from },
            }}
          >
            Cast
          </NavLink>
          <NavLink
            exact
            className="navLink"
            activeClassName="activeNavLink"
            to={{
              pathname: `${url}/reviews`,
              state: { from: this.props.location?.state?.from },
            }}
          >
            Reviews
          </NavLink>
        </div>
        <Switch>
          <Route path={`${path}/cast`} render={props => <Cast cast={cast} />} />
          <Route
            path={`${path}/reviews`}
            render={props => <Reviews reviews={reviews} />}
          />
        </Switch>
      </MovieDetailsContainer>
    );
  }
}
