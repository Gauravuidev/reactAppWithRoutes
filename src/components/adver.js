import React, { Component } from 'react';

export class Adver extends Component {
  render() {
    return (

      <div className="mobile-appdownload-inner">
          <div className="getonapp">
              <div className="blurappdownload">
                <div className="blurimg">
                    <img className="gaana_ads_bgimg" title="Cut To The Feeling Song" alt="Cut To The Feeling Song" src="https://css375.gaanacdn.com/images/gaana_ads_bg.jpg" />
                </div>
              </div>
          <div className="getonapp_txt">
              <div>
              <h6>Experience Gaana in 9 languages</h6>
              <p> Download the app now!</p>
              </div>
          </div>
          <a href="http://ad.apsalar.com/api/v1/ad?re=1&amp;a=timesinternet&amp;i=com.gaana&amp;ca=Gaana_Android&amp;an=GAANA_WAP&amp;p=Android&amp;pl=Internal&amp;h=452a31596e9eb0f4a58e091d1a2e341074f5c867" className="grey-border-btn">GET APP</a>
      </div>
    </div>

  );
}
}
export default Adver;
