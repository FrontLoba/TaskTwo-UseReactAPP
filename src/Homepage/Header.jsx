import React from'react'
import './Header.css';
import logo from '../assests/CoinsKash_White_bg.svg';
import { Link } from 'react-router-dom';


function Header () {
    return (
        <header>
            <div className="logo">
                <Link to='/'>
                    <img src={logo} alt="CoinsKash logo" /> </Link>
                <span className="open-icon hide-icon" id="open-menu">&#9776;</span>
                <span className="hide-icon" id="close-menu">&times;</span>
            </div>
            <ul className="mobile-menu" id="mobile-btn">
                <li><Link to='/'>Sign Up</Link></li>
                <li><Link to='/'>Login</Link></li>
                <li><Link to='/'>Exchange Rates</Link></li>
                <li><Link to='/'>Contact Us</Link></li>
            </ul>

            <ul clasName="primary-menu">
            <li><Link to='/'>Rate</Link></li>
            <li><Link to='/'>Contact Us</Link></li>
            </ul>
            
            <ul className="secondary-menu">
                <li className="left-line"><Link to='/'>Log In</Link></li>
                <li className="btn-like"><Link to='form'>Get Started</Link></li>
            </ul>    
        </header>
    );
}

export default Header