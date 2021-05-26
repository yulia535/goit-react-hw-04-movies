import React, { Component } from 'react';
import MoviesList from '../components/MoviesList';
import servicesApp from '../components/services/servicesApp';

class HomePage extends Component {
  state = {
    movies: [],
  };
  componentDidMount() {
    servicesApp
      .getTrendingMovies()
      .then((results) => this.setState({ movies: results }));
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        <h1>Trending to day</h1>

        <MoviesList movies={movies} />
      </div>
    );
  }
}
export default HomePage;
