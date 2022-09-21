import './signup.css'

import {Link} from 'react-router-dom'

function Reset () {
    return (
        <div>

        <div class="leftArrow">
            <a href="login.html">
            <strong class="bk-ent">&#8592;</strong>
            <strong>Back</strong>  </a>                  
        </div>
            
            <h1>Reset Password</h1>
            <p>To reset your password, kindly input your email address.</p>
                    
            <form action="">
                <input type="email" name="firstName" id="email" placeholder="Email"  required/>
                <input type="submit" name="submit" id="creatAcct" value="Reset Password"/>
                <p class="login">
                    <Link to="/">Go back to Login page</Link>
                </p>
            </form>
        </div>
    )
}

export default Reset