import React, { Component } from 'react';
import servicesApp from '../services/servicesApp';

class Reviews extends Component {
  state = {
    reviews: '',
  };
  componentDidMount() {
    this.getReviews();
  }

  getReviews = () => {
    servicesApp
      .getReviews(this.props.match.params.movieId)
      .then((response) => this.setState({ reviews: response.data.results }));
  };
  render() {
    const { reviews } = this.state;
    return (
      <div>
        {reviews.length > 0 ? (
          <ul>
            {reviews.map(({ id, author, content }) => (
              <li key={id}>
                <h3>Author: {author}</h3>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>We don't have any rewiews for thia movie.</p>
        )}
      </div>
    );
  }
}
export default Reviews;
