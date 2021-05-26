import React, { lazy } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import MoviesPage from './pages/MoviesPage';
// import MovieDetailsPage from './pages/MovieDetailsPage';
import styles from './styles/baseApp.module.css';
import routes from './routes';

const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import('./pages/MoviesPage' /* webpackChunkName: "movies-page" */)
);
const MovieDetailsPage = lazy(() =>
  import('./pages/MovieDetailsPage' /* webpackChunkName: "movie-details" */)
);

const App = () => (
  <>
    <ul className={styles.NavList}>
      <li>
        <NavLink
          exact
          to={routes.home}
          className={styles.NavLink}
          activeClassName={styles.NavLinkActiv}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={routes.movies}
          className={styles.NavLink}
          activeClassName={styles.NavLinkActiv}
        >
          Movies
        </NavLink>
      </li>
    </ul>
    <Switch>
      <Route exact path={routes.home} component={HomePage} />
      <Route path={routes.movieDetails} component={MovieDetailsPage} />
      <Route path={routes.movies} component={MoviesPage} />
      <Route component={HomePage}></Route>
    </Switch>
  </>
);

export default App;
