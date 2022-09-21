import './formpage.css'
import Signup from '../Form/Signup'
import Login from '../Form/login'
import Reset from '../Form/Reset'

import Logo from '../assests/CoinsKash_White_bg.svg'
import LogoCoin from '../assests/CoinsKashwhite_2.svg'

// import {Routes, Route} from 'react-router-dom'
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
        {/* <Routes>
        <Route path='form/sign-up' element={<Signup/>}></Route> 
        <Route path='form/login' element={<Login/>}></Route> 
        <Route path='form/reset' element={<Reset/>}></Route> 
        </Routes> */}
              

        </div>

        

        <div className="rightpan">
        <img src={LogoCoin} alt="coinskash"/>
        </div>
    </div>
  )
}

export default Formpage