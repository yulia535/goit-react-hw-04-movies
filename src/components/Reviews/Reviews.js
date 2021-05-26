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
    return (
      <div>
        {this.state.reviews.length > 0 ? (
          <ul>
            {this.state.reviews.map((review) => (
              <li key={review.id}>
                <h3>Author: {review.author}</h3>
                <p>{review.content}</p>
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
