import React from "react";

const Messages = ({ messages }) => {
  return (
    <>
      <h2>Messages</h2>
      {messages.map((message, i) => (
        // TODO: format as cards, add timestamp
        <p key={i} className={message.premium ? "is-premium" : ""}>
          <strong>{message.sender}</strong>:<br />
          {message.text}
        </p>
      ))}
    </>
  );
};

export default Messages;
