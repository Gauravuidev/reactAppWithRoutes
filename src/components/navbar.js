import React, { Component } from "react";
import { Link } from "react-router-dom";
import homeIcon from '../img/homeicon.svg';
import radioIcon from '../img/radioIcon.svg';
import discoverIcon from '../img/discoverIcon.svg';
import browseIcon from '../img/browseIcon.svg';
import mymusicIcon from '../img/mymusicIcon.svg';
// The Header creates links that can be used to navigate
// between routes.
export class Navbar extends Component {
  render() {
    return (
      <div className="routing">
            <nav className="clearfix">
                <ul>
                    <li className="active">
                      <Link to={'/'}>
                        <span className="nav_ic home" data-icon="home">
                          <img src={homeIcon} alt=""/>
                        </span>
                        <span>Home</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={'/Browse'}>
                        <span className="nav_ic browse" data-icon="browse">
                          <img src={browseIcon} alt=""/>
                        </span>
                        <span>Browse</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={'/Discover'}>
                        <span className="nav_ic discover" data-icon="discover">
                          <img src={discoverIcon} alt=""/>
                        </span>
                        <span>Discover</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={'/Radio'}>
                        <span className="nav_ic radio" data-icon="radio">
                          <img src={radioIcon} alt=""/>
                        </span>
                        <span>Radio</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={'/Mymusic'}>
                        <span className="nav_ic mymusic" data-icon="mymusic">
                          <img src={mymusicIcon} alt=""/>
                        </span>
                        <span>My MUsic</span>
                      </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
  }
}

export default Navbar;
