import React from'react'
import './Header.css';
import logo from '../assests/CoinsKash_White_bg.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';


function Header () {

    const [toggle, setToggle] =useState(true)
    const handleMenuList = () =>  setToggle(toggle => !toggle)
//     const handleMenuList = () => {
//     //     document.querySelector('#open-menu').classList.toggle('open-icon')
//     //     document.querySelector('#mobile-btn').classList.toggle('mobile-list')
//     //     document.querySelector('#close-menu').classList.toggle('close-icon')
//     // }
  

// }   
    return (
        <header>
            <div className="logo">
                <Link to='/'>
                    <img src={logo} alt="CoinsKash logo" />
                </Link>
                <div  onClick={handleMenuList}>
                {toggle ?
                <span className='open-icon hide-icon'>&#9776;</span> : <span className='close-icon hide-icon'>&times;</span>
                }
                </div>
                {/* <span className="open-icon hide-icon" id="open-menu" onClick={handleMenuList}>&#9776;</span>
                <span className="hide-icon" id="close-menu" onClick={handleMenuList}>&times;</span> */}
            </div>
            <ul className={!toggle ? "mobile-menu mobile-list" : "hide-icon"} id="mobile-btn">
                <li><Link to='/sign-up'>Sign Up</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/'>Exchange Rates</Link></li>
                <li><Link to='/'>Contact Us</Link></li>
            </ul>

            <ul className="primary-menu">
            <li><Link to='/'>Rate</Link></li>
            <li><Link to='/'>Contact Us</Link></li>
            </ul>
            
            <ul className="secondary-menu">
                <li className="left-line"><Link to='/login'>Log In</Link></li>
                <li className="btn-like"><Link to='/sign-up'>Get Started</Link></li>
            </ul>    
        </header>
    )
}

export default Header;