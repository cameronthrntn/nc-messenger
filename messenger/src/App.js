import React from 'react';
import UserList from './components/User-List';
import MessageList from './components/Message-List';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <UserList />
      <MessageList />
    </div>
  );
}

export default App;
