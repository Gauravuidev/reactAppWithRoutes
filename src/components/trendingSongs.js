import React, { Component } from 'react';
//import {render} from 'react-dom';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import axios from 'axios';

export class Trending extends Component {
  constructor(props) {
      super(props);

      this.state = {
         data: ''
      }
   }
  componentDidMount(){
    this.getTrendingData();
  }
  getIds(event){ debugger;
    //console.log(event.target.firstChild.getAttribute("data-obj"));
    let id = event.target.firstChild.getAttribute("data-id");
    let title = event.target.firstChild.getAttribute("data-title");
    this.getUrls(id,title);

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
  getTrendingData(){
    axios('http://api.gaana.com/home/trending/songs?userlanguage=Hindi',{
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
        this.setState({data: data.slice(0,9)});
     });
  }
  render() {
    console.log('Trending Data : ', this.state.data);
    const dataEmpty = [0,1,2,3];
    const TDataEmprty = dataEmpty.map(function(value, key) {
      return <div className="c_item list loaded"><span id="parent-row-song" className="none parentnode sourcelist_"></span><img className="img opacity" data-type="touch-play" alt="demo" src="http://a10.gaanacdn.com/images/gaanawebsite/albumdefaultcommonv1.jpg" /><span data-type="touch-play" className="c_song pjax"></span></div>;
    });
    const data = this.state.data;
    const TData =   Object.keys(data).map(key =>
    <div data-seo={data[key].seokey} onClick={this.getIds.bind(this)}>
      <div className="c_item list   loaded" id={"trackrow" + data[key].entity_id}>
                <span id="parent-row-song23594885" className={"none parentnode sourcelist_"+ data[key].entity_id} data-id={data[key].entity_id} data-title={data[key].name}>
                </span>
                <img className="img opacity" data-value={"song" + data[key].entity_id} data-type="touch-play" title={data[key].name} alt={data[key].name} src={data[key].artwork} data-src={data[key].artwork} />
                <span data-value={"song" + data[key].entity_id} data-type="touch-play" title={data[key].name} className="c_song pjax">{data[key].name}</span>
      </div>
    </div>
    )
    return (
          <Carousel showArrows={false} showIndicators={false} showStatus={false} showThumbs={false} centerMode centerSlidePercentage={40} swipeScrollTolerance={5}>
            {this.state.data ? TData : TDataEmprty}
          </Carousel>
  );
}
}
