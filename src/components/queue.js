import React, { Component } from 'react';
import close from '../img/close.svg';
import dots from '../img/dots.svg';
import download from '../img/download.svg';
import heart from '../img/heart.svg';
import lyrics from '../img/lyrics.svg';
import videoIcon from '../img/lyrics.svg';
import repeat from '../img/repeat.svg';
import next from '../img/next.svg';
import prev from '../img/prev.svg';
import pause from '../img/pause.svg';
import shuffle from '../img/shuffle.svg';
import arrow from '../img/arrowfull.svg';
import { Carousel } from 'react-responsive-carousel';

export class Queue extends Component {
  render() {
    return (
      <div id="player-pp" className="player-pp queueHeight">
        <div className="player_activity">
            <div className="blurimg"><img src="https://a10.gaanacdn.com/images/albums/50/1701450/crop_175x175_1701450.jpg" alt=""/></div>
            <div className="pop-header">
            <a  className="close-popup player_close" data-icon="close"><img src={close} alt=""/></a>
              <div className="s_status">
              <img src="https://a10.gaanacdn.com/images/song/87/23046587/crop_175x175_1518091053.jpg" alt="img"/>
              </div>
            <a  className="s_quality">HIGH</a>
            </div>
            <Carousel showArrows={false} showIndicators={false} showStatus={false} showThumbs={false} centerMode centerSlidePercentage={70} swipeScrollTolerance={5}>
                    <div className="c_item active">
                          <img src="https://a10.gaanacdn.com/images/song/87/23046587/crop_175x175_1518091053.jpg" alt="img"/>
                    </div>

                    <div className="c_item">
                        <img src="https://a10.gaanacdn.com/images/song/87/23046587/crop_175x175_1518091053.jpg" alt="img"/>
                    </div>

                    <div className="c_item">
                        <img src="https://a10.gaanacdn.com/images/song/87/23046587/crop_175x175_1518091053.jpg" alt="img"/>
                    </div>

                    <div className="c_item">
                        <img src="https://a10.gaanacdn.com/images/song/87/23046587/crop_175x175_1518091053.jpg" alt="img"/>
                    </div>

                    <div className="c_item">
                        <img src="https://a10.gaanacdn.com/images/song/87/23046587/crop_175x175_1518091053.jpg" alt="img"/>
                    </div>

                    <div className="c_item">
                      <img src="https://a10.gaanacdn.com/images/song/87/23046587/crop_175x175_1518091053.jpg" alt="img"/>
                    </div>
                  </Carousel>
          <div className="s_options clearfix">
            <a  className="fav" data-icon="heartIcon"><img src={heart} alt=""/></a>
            <a  className="download" data-icon="download"><img src={download} alt=""/></a>
            <a  className="more" data-icon="more_H"><img src={dots} alt=""/></a>
        </div>
        <p className="pullup">Pull Up to View Queue</p>
        </div>
        <div className="player-controls">

        <div className="song-progress">
            <div id="seek">
                <div id="seeknob" className="leftZero"></div>
                <div className="progressbar" id="seekbar">
                    <div className="player-progress-loaded widthZero" id="seek_buffered"></div>
                    <div className="player-progress-played widthZero" id="seek_played"></div>
                </div>
            </div>
        </div>

        <div className="s_otherDetails">
            <a  className="s_ic s_lyric" data-icon="lyrics">
                <span className="s_txt">Lyrics</span>
                <img src={lyrics} alt=""/>
            </a>
            <div className="s_info">
                <span className="s_n">Radioactive</span>
                <span className="s_al">One Republic</span>
            </div>
            <a  className="s_ic s_video" data-icon="video">
                <span className="s_txt">Video</span>
                <img src={videoIcon} alt=""/>
            </a>
        </div>

        <div className="p_controls">
            <a  className="shuffle" data-icon="shuffle"><img src={shuffle} alt=""/></a>
            <div className="ctr_player">
                <a  className="skip_pre" data-icon="skip_pre"><img src={prev} alt=""/></a>
                <a  className="s_mode s_pause">
                    <span className="pause" data-icon="pause">
                      <img src={pause} alt=""/>
                    </span>
                    <span className="play" data-icon="playBtn">
                      <img src={arrow} alt=""/>
                    </span>
                </a>
                <a  className="skip_next" data-icon="skip_next">
                  <img src={next} alt=""/>
                </a>
            </div>
            <a  className="repeat" data-icon="repeat">
              <img src={repeat} alt=""/>
            </a>
        </div>

    </div>
      </div>
  );
}
}
export default Queue;
