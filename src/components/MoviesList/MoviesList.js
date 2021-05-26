import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import routes from '..//../routes';

const MoviesList = ({ movies, location }) => (
  <div>
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link
            to={{
              pathname: `${routes.movies}/${movie.id}`,
              state: {
                from: location,
              },
            }}
          >
            {movie.title || movie.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default withRouter(MoviesList);
