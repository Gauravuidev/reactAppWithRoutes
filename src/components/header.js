import React, { Component } from 'react';
import logo from '../img/gaana.svg';
import menu from '../img/menu.svg';
import addtohome from '../img/addtohome.svg';
import notificationicon from '../img/notification.svg';
import loginicon from '../img/loginicon.svg';
import { Link } from 'react-router-dom';

export class Header extends Component {
  render() {
    return (
      <header className="clearfix _rpad" id="gheader">
        <div className="_1a">
          <Link to={'/sideBar'} data-icon="hamburger" className="_ham">
            <img src={menu} alt=""/>
          </Link>
          <a data-icon="gaanalogo_full">
            <img src={logo} alt=""/>
          </a>
        </div>
        <div className="_1b">
          <a data-icon="addtohome">
            <img src={addtohome} alt=""/>
          </a>
          <a data-icon="notificationicon">
            <img src={notificationicon} alt=""/>
          </a>
          <a data-icon="loginicon">
            <img src={loginicon} alt=""/>
          </a>
        </div>
      </header>
  );
}
}
