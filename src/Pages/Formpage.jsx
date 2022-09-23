import './formpage.css'
import Signup from '../Form/Signup'
import Login from '../Form/login'
import Reset from '../Form/Reset'

import Logo from '../assests/CoinsKash_White_bg.svg'
import LogoCoin from '../assests/CoinsKashwhite_2.svg'

import { Link } from 'react-router-dom'


const Formpage = () => {
    
  return (
    <div className="main_pan">

        <div className="leftpan">
            <div>
                <Link to='/'>    
                <img className="formLogo" src={Logo} alt="logo"/>
                </Link>
            </div>
            <Signup/>
            <Login/>
            <Reset/>


              

        </div>

        

        <div className="rightpan">
        <img src={LogoCoin} alt="coinskash"/>
        </div>
    </div>
  )
}

export default Formpage