import React, { Component } from 'react';
import facebook from '../img/facebook.svg';
import twitter from '../img/twitter.svg';
import gplus from '../img/gplus.svg';

export class Footer extends Component {
  render() {
    return (
      <footer className="clearfix">
        <div className="_fs clearfix _rpad">
              <a rel="nofollow" href="https://www.facebook.com/gaana.com" className="facebook">
                <img src={facebook} alt="facebook"/>
              </a>
              <a rel="nofollow" href="https://plus.google.com/100752754989473986040" className="gplus">
                  <img src={gplus} alt="gplus"/>
              </a>
              <a rel="nofollow" href="https://twitter.com/gaana" className="twitter">
                <img src={twitter} alt="twitter"/>
              </a>
          </div>
          <div className="_gd">
              Gaana is the one-stop solution for all your music needs. Gaana offers you free, unlimited access to over 30 million Hindi Songs, Bollywood Music, English MP3 songs, Regional Music &amp; Radio Mirchi.
          </div>
          <div className="_bl _rpad">
          <div className="bot_links"></div>
              <a className="termsofuse">Terms of Use</a><span>|</span>
              <a className="privacy-policy">Privacy Policy</a><span className="hideonmobile"></span>
          </div>
      </footer>
  );
}
}
