import './signup.css'
import './login.css'

import gIcon from "../assests/google_icon_flat-color.svg"

import { Link } from 'react-router-dom'

import React from 'react'

const Login = () => {
  return (
    <div>
        <h1>Log In</h1>
            <p>To log into your account, Kindly fill in the form provided below</p>
            
                <button><img src={gIcon} alt="google icon"/>
                    <span>Continue with Google</span>
                </button>
                
                        
            <p class="or">or</p>
            <form className='Login'>
                <div className="formControl">
                <input type="email" name="firstName" id="email" placeholder="Email"  required/>
                </div>
                <div className="formControl">
                <input type="password" name="password" id="password" placeholder="Password" required/>
                </div>
                <div class="check_forget">
                    <span className='Login-check'>
                        <input type="checkbox" class="visible" name="check" id="togglePswd"/>
                        <label for="togglePswd" class="visible">Show Password</label>
                    </span>
                    <span class="forgetP">
            
                        <Link to="/">Forget Password?</Link>
                    </span>
                </div>

                <div className="formControl">
                <input type="submit" name="submit" id="creatAcct" value="Log In"/>
                </div>
                <p class="login">Do not have an account?
                    <Link to="/">Create an Account</Link>
                </p>
            </form>
    
    </div>

  )
}
export default Login