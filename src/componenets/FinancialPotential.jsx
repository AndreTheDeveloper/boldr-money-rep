import React, { Component } from "react";

class FinancialPotential extends Component {
  render() {
    return (
      <div className="financialContainer">
        <div className="financialTitle">Unlock your financial potential</div>
        <div className="financialGrid">
          <div className="financialItem">
            FIND MONEY
            <div className="financialMoney">
              $340
              <img src="https://uploads-ssl.webflow.com/6107e08479e329549563291a/6134abd704650a75bcff362e_impact-highlight-1.svg" />
            </div>
            Typical savings each month per member
          </div>
          <div className="financialItem">
            BUILD WEALTH
            <div className="financialMoney">
              $30k
              <img src="https://uploads-ssl.webflow.com/6107e08479e329549563291a/6134ae38c1599d73a89b9e88_impact-highlight-2.svg" />
            </div>
            Average net worth increase for members
          </div>
          <div className="financialItem">
            EARN MORE
            <div className="financialMoney">10%</div>
            Average increase in income
          </div>
        </div>
      </div>
    );
  }
}

export default FinancialPotential;
