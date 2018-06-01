import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import axios from 'axios';

export class Recently extends Component {
  getIds(event){
    //console.log(event.target.firstChild.getAttribute("data-obj"));
    const data= event.target.firstChild.getAttribute("data-obj");
    let id = JSON.parse(data);
    console.log(id);
    console.log(id.track_ids);
    this.getUrls(id.track_ids,id.title);

  }
  getUrls(id,songTitle){
    axios('https://a1.gaana.com/ajax/touch_log1',{
        method: 'GET',
       headers: {
        // 'Authorization': `bearer ${token}`,
        'Content-Type': 'application/json'
      },
      params: {
                'type': 'hls',
                'action': "get_stream",
                'track_id': id,
            }
    })
    .then(function (response) {
       const url = response.data.stream_path.replace("http","https");
       if(window.getMobileOperatingSystem() === "Android"){
       window.getSongs(songTitle, url ,id);
     } else {
       window.getSongsIOS(url);
     }
     })
  }
  render() {
    return (
          <Carousel showArrows={false} showIndicators={false} showStatus={false} showThumbs={false} centerMode centerSlidePercentage={40} swipeScrollTolerance={5}>
                      <div className="c_item list   loaded" id="trackrow23594885" onClick={this.getIds.bind(this)}>
                              <span id="parent-row-song23594885" className="none parentnode sourcelist_23594885">
                              </span>
                              <img className="img opacity" data-value="song23594885" data-type="touch-play" title="Selfish" alt="Selfish" src="http://a10.gaanacdn.com/images/song/85/23594885/crop_110x110_1527149330.jpg" data-src="https://a10.gaanacdn.com/images/song/85/23594885/crop_175x175_1527149330.jpg" />
                              <a data-pjax="" href="/song/selfish-197" data-value="song23594885" data-type="touch-play" className="img_wrap">
                              </a>
                              <a  data-value="song23594885" data-type="touch-play" title="Selfish" className="c_song pjax">
                                  Selfish                                </a>
                      </div>

                      <div className="c_item list   loaded" id="trackrow23578807">
                              <span id="parent-row-song23578807" className="none parentnode sourcelist_23578807"></span>
                              <img className="img opacity" data-value="song23578807" data-type="touch-play" title="Heeriye" alt="Heeriye" src="http://a10.gaanacdn.com/images/song/7/23578807/crop_110x110_1526659110.jpg" data-src="https://a10.gaanacdn.com/images/song/7/23578807/crop_175x175_1526659110.jpg"/>
                              <a data-pjax="" href="/song/heeriye-15" data-value="song23578807" data-type="touch-play" className="img_wrap">
                              </a>
                              <a  data-value="song23578807" data-type="touch-play" title="Heeriye" className="c_song pjax">
                                  Heeriye                                </a>
                      </div>

                      <div className="c_item list   loaded" id="trackrow23527559">
                              <span id="parent-row-song23527559" className="none parentnode sourcelist_23527559"></span>
                              <img className="img opacity" data-value="song23527559" data-type="touch-play" title="Tareefan" alt="Tareefan" src="http://a10.gaanacdn.com/images/song/59/23527559/crop_110x110_1525345915.jpg" data-src="https://a10.gaanacdn.com/images/song/59/23527559/crop_175x175_1525345915.jpg" />
                              <a data-pjax="" href="/song/tareefan-1" data-value="song23527559" data-type="touch-play" className="img_wrap">
                              </a>
                              <a  data-value="song23527559" data-type="touch-play" title="Tareefan" className="c_song pjax">
                                  Tareefan                                </a>
                      </div>

                      <div className="c_item list   loaded" id="trackrow23575509">
                              <span id="parent-row-song23575509" className="none parentnode sourcelist_23575509"></span>
                              <img className="img opacity" data-value="song23575509" data-type="touch-play" title="Tera Ghata" alt="Tera Ghata" src="http://a10.gaanacdn.com/images/song/9/23575509/crop_110x110_1526704919.jpg" data-src="https://a10.gaanacdn.com/images/song/9/23575509/crop_175x175_1526704919.jpg"/>
                              <a data-pjax="" href="/song/tera-ghata" data-value="song23575509" data-type="touch-play" className="img_wrap">
                              </a>
                              <a  data-value="song23575509" data-type="touch-play" title="Tera Ghata" className="c_song pjax">
                                  Tera Ghata                                </a>
                      </div>

                      <div className="c_item list   loaded" id="trackrow23566213">
                              <span id="parent-row-song23566213" className="none parentnode sourcelist_23566213"></span>
                              <img className="img opacity" data-value="song23566213" data-type="touch-play" title="Chavanprash" alt="Chavanprash" src="http://a10.gaanacdn.com/images/song/13/23566213/crop_110x110_1526544862.jpg" data-src="https://a10.gaanacdn.com/images/song/13/23566213/crop_175x175_1526544862.jpg"/>
                              <a data-pjax="" href="/song/chavanprash-1" data-value="song23566213" data-type="touch-play" className="img_wrap">
                              </a>
                              <a  data-value="song23566213" data-type="touch-play" title="Chavanprash" className="c_song pjax">
                                  Chavanprash                                </a>
                      </div>

                      <div className="c_item list   loaded" id="trackrow23513125">
                              <span id="parent-row-song23513125" className="none parentnode sourcelist_23513125"></span>
                              <img className="img opacity" data-value="song23513125" data-type="touch-play" title="Raat Kamaal Hai" alt="Raat Kamaal Hai" src="http://a10.gaanacdn.com/images/song/25/23513125/crop_110x110_1525159269.jpg" data-src="https://a10.gaanacdn.com/images/song/25/23513125/crop_175x175_1525159269.jpg"/>
                              <a data-pjax="" href="/song/raat-kamaal-hai" data-value="song23513125" data-type="touch-play" className="img_wrap">
                                </a>
                              <a  data-value="song23513125" data-type="touch-play" title="Raat Kamaal Hai" className="c_song pjax">
                                  Raat Kamaal Hai                                </a>
                      </div>

                      <div className="c_item list   loaded" id="trackrow23566214">
                              <span id="parent-row-song23566214" className="none parentnode sourcelist_23566214"></span>
                                <img className="img opacity" data-value="song23566214" data-type="touch-play" title="Jitni Dafa" alt="Jitni Dafa" src="http://a10.gaanacdn.com/images/albums/36/2144836/crop_110x110_1526382046_2144836.jpg" data-src="https://a10.gaanacdn.com/images/albums/36/2144836/crop_175x175_1526382046_2144836.jpg" />
                              <a data-pjax="" href="/song/jitni-dafa" data-value="song23566214" data-type="touch-play" className="img_wrap">

                              </a>
                              <a  data-value="song23566214" data-type="touch-play" title="Jitni Dafa" className="c_song pjax">
                                  Jitni Dafa                                </a>
                      </div>

                      <div className="c_item list   loaded" id="trackrow23401273">
                              <span id="parent-row-song23401273" className="none parentnode sourcelist_23401273"></span>
                              <img className="img opacity" data-value="song23401273" data-type="touch-play" title="Oh Humsafar" alt="Oh Humsafar" src="http://a10.gaanacdn.com/images/albums/1/2120901/crop_110x110_2120901.jpg" data-src="https://a10.gaanacdn.com/images/albums/1/2120901/crop_175x175_2120901.jpg" />
                              <a data-pjax="" href="/song/oh-humsafar" data-value="song23401273" data-type="touch-play" className="img_wrap">

                              </a>
                              <a  data-value="song23401273" data-type="touch-play" title="Oh Humsafar" className="c_song pjax">
                                  Oh Humsafar                                </a>
                      </div>

                      <div className="c_item list   loaded" id="trackrow23408358">
                              <span id="parent-row-song23408358" className="none parentnode sourcelist_23408358"></span>
                                <img className="img opacity" data-value="song23408358" data-type="touch-play" title="Dilbaro" alt="Dilbaro" src="http://a10.gaanacdn.com/images/albums/61/2121861/crop_110x110_2121861.jpg" data-src="https://a10.gaanacdn.com/images/albums/61/2121861/crop_175x175_2121861.jpg"/>
                              <a data-pjax="" href="/song/dilbaro" data-value="song23408358" data-type="touch-play" className="img_wrap">

                              </a>
                              <a  data-value="song23408358" data-type="touch-play" title="Dilbaro" className="c_song pjax">
                                  Dilbaro                                </a>
                      </div>

                      <div className="c_item list   loaded" id="trackrow23565834">
                              <span id="parent-row-song23565834" className="none parentnode sourcelist_23565834"></span>
                                  <img className="img opacity" data-value="song23565834" data-type="touch-play" title="Shubh Din" alt="Shubh Din" src="http://a10.gaanacdn.com/images/song/34/23565834/crop_110x110_1526291027.jpg" data-src="https://a10.gaanacdn.com/images/song/34/23565834/crop_175x175_1526291027.jpg"/>
                              <a data-pjax="" href="/song/shubh-din" data-value="song23565834" data-type="touch-play" className="img_wrap">                              </a>
                              <a  data-value="song23565834" data-type="touch-play" title="Shubh Din" className="c_song pjax">
                                  Shubh Din                                </a>
                      </div>
          </Carousel>
  );
}
}
