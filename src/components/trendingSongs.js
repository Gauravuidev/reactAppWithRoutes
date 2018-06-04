import React, { Component } from 'react';
//import {render} from 'react-dom';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getHomeTopTrendingSongs, getUrls } from '../actions/homeActions';

class Trending extends Component {
  
  componentDidMount() {
    //this.getTrendingData();
    this.props.getHomeTopTrendingSongs();
  }
  getIds(event) {    
    let id = event.target.firstChild.getAttribute("data-id");
    let title = event.target.firstChild.getAttribute("data-title");
    this.props.getUrls(id, title).then(url => {      
      if (window.getMobileOperatingSystem() === "Android") {        
        window.getSongs(title, url, id);
      } else {
        window.getSongsIOS(url);
      }
    });

    
  }

  render() {
    //console.log('Trending Data : ', this.props.data);
    const dataEmpty = [0, 1, 2, 3];
    const TDataEmprty = dataEmpty.map(function (value, key) {
      return <div className="c_item list loaded"><span id="parent-row-song" className="none parentnode sourcelist_"></span><img className="img opacity" data-type="touch-play" alt="demo" src="http://a10.gaanacdn.com/images/gaanawebsite/albumdefaultcommonv1.jpg" /><span data-type="touch-play" className="c_song pjax"></span></div>;
    });
    const data = this.props.data;
    const TData = Object.keys(data).map(key =>
      <div data-seo={data[key].seokey} onClick={this.getIds.bind(this)}>
        <div className="c_item list   loaded" id={"trackrow" + data[key].entity_id}>
          <span id="parent-row-song23594885" className={"none parentnode sourcelist_" + data[key].entity_id} data-id={data[key].entity_id} data-title={data[key].name}>
          </span>
          <img className="img opacity" data-value={"song" + data[key].entity_id} data-type="touch-play" title={data[key].name} alt={data[key].name} src={data[key].artwork} data-src={data[key].artwork} />
          <span data-value={"song" + data[key].entity_id} data-type="touch-play" title={data[key].name} className="c_song pjax">{data[key].name}</span>
        </div>
      </div>
    )

    return (
      <Carousel showArrows={false} showIndicators={false} showStatus={false} showThumbs={false} centerMode centerSlidePercentage={40} swipeScrollTolerance={5}>
        {this.props.data ? TData : TDataEmprty}
      </Carousel>
    );
  }
}

Trending.propTypes = {
  topTrendingSongs: PropTypes.object.isRequired,
  getHomeTopTrendingSongs: PropTypes.func.isRequired,
  getUrls: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    data: state.homeReducer.topTrendingSongs
  }
}

export default connect(mapStateToProps, { getHomeTopTrendingSongs, getUrls })(Trending);