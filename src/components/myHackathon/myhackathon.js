import React, { Component } from 'react';
import './myHackathon.css'

class Myhackathon extends Component {
    render() {
        console.log(this.props.data)
        return (
            <div>
            <div className='myHackathonDataPara' onClick={this.props.clicked} >
            <h4 style={{
                marginBottom:"10px"
            }} >{this.props.data.nameOfHackathon}</h4>
            <p>{this.props.data.aboutTheHackathon.slice(0,270)}... </p>
            </div>
           </div>
        );
    }
}

export default Myhackathon;
