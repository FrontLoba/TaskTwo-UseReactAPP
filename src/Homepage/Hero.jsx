import './Hero.css';
import gIcon from '../assests/get_on_google.svg'
import appleIcon from "../assests/app_store.svg"
import leftRotphone from "../assests/Rotated_left.png"
import rightRotphone from "../assests/Rotated_right.png"
import phoneCoin from "../assests/phone_coin_mobile.svg"

function Hero () {
    return (

    <section class="hero">
            <div class="hero-article">
                <h1>Convert your <span class="crypto">Crypto</span> to <span class="ngn">NGN</span></h1>

                <p>
                    Convert any cryptocurrency to any fiat of your choice with just one click, Get Started now or download our mobile app on playstore or app store
                </p>
                <div className="app-icons">
                    <a href="/">
                        <img src={gIcon} alt="google play icon" />
                    </a>
                    <a href="/">
                        <img src={appleIcon} alt="apple app store" />
                    </a>
                </div>
            </div>
            <div className="hero-image">
                <ul className="hero-desktop">
                    <li>
                        <img className="phone-right" src={leftRotphone} alt="phone rotate left" />
                    </li>
                    <li>
                        <img className="phone-left" src={rightRotphone} alt="phone rotated left" />
                    </li>
                </ul>
                        
                <div className="hero-mobile">
                    <img className="mobile-img" src={phoneCoin} alt="phone with coin" />
                </div>
            </div >
        </section>
    );
}

export default Hero;