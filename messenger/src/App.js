import { subscribeToTimer } from './api';
import React, { Component } from 'react';
import UserList from './components/User-List';
import MessageList from './components/Message-List';
import MessageForm from './components/MessageForm';
import './styles/App.css';

class App extends Component {
  state = {
    timestamp: null
  };
  componentDidMount() {
    subscribeToTimer((err, timestamp) => this.setState({ timestamp }));
  }
  render() {
    return (
      <div className="App">
        <UserList />
        <MessageList />
        <MessageForm />
        <p className="App-intro">
          This is the timer value: {this.state.timestamp}
        </p>
      </div>
    );
  }
}

export default App;
