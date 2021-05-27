import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
import queryString from 'query-string';
import Form from '../components/form';
import MoviesList from '../components/MoviesList';
import servicesApp from '../components/services/servicesApp';

class MoviesPage extends Component {
  state = {
    request: '',
    movies: [],
  };
  componentDidMount() {
    const request = this.getRequestFromProps(this.props);
    if (request !== undefined) {
      this.setState({ request: request });
      this.loadMovies(request);
    }
  }
  query = (data) => {
    this.setState({ request: data });
    this.onRequestChange(data);
  };
  getRequestFromProps = (props) =>
    queryString.parse(props.location?.search).request;

  componentDidUpdate(prevProps, prevState) {
    const prevRequest = this.getRequestFromProps(prevProps);
    const nextRequest = this.getRequestFromProps(this.props);

    if (prevRequest !== nextRequest) {
      this.loadMovies(this.state.request);
    }
  }

  onRequestChange = (request) => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `request=${request}`,
    });
  };
  async loadMovies(request) {
    servicesApp
      .getMovies(request)
      .then((results) => this.setState({ movies: results }));
  }

  render() {
    const { movies, request } = this.state;
    return (
      <div>
        <Form onSubmit={this.query} />
        {this.state.movies.length > 0 && (
          <MoviesList movies={movies} request={request} />
        )}
      </div>
    );
  }
}
export default MoviesPage;
