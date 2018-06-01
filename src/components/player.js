import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import playerIcon from '../img/playerIcon.svg';
//import {Queue} from './queue';

export class Player extends Component {
  constructor(props) {
      super(props);

      this.state = {
          play: window.play,
          data: window.pdata
      }
   }
  render() {
    console.log('player value',this.state.play);
    console.log(this.state.data);
    return (
      <div id="min-player" className="min-player">
        <Link to={'/Queue'}>
        <div className="py_artwork">
            <img src="http://a10.gaanacdn.com/images/gaanawebsite/albumdefaultcommonv1.jpg" alt="age"/>
        </div>
        </Link>
        <div className="pl_info">
            <Link to={'/Queue'}><span className="sg_details">{this.state.play ? this.state.data.title : 'Tap on Play to start your music'}</span></Link>
            <a className="pl_status" data-icon="play"><img src={playerIcon} alt=""/></a>
        </div>
      <video id="video"></video>
      </div>
  );
}
}
