import React, { Component } from 'react';

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
    const { request } = this.state;
    return (
      <div>
        <form onSubmit={this.handleInputChange}>
          <input
            type='text'
            autoComplete='off'
            autoFocus
            value={request}
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
