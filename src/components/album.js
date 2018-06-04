import React, { Component } from 'react';
import arrow from '../img/arrowfull.svg';
import dots from '../img/dots.svg';
import download from '../img/download.svg';
import axios from 'axios';

export class Album extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: ''
    }
  }
  componentDidMount() {
    this.getEdPicksData();
  }
  getEdPicksData() {
    axios('http://api.gaana.com/home/playlist/hour?userlanguage=Hindi,English', {
      method: 'GET',
      headers: {
        // 'Authorization': `bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(function (response) {
        //console.log(response.data.entities);
        return response.data.entities;
      }).then(data => {
        this.setState({ data: data.slice(0, 29) });
      });
  }
  render() {
    console.log('Trending Data view ALl : ', this.state.data);
    const dataEmpty = [0, 1, 2, 3, 4, 5];
    const EDataEmprty = dataEmpty.map(function (value, key) {
      return <ul id="trackrow" className="s_list artworkload"><li className="clearfix list loaded" data-value="song"><div className="lt_col"><div className="at_img"><img className="opacity img" data-value="song" data-type="touch-play" src="http://a10.gaanacdn.com/images/gaanawebsite/albumdefaultcommonv1.jpg" title="Loading " alt="Loading " /></div></div><div className="rt_col"><div className="info_text"><span className="s_name ">Loading</span><span className="s_album"><a title="Loading ">Loading </a><a title="Loading">Loading</a></span></div><a className="s_ic s_ic1" data-icon="more_H"><img src="/static/media/dots.6ddf03e4.svg" alt="" /></a><a className="s_ic s_ic2" data-icon="download"><img src="/static/media/download.ee615d3f.svg" alt="" /></a></div></li></ul>;
    });
    const data = this.state.data;
    const EData = Object.keys(data).map(key =>
      <ul id={"trackrow" + data[key].entity_id} className="s_list artworkload ">
        <li className="clearfix list loaded" data-value={"song" + data[key].entity_id}>
          <div className="lt_col">
            <div className="at_img">
              <img className="opacity img" data-value={"song" + data[key].entity_id} data-type="touch-play" src={data[key].artwork} title={data[key].name} alt={data[key].name} />
            </div>
          </div>
          <div className="rt_col">
            <div className="info_text">
              <span className="s_name ">{data[key].name}</span>
              <span className="s_album">
                <a href="intent://android-app://com.gaana/gaana/share/tSelfishI23594885/#Intent;scheme=gaana;package=com.gaana;S.browser_fallback_url=http://loc.gaana.com/songs/?play=0;end" title={data[key].name}>{data[key].name}</a>,
                              <a href="intent://android-app://com.gaana/gaana/share/tSelfishI23594885/#Intent;scheme=gaana;package=com.gaana;S.browser_fallback_url=http://loc.gaana.com/songs/?play=0;end" title="Iulia Vantur">Iulia Vantur</a>
              </span>
            </div>
            <a className="s_ic s_ic1" data-icon="more_H"><img src={dots} alt="" /></a>
            <a className="s_ic s_ic2" data-icon="download"><img src={download} alt="" /></a>
          </div>
        </li>
      </ul>
    )
    return (
      <div className="main">
        <section className="trendingbox mainRec ">
          <div className="blurimg">
            <div className="bluroverlay"></div>
            <img className="img" src="https://css375.gaanacdn.com/images/gaana_ads_bg.jpg" alt="" />
          </div>
          <span className="none" id="parent-row-playlist"></span>


          <h2 className="trendingtitle">Trending Songs</h2>
          <div className="de_info">
            <p className="s_count">30 Songs</p>
            <a className="button_ic red_btn" data-icon="playBtn" data-type="playall" title="Play All" data-value="">PLAY ALL<img src={arrow} alt="" /></a>
          </div>
        </section>
        <section className="playlist_q clearfix" id="sub-content-container">
          <span id="parent-row-song23594885" data-type="playSong" className="none parentnode sourcelist_trendingsongs">
          </span>
          {this.state.data ? EData : EDataEmprty}
        </section>
      </div>
    );
  }
}
export default Album;
