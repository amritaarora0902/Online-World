import React from 'react';
import {Link} from 'react-router-dom';


const SignIn = () =>{
    return (
        <div className="mycard">
            <div className="card auth-card input-field">
              <h2>Online-World</h2>
              <input type="text" placeholder="email"/>
              <input type="text" placeholder="password"/>
              <button className="btn waves-effect waves-light #6d4c41 brown darken-1">
                  Login
              </button>
              <h5>
                  <Link to="/signup">
                      Don't have a account
                  </Link>
              </h5>
            </div>
        </div>
    )
}


export default SignIn;