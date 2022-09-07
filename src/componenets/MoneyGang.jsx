import React, { Component } from "react";

class MoneyGang extends Component {
  render() {
    return (
      <div className="moneyGangContainer">
        <div className="moneyGangTitle">We are your money gang ✌️</div>
        <div className="moneyGangGrid">
          <div className="moneyGang">
            <img src="https://uploads-ssl.webflow.com/6107e08479e329549563291a/616d9348521d867130b34889_image-howitworks-1.svg" />
            <div className="moneyGang2ndTitle">Your Personal Money Coach</div>
            <br />
            <div className="moneyGangDesc">
              Your money coach is your person. They guide you, help you get
              unstuck, and make sure you crush your goals 💪
            </div>
          </div>
          <div className="moneyGang">
            <img src="https://uploads-ssl.webflow.com/6107e08479e329549563291a/616d9348a51c6d2851e0aad9_image-howitworks-2.svg" />
            <div className="moneyGang2ndTitle">Money Moves For You</div>
            <br />
            <div className="moneyGangDesc">
              Whether you want to start investing, or live the #vanlife, we’ll
              work with you to get there faster 🚀
            </div>
          </div>
          <div className="moneyGang">
            <img src="https://uploads-ssl.webflow.com/6107e08479e329549563291a/616d93487a35b509fa022583_image-howitworks-3.svg" />
            <div className="moneyGang2ndTitle">Your Community</div>
            <br />
            <div className="moneyGangDesc">
              Go farther together. Our community of Bolder members has
              been-there-done-that, and building their own path to financial
              freedom, just like you 👩🎤
            </div>
          </div>
          <div className="moneyGang">
            <img src="https://uploads-ssl.webflow.com/6107e08479e329549563291a/616d934855e3601f81987a1a_image-howitworks-4.svg" />
            <div className="moneyGang2ndTitle">
              Exclusive Resources & Masterclasses
            </div>
            <br />
            <div className="moneyGangDesc">
              Knowledge is power 📚 We’ll give you the tools and expert sessions
              to help you level up.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MoneyGang;
