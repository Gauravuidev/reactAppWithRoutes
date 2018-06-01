import React, { Component } from 'react';
import searchicon from '../img/searchicon.svg';

export class Search extends Component {
  render() {
    return (
      <div id="search" className="_rpad">
       <div className="_in">
        <input type="text" placeholder="Search songs, albums" />
        <a data-icon="searchicon" className="_s">
          <img src={searchicon} alt="" />
        </a>
       </div>
    </div>
  );
}
}
export default Search;
