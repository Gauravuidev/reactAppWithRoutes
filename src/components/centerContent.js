import React, { Component } from "react";
import Navbar from "./navbar";
import Center from "./center";

export class CenterContent extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Center />
      </div>
    );
  }
}

export default CenterContent;
