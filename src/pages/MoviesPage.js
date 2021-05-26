import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
import Form from '../components/form';
import MoviesList from '../components/MoviesList';
import servicesApp from '../components/services/servicesApp';
// import MovieDetailsPage from './MovieDetailsPage';

class MoviesPage extends Component {
  state = {
    request: '',
    movies: [],
  };
  query = (data) => {
    this.setState({ request: data });
  };
  componentDidUpdate(prevProps, prevState) {
    if (this.state.request !== prevState.request) {
      console.log(this.state.request);
      this.loadMovies();
    }
  }
  async loadMovies() {
    servicesApp
      .getMovies(this.state.request)
      .then((results) => this.setState({ movies: results }));
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        <Form onSubmit={this.query} />
        {this.state.movies.length > 0 && <MoviesList movies={movies} />}
      </div>
    );
  }
}
export default MoviesPage;
