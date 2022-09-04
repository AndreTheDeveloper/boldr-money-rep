import React, { Component } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

Aos.init({ duration: 1000 });

class MPHowItWorks extends Component {
  render() {
    return (
      <div className="MPHIWContainer">
        <h1 className="MPHIWTitle">How It Works</h1>
        <div className="MPHIWGrid">
          <div className="MPHIWGIL">
            <div className="step" data-aos="fade-up">
              STEP 1
            </div>
            <h1>Dig Deeper</h1>
            <p>Start by taking the money quiz.</p>
          </div>
          <div className="MPHIWGI" data-aos="fade-up">
            <img src="https://uploads-ssl.webflow.com/6107e08479e329549563291a/6143c6156d8e32d9dc91b0b8_image-how-it-works-1-p-1080.jpeg" />
          </div>
          <div className="MPHIWGIL" data-aos="fade-up">
            <img src="https://uploads-ssl.webflow.com/6107e08479e329549563291a/6143c616ed93ba5fb32c64e2_image-how-it-works-2-p-1080.jpeg" />
          </div>
          <div className="MPHIWGI">
            <div className="step" data-aos="fade-up">
              STEP 2
            </div>
            <h1>Meet Your People</h1>
            <p>
              Get matched with your personal Money Coach, and your Bolder
              community.
            </p>
          </div>
          <div className="MPHIWGIL" data-aos="fade-up">
            <div className="step">STEP 3</div>
            <h1>Make Money Moves</h1>
            <p>
              Stick to your personalized plan and get support when you need it —
              unlimited texting.
            </p>
          </div>
          <div className="MPHIWGI" data-aos="fade-up">
            <img src="https://uploads-ssl.webflow.com/6107e08479e329549563291a/6143c6168d290d2084c9bb4c_image-how-it-works-3-p-1080.jpeg" />
          </div>
          <div className="MPHIWGIL" data-aos="fade-up">
            <img src="https://uploads-ssl.webflow.com/6107e08479e329549563291a/6143c616cdf29239d5c3da1b_image-how-it-works-4-p-1080.jpeg" />
          </div>
          <div className="MPHIWGI" data-aos="fade-up">
            <div className="step"> STEP 4 </div>
            <h1>BE Bolder</h1>
            <p>
              Actually achieve your goals. After all, you’re building a life,
              not a budget.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default MPHowItWorks;
