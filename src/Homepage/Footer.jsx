import './Footer.css'
import listOne from "../assests/CoinsKashwhite_2.svg";
import listTwo from "../assests/insta-icon.png";
import listThree from "../assests/fb-icon.png";
import listFour from "../assests/twitter-icon.png";


function Footer () {
    return (
        <footer>
        <div className="foot-up">
            <ul>
                <li className="list-head">About</li>
                <li><a href="/">Features</a></li>
                <li><a href="/">Blogs</a></li>
                <li><a href="/">Integrations</a></li>
                <li><a href="/">Team</a></li>
            </ul>
                
            <ul>
                <li className="list-head">Help</li>
                <li><a href="/">Support</a></li>
                <li><a href="/">Help Center</a></li>
                <li><a href="/">Contact Us</a></li>
                <li></li>
            </ul>
                
            <ul>
                <li className="list-head">Resources</li>
                <li><a href="/">Cryptocurrency</a></li>
                <li><a href="/">Fiat currency</a></li>
                <li><a href="/">Tools</a></li>
                <li><a href="/">Terms of Us</a></li>
            </ul>
                
            <ul>
                <li classNane="list-head">Commercial</li>
                <li><a href="/">Why coinkash</a></li>
                <li><a href="/">Price</a></li>
                <li><a href="/">Rate</a></li>
                <li><a href="/">Legal</a></li>
            </ul>
        </div>
        <div className="foot-down">
            <ul>
                <li className="list-head coinWhite"><img src={listOne} alt="" /></li>
            </ul>
            <ul>
                <li className="list-head">Address</li>
                <li className="foot-Add">Grazac Innovation Hub, Salawu Olabode Avenue, Ewang Road, Idi-Aba, Abeokuta.</li>
            </ul>
                
            <ul className="im-icons">
                <li><img src={listTwo} alt="" /></li>
                <li><img src={listThree} alt="" /></li>
                <li><img src={listFour} alt="" /></li>
            </ul>
        </div>

    </footer>
    )
}

export default Footer;