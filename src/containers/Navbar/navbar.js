import React from 'react';
import Auxes from '../../Auxes/auxes';
import './navbar.css'

const Navbar = () => {
    let value = false;
    if(!localStorage.getItem('user')){
        value = true;
    }
    const LogoutHandeler = () =>{
        localStorage.removeItem('user')
    }
    return (
        <Auxes>
        <nav class="navbar1">
        <h1 class="logo text-primary"><i class="fas fa-laptop-code"></i>
           &nbsp; HACKLT</h1>
      
            {value === true ? <ul> <li><a href="/login"><button>&nbsp;Login/Signup&nbsp;</button></a></li></ul>:<ul>
            <li><a href="/">Home</a></li>
            <li><a href="/createHackathon">Create a Hackathon</a></li>
            <li><a href="/myHackathon">My Hackathon</a></li>
            <li><a href="/myprofile">Profile</a></li>
            <li><a href="/"><button onClick={LogoutHandeler} >&nbsp;Logout&nbsp;</button></a></li>
            </ul>}
      
      </nav>
        </Auxes>
    );
}

export default Navbar;
