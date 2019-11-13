import React, { Component } from 'react';
import { updateUser } from '../utils/querying';
import { navigate } from '@reach/router';

export default class UserUsernameForm extends Component {
  state = {
    [this.props.type]: ''
  };
  handleSubmit = async e => {
    e.preventDefault();
    await updateUser(this.props.user_id, this.state);
    navigate('/');
  };
  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  render() {
    const { type } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={type}>
          <input
            id={type}
            type="text"
            value={this.state[type]}
            onChange={this.handleChange}
          />
        </label>
        <button>{`Submit new ${type}`}</button>
      </form>
    );
  }
}
