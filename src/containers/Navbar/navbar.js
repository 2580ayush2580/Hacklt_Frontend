import React from 'react';
import Auxes from '../../Auxes/auxes';
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
            <a href="/" className="navbar-brand"><i className="fas fa-laptop-code"></i> HACKLT</a>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
        </button>
            <div className="collapse navbar-collapse " id="navbarCollapse"> 
            {value === true ? <ul className="navbar-nav ml-auto"> <li className="nav-item"><a className="nav-link" href="/register"><button className="btn" >&nbsp;Login/Signup&nbsp;</button></a></li></ul>:<ul className="navbar-nav ml-auto">
            <li className="nav-item "><a className="nav-link" href="/">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="/createHackathon">Create a Hackathon</a></li>
            <li className="nav-item"><a className="nav-link" href="/user/myhackathon">My Hackathon</a></li>
             <li className="nav-item mr-2 "><a className="nav-link" href="/myprofile">Profile</a></li>
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
