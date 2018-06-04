import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Browse from "./browse";
import Discover from "./discover";
import MyMusic from "./myMusic";
import Radio from "./Radio";
import Songs from "./songs";
import Playlist from "./playlist";
import SideBar from "./sideBar";
import Queue from "./queue";

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
export class Center extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/browse" component={Browse} />
          <Route path="/discover" component={Discover} />
          <Route path="/myMusic" component={MyMusic} />
          <Route path="/Radio" component={Radio} />
          <Route path="/Songs" component={Songs} />
          <Route path="/Playlist" component={Playlist} />
          <Route path="/sideBar" component={SideBar}/>
          <Route path="/queue" component={Queue}/>
        </Switch>
      </div>
    );
  }
}

export default Center;
