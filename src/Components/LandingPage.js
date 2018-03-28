import React, { Component } from "react";
import Caption from "./Caption";
import { Link } from "react-router-dom";
import "../Styles/LandingPage.css";

class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page-grid-container">
        <div className="grid-item">
          <Caption />
        </div>
        <div className="grid-item">
          <img src="Assets/ape.jpg" alt="ape" />
        </div>
        {/* <button className="landing-page-button" onClick={this.handleClick}>
          <Link to="/jargonstein" className="landing-page-link"> Start Exploring</Link>
        </button> */}
        <Link to="/jargonstein" className="landing-page-link">
          {" "}
          <button className="landing-page-button" onClick={this.handleClick}>
            {" "}
            Start Exploring
          </button>
        </Link>
      </div>
    );
  }
}

export default LandingPage;