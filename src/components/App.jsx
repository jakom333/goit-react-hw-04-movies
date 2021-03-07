import { Redirect, Route, Switch } from 'react-router-dom';
import routes from '../routes';
import AppBar from './AppBar/AppBar';
import { lazy, Suspense } from 'react';
import Loader from 'react-loader-spinner';

const HomePage = lazy(() =>
  import('./views/HomePage' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage' /* webpackChunkName: "movies-page" */),
);
const MovieDetails = lazy(() =>
  import('./views/MovieDetails' /* webpackChunkName: "movie-details" */),
);

const App = () => {
  return (
    <>
      <AppBar />
      <Suspense
        fallback={
          <Loader type="ThreeDots" color="#006eff" height={100} width={100} />
        }
      >
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route exact path={routes.movies} component={MoviesPage} />
          <Route path={routes.movieDetails} component={MovieDetails} />
          <Redirect to={routes.home} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
