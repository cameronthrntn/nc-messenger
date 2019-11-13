import React from 'react';
import UserPage from './components/User-Page';
import MainApp from './components/Main-App';
import UserSignUp from './components/User-Sign-Up';
import './styles/App.css';
import { Router } from '@reach/router';

function App() {
  return (
    <div className="App">
      <Router className="App">
        <MainApp path="/" />
        <UserSignUp path="/signup" />
        <UserPage path="/user/:user_id" />
      </Router>
    </div>
  );
}

export default App;
