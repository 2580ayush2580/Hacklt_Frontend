import React from 'react';
import Auxes from '../../Auxes/auxes';
import {Link} from "react-router-dom"
import './navbar.css'
import {withRouter} from 'react-router-dom'
import {isAuth} from '../../helper/auth'
const Navbar = (props) => {
    let value = false;
    isAuth();
    if(!localStorage.getItem('user')){
        value = true;
       
    }
    const LogoutHandeler = () =>{
        localStorage.removeItem('user')
        props.history.push('/');
        isAuth();
    }
    return (
        <Auxes>
      <div>
      <div className="navbar navbar-expand-lg navbar-dark" id="main-nav">
        <div className="container">
            <Link to="/" className="navbar-brand"><i className="fas fa-laptop-code"></i> HACKLT</Link>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
        </button>
            <div className="collapse navbar-collapse " id="navbarCollapse"> 
            {value === true ? <ul className="navbar-nav ml-auto"> <li className="nav-item"><Link className="nav-link" to="/register"><button className="btn" >&nbsp;Login/Signup&nbsp;</button></Link></li></ul>:<ul className="navbar-nav ml-auto">
            <li className="nav-item "><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/createHackathon">Create a Hackathon</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/user/myhackathon">My Hackathon</Link></li>
             <li className="nav-item mr-2 "><Link className="nav-link" to="/myprofile">Profile</Link></li>
             <li className="nav-item"><button className="btn" onClick={LogoutHandeler} >&nbsp;Logout&nbsp;</button></li>
            </ul>}
            </div>
        </div>
      </div>
      </div>
        </Auxes>
    );
}

export default withRouter(Navbar);
