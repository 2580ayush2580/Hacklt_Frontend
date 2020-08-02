import React, { Component } from 'react';
import './Profile.css';
import Navbar from '../../containers/Navbar/navbar';
import Footer from "../../containers/Footer/footer"

class Profile extends Component {
    state={
       owner:JSON.parse(localStorage.getItem('user')).name, 
       email:JSON.parse(localStorage.getItem('user')).email, 
    }
    render() {
        return (
            <div>
            <Navbar/>
            <div>
            <p style={{textAlign:"center"}} >Name: {this.state.owner}</p>
            <p style={{textAlign:"center"}}>Email: {this.state.email}</p>
            </div>
            <Footer />
            </div>
        );
    }
}

export default Profile;
