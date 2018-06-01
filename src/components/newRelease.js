import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import axios from 'axios';

export class NewRelease extends Component {
  constructor(props) {
      super(props);

      this.state = {
         data: ''
      }
   }
  componentDidMount(){
    this.getNewRelData();
  }
  getNewRelData(){
    axios('http://api.gaana.com/home/album/featured?userlanguage=Hindi,English',{
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
    console.log('NEw Release data', this.state.data);
    const dataEmpty = [0,1,2,3];
    const NRDataEmprty = dataEmpty.map(function(value, key) {
      return <div className="c_item list loaded"><span id="parent-row-song" className="none parentnode sourcelist_"></span><img className="img opacity" data-type="touch-play" alt="demo" src="http://a10.gaanacdn.com/images/gaanawebsite/albumdefaultcommonv1.jpg" /><span data-type="touch-play" className="c_song pjax"></span></div>;
    });
    const data = this.state.data;
    const NRData =   Object.keys(data).map(key =>
    <Link to={'/Songs'} data-seo={data[key].seokey}>
      <div className="c_item list   loaded" id={"trackrow" + data[key].entity_id}>
                <span id="parent-row-song23594885" className={"none parentnode sourcelist_"+ data[key].entity_id} data-id={data[key].entity_id} data-title={data[key].name}>
                </span>
                <img className="img opacity" data-value={"song" + data[key].entity_id} data-type="touch-play" title={data[key].name} alt={data[key].name} src={data[key].artwork} data-src={data[key].artwork} />
                <span data-value={"song" + data[key].entity_id} data-type="touch-play" title={data[key].name} className="c_song pjax">{data[key].name}</span>
      </div>
    </Link>
    )
    return (
          <Carousel showArrows={false} showIndicators={false} showStatus={false} showThumbs={false} centerMode centerSlidePercentage={40} swipeScrollTolerance={5}>
              {this.state.data ? NRData : NRDataEmprty}
          </Carousel>
  );
}
}
