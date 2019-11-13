import React, { Component } from 'react';
import { postUser } from '../utils/querying';
import { navigate } from '@reach/router';

export default class UserSignUp extends Component {
  state = {
    username: '',
    avatar: ''
  };
  handleSubmit = async e => {
    e.preventDefault();
    await postUser(this.state);
    navigate('/');
  };
  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">
            <input
              id="username"
              type="text"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="avatar">
            <input
              id="avatar"
              type="text"
              value={this.state.avatar}
              onChange={this.handleChange}
            />
          </label>
          <button>submit</button>
        </form>
      </>
    );
  }
}
