import React, { Component, useState }  from 'react';
import "./Contact.css";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    // e.preventDefault();
    setMessage(true);
    setTimeout(() => {setMessage(false)}, 1000)
  };

  return (
    <div className="contact" id="contact">
      <div className="container">
        <h2>Contact Me!</h2>
        <form method="POST" action="https://formspree.io/f/mjvjzjav" onSubmit={handleSubmit}>
          <input type="email" name="_replyto" placeholder="Email" />
          <textarea name="message" placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}