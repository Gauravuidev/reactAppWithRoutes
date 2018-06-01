import React, { Component } from 'react';
import gaananaSmall from '../img/gaanaSmall.svg';

export class SideBar extends Component {
  render() {
    return (
      <aside className="menuanimate" style={{'left':0}}>
        <h2><span data-icon="gaanalogo_small"><img src={gaananaSmall} alt=""/></span> Home</h2>
        <ul>
            <li className="_ah">Browse</li>
            <li className=""><a href="/playlist">Trending Songs</a></li>
            <li className=""><a href="">New Releases</a></li>
            <li className=""><a href="">Top Artists</a></li>
            <li className=""><a href="">Top Genres</a></li>
            <li className=""><a href="">Top Albums</a></li>
            <li className="_di"><a href="">Discover</a></li>
            <li><a href="">Radio</a></li>
        </ul>
      </aside>
  );
}
}
export default SideBar;
