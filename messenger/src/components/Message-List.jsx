import React, { Component } from 'react';
import '../styles/Message-List.css';
import { getMessages } from '../utils/querying';
import Message from './Message';

export default class MessageList extends Component {
  state = {
    messages: [],
    isLoading: true
  };
  componentDidMount = async () => {
    const messages = await getMessages();    
    console.log(messages);
    
    this.setState({ messages, isLoading: false });
  };
  render() {
    return this.state.isLoading ? (
      <h1>Loading</h1>
    ) : (
      <ul className="messages">
        {this.state.messages.map(message => (
          <Message key={message.message_id} message={message}/>
        ))}
      </ul>
    );
  }
}
