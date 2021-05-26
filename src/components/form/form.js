import React, { Component } from 'react';
// import Axios from 'axios';
// import { Link } from 'react-router-dom';

class Form extends Component {
  state = {
    request: '',
  };

  handleChenge = (e) => {
    const value = e.currentTarget.value;
    this.setState({ request: value });
  };
  handleInputChange = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.request);
    this.reset();
  };
  reset = () => {
    this.setState({ request: '' });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleInputChange}>
          <input
            type='text'
            autoComplete='off'
            autoFocus
            value={this.state.request}
            onChange={this.handleChenge}
          />

          <button type='submit'>
            <span>Search</span>
          </button>
        </form>
      </div>
    );
  }
}
export default Form;
