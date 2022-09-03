import React, { Component } from "react";
import Typewriter from "typewriter-effect";

class Messages extends Component {
  render() {
    return (
      <div className="messagesContainer">
        <div className="mainMessage">Money can make us feel</div>
        <div className="message">
          <span class="highlight-container">
            <span class="highlight">
              <Typewriter
                options={{
                  strings: [
                    "angry",
                    "jealous",
                    "defeated",
                    "anxious",
                    "scared",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </span>
        </div>
      </div>
    );
  }
}

export default Messages;
