import React, { Component } from "react";
import "../Styles/Caption.css";

class Caption extends Component {
  constructor() {
    super();
    this.state = {
      heading: "Jargonstein",
      subheading: "a jargon buster for the clueless"
    };
  }

  render() {
    return (
      <div>
        <p>
          <caption-heading>{this.state.heading}.</caption-heading>
        </p>
        <p>
          <caption-subheading>{this.state.subheading}</caption-subheading>
        </p>
      </div>
    );
  }
}

export default Caption;
