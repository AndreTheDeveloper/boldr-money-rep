import React, { Component } from "react";

class OurStoryTextSection extends Component {
  render() {
    return (
      <div className="ourStoryTextSectionContainer">
        <div className="ourStoryTextSectionText">
            <h2>Money Made Us Sad And Anxious.</h2>
            <p>
              It’s why we were stuck in that shitty job, and why that toxic
             relationship seemed secure.
            </p>
           <p>
              It’s why we never thought we could get out of student debt, or buy a
              house like our Boomer parents.{" "}
            </p>
            <p>
             Instagram made us think everyone had tons of money. Robinhood made
             us think everyone made millions off TSLA. And Amazon made it easy
             for us to constantly spend it.
            </p>
            <p>
              Our dad’s financial advisor made us feel stupid, young and poor. We
              felt too ashamed to tell our parents about our bank balance, and
              bored out of our minds anytime we heard about retirement planning.
            </p>
            </div>
            <div className="ourStoryImageContainer">
              <img src="https://uploads-ssl.webflow.com/6107e08479e329549563291a/614f4f8ef21fc96fc8822e7f_image-about-explainer.jpg"></img>
            </div>
      </div>
    );
  }
}

export default OurStoryTextSection;
