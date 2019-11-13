import React, { Component } from 'react';

class MessageForm extends Component {
  state = {
    message: ''
  };
  handleInput = e => {
    this.setState({ message: e.target.value });
  };
  handleSubmit = () => {};
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleInput} type="text" />
          <button>Submit</button>
        </form>
      </>
    );
  }
}

export default MessageForm;
