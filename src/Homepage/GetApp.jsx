import './GetApp.css'

import gOne from "../assests/white_bg_google_play.svg";
import gTwo from "../assests/white_bg_apple_store.svg";
import gThree from "../assests/iPhone_13_Pro_up.svg";
import gFour from "../assests/iPhone_13_Pro_down.svg";
import gFive from "../assests/app_mobile.svg";


const GetApp = () => {
  return (
    <section className="app-section">
            <div className="getApp">
                <div className="getApp-article">
                    <h2>Coinskash is available for all devices</h2>
                    <p>You can download our mobile app on playstore or app store and convert any of your cryptocurrency to any fiat currency of your choice In one click</p>
    
                   <a href="/">
                    <img className="getApp-logo" src={gOne} alt="" />
                    </a>
                    <a href="/">
                        <img className="getApp-logo" src={gTwo} alt="" />
                        </a>
                </div>
                <div className="getApp-phone">
                    <img className="phone-up" src={gThree} alt="i-phone" />
                    <img className="phone-down" src={gFour} alt="i-phone" />
                </div>
                <div className="app-mobile">
                    <img src={gFive} alt="i-phone" />
                </div>
            </div>
        </section>
  )
}

export default GetApp;