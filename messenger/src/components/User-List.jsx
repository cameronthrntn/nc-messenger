import React, { Component } from 'react';
import '../styles/User-List.css';
import * as querying from '../utils/querying';

export default class UserList extends Component {
  state = {
    users: [],
    isLoading: true
  };

  componentDidMount = async () => {
    const users = await querying.getUsers();
    this.setState({ users, isLoading: false });
  };

  render() {
    const { users, isLoading } = this.state;

    return (
      <ul className="UserList">
        {isLoading ? (
          <h1>Usernames Loading...</h1>
        ) : (
          users.map(user => {
            return <li key={user.user_id}>{user.username}</li>;
          })
        )}
      </ul>
    );
  }
}
