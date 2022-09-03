import React, { Component } from "react";

class AsSeenIn extends Component {
  render() {
    return (
      <div className="asSeenInContainer">
        <div className="asSeenInTitle">AS SEEN IN</div>
        <div className="asSeenInLogosGrid">
          <div className="grid-item">
            <img src="https://uploads-ssl.webflow.com/6107e08479e329549563291a/6134722d0c4f1e9bd22060be_%5BBolder%5D%20press-logo-1.png"></img>
          </div>
          <div className="grid-item">
            <img src="https://uploads-ssl.webflow.com/6107e08479e329549563291a/6134722de32da861016f9cc0_%5BBolder%5D%20press-logo-2.png"></img>
          </div>
          <div className="grid-item">
            <img src="https://uploads-ssl.webflow.com/6107e08479e329549563291a/6134737ce32da81e256fa21a_%5BBolder%5D%20press-logo-3.png"></img>
          </div>
        </div>
      </div>
    );
  }
}

export default AsSeenIn;
