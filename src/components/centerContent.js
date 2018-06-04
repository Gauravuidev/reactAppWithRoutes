import React, { Component } from "react";
import Navbar from "./navbar";
import Center from "./center";
import Adver from "./adver";

export class CenterContent extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Center />
        <Adver />
      </div>
    );
  }
}

export default CenterContent;
