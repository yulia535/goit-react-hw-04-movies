import React, { Component } from 'react';
import { Route, Link, Switch, withRouter } from 'react-router-dom';
import servicesApp from '../components/services/servicesApp';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';
import styles from '../styles/MovieDetailsPage.module.css';
import routes from '../routes';
class MovieDetailsPage extends Component {
  state = {
    genres: [],
    poster_path: null,
    title: null,
    vote_average: null,
    overview: null,
    id: null,
    cast: null,
    reviews: null,
  };

  componentDidMount() {
    servicesApp.getOneMovie(this.props.match.params.movieId).then((results) =>
      this.setState({
        poster_path: results.data.poster_path,
        title: results.data.title,
        vote_average: results.data.vote_average,
        genres: results.data.genres,
        overview: results.data.overview,
        id: results.data.id,
      })
    );
  }
  goBack = () => {
    this.props.history.push(this.props.location?.state?.from || routes.movies);
  };

  render() {
    const { poster_path, title, vote_average, overview } = this.state;

    return (
      <div>
        <button
          onClick={this.goBack}
          type='button'
          className={styles.buttonGoBack}
        >
          &#10229; Go back
        </button>
        <div className={styles.movieCard}>
          <img
            className={styles.poster}
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt={title}
          />
          <div>
            <h2>{title}</h2>
            <span>User Score: {vote_average * 10}%</span>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres </h3>
            <p>{this.state.genres.map((genre) => genre.name + ' ')}</p>
          </div>
        </div>
        <div className={styles.movieAdditionalInformation}>
          <h3>Additional information</h3>
          <ul>
            <li>
              <Link to={`${this.props.match.url}/Cast`}>Cast</Link>
            </li>
            <li>
              <Link to={`${this.props.match.url}/Reviews`}>Reviews</Link>
            </li>
          </ul>
        </div>
        <Switch>
          <Route path={`${routes.movieDetails}/Reviews`} component={Reviews} />
          <Route path={`${routes.movieDetails}/Cast`} component={Cast} />
        </Switch>
      </div>
    );
  }
}
export default withRouter(MovieDetailsPage);
