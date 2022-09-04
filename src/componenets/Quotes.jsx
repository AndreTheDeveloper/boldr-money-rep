import React, { Component } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

Aos.init({ duration: 1000 });

class Quotes extends Component {
  render() {
    return (
      <div className="quotesContainer">
        <div className="topQuotes">
          <div className="quoteText" data-aos="fade-right">
            <div>Does anyone know what an ETF, NFT, 401k, 529 is? 🤔</div>
          </div>
          <div className="quoteText" data-aos="fade-right">
            <div>Where’d all my money go? 💸</div>
          </div>
          <div className="quoteText" data-aos="fade-right">
            <div>I want to leave my job, but I can’t afford to 😒</div>
          </div>
          <div className="quoteText" data-aos="fade-right">
            <div>
              I wish someone taught me how to money instead of algebra 😏
            </div>
          </div>
          <div className="quoteText" data-aos="fade-right">
            <div>Is it Instagram or is everyone actually this rich?</div>
          </div>
        </div>
        <div className="bottomQuotes">
          <div className="quoteText" data-aos="fade-left">
            <div>
              Can someone who isn't a finance bro explain investing to me?
            </div>
          </div>
          <div className="quoteText" data-aos="fade-left">
            <div>Is it Instagram or is everyone actually this rich?</div>
          </div>
          <div className="quoteText" data-aos="fade-left">
            <div>
              Every time I want to ask for a raise, I break out in hives.
            </div>
          </div>
          <div className="quoteText" data-aos="fade-left">
            <div>Does anyone know what an ETF, NFT, 401k, 529 is? 🤔</div>
          </div>
          <div className="quoteText" data-aos="fade-left">
            <div>
              We have 2 kids and we’ve been married for 10 years. But when it
              comes to money, we’re still just financial roommates. 👨👩👧👧
            </div>
          </div>
          <div className="quoteText" data-aos="fade-left">
            <div>
              My parents had a house, 2 kids and a retirement fund in their 30s.
              I’m still living with roommates. 🤦♀️
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Quotes;
