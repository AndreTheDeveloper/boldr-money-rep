import React, { Component } from "react";

class OurStorySpeakingOfWe extends Component {
  render() {
    return (
      <div className = 'speakingOfWe'>

        <div className = 'speakingOfWeTitle'>
          <h2 >Speaking of we...</h2>
        </div>

        <div className = 'speakingOfWeGrid'>
          <div className ='speakingOfWeGridLeft'>
            <img src = 'https://uploads-ssl.webflow.com/6107e08479e329549563291a/614f4f8e9a079be0d15c4c0c_Founders-Sid.jpg' alt = 'Siddharth Singh'></img>
            <h3>Siddharth Singh<br></br>
              <span className = 'employeePosition'>CO-FOUNDER & CEO</span>
            </h3>
            <p>
              Like most people, Sid has always had a complicated relationship with money. But when he saw his closest friends and family sacrificing their wellbeing for money, or staying in jobs and relationships they hated because of 'security', he knew there had to be a better way.
            </p>
            <p>
              Sid has spent the last few years working with the biggest financial services companies, seeing first-hand how they work to keep people in a cycle of confusion, anxiety and debt.
            </p>
            <p>
              Sid is now on a mission to make guidance around money simple and human.
            </p>
          </div>

          <div className = 'speakingOfWeGridRight'>
            <img src = 'https://uploads-ssl.webflow.com/6107e08479e329549563291a/614f4f8d01afbcfecad23a68_Founders-Amy.jpg' alt = 'AmySchultz'></img>
            <h3>Amy Schultz<br></br>
              <span className = 'employeePosition'>CO-FOUNDER & HEAD COACH</span>
            </h3>
            <p>
              Amy is the Head Money Coach at Bolder. She began her career helping companies manage wealth but became a money coach after recognizing how people in her life needed a more practical and human approach to money management.
            </p>
            <p>
              As a Certified Money Coach, Amy utilizes a powerful psycho-dynamic coaching model that combines practical financial guidance with sound coaching principles to help you deeply explore, understand and transform your relationship with money. 
            </p>
            <p>
              Amy is passionate about helping people gain a deeper understanding of the unconscious behaviors, patterns, and beliefs around money that prevent them from building the life they love.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default OurStorySpeakingOfWe;
