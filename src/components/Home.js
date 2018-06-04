import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
//import 'react-responsive-carousel/lib/styles/carousel.min.css';
import arrow from '../img/arrow.svg';
import Trending from './trendingSongs';
import {Recently} from './recentlyPlayed';
import {Epicks} from './editorpicks';
import {GaanaSpecial} from './gaanaSpecial';
import {NewRelease} from './newRelease';
import {TopChart} from './topChart';
import {Showcase} from './showcase';


export class Home extends Component {
  render() {
    console.log('Gaurav',this.props.open);
    console.log('Gaurav');
  // install node module to run this carousel if we want to chnge we should uninstall those carousel
  // react-responsive-carousel
    return (
      <div className="carousele">
        <h2 className="clearfix">
            <span className="_h1">Trending Songs</span>
            <Link to={'/Songs'} className="v_all" data-icon="viewall_arrw">View All<img src={arrow} alt=""/></Link>
        </h2>
        <Trending />
        <Showcase />
          <h2 className="clearfix">
              <span data-pjax="" className="_h1">Top Chart</span>
              <a href="http://loc.gaana.com/songs" data-pjax="" className="v_all" data-icon="viewall_arrw">View All<img src={arrow} alt=""/></a>
          </h2>
          <TopChart />
        <h2 className="clearfix">
            <span data-pjax="" className="_h1">Recently Played</span>
            <Link to={'/Playlist'} data-pjax="" className="v_all" data-icon="viewall_arrw">View All<img src={arrow} alt=""/></Link>
        </h2>
        <Recently />
        <h2 className="clearfix">
            <span data-pjax="" className="_h1">Editor Picks</span>
            <Link to={'/Album'} data-pjax="" className="v_all" data-icon="viewall_arrw">View All<img src={arrow} alt=""/></Link>
        </h2>
        <Epicks/>
        <h2 className="clearfix">
            <span data-pjax="" className="_h1">Gaana Special</span>
            <Link to={'/Songs'} data-pjax="" className="v_all" data-icon="viewall_arrw">View All<img src={arrow} alt=""/></Link>
        </h2>
        <GaanaSpecial/>
        <h2 className="clearfix">
            <span data-pjax=""  className="_h1">New Relases</span>
            <a href="http://loc.gaana.com/songs" data-pjax="" className="v_all" data-icon="viewall_arrw">View All<img src={arrow} alt=""/></a>
        </h2>
        <NewRelease/>
      </div>
  );
}
}
export default Home;
