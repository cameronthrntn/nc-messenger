import React from 'react';
import UserPage from './components/User-Page';
import MainApp from './components/Main-App';
import UserSignUp from './components/User-Sign-Up';
import { subscribeToTimer } from './api';
import React, { Component } from 'react';
import MessageForm from './components/MessageForm';
import './styles/App.css';
import { Router } from '@reach/router';

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
      <Router className="App">
        <MainApp path="/" />
        <UserSignUp path="/signup" />
        <UserPage path="/user/:user_id" />
      </Router>
        <MessageForm />
        <p className="App-intro">
          This is the timer value: {this.state.timestamp}
        </p>
      </div>
    );
  }
}

export default App;
