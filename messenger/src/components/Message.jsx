import React from 'react';
import '../styles/Message.css'

export default function Message({message}) {
  return (
    <li className="message">
      <aside className="message-image">
        <img src={message.avatar} alt={`${message.username}'s avatar`} />
      </aside>
      <section className="message-contents">
        <header>{message.username}</header>
        <article>{message.body}</article>
      </section>
    </li>
  );
}
