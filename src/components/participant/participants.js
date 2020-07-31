import React, { Component } from 'react';
import './participant.css'

class Participants extends Component {
    render() {
        return (<div className="DataPara" >
            <span> Participant No.{this.props.number}:</span>  
                  &nbsp;{this.props.firstName}
                   &nbsp;   {this.props.lastName}
                   &nbsp; <span>Email:</span>  &nbsp;{this.props.email}
                   &nbsp;  <span>Gender:</span>  &nbsp;{this.props.gender}
                   &nbsp; <span>Branch:</span>  &nbsp;{this.props.branch}
                   &nbsp;  <span>City:</span>   &nbsp;{this.props.city}
                   &nbsp;  <span>College:</span>  &nbsp;{this.props.college}
                   &nbsp;  <span>DOB:</span>  &nbsp;{this.props.dateOfBirth}
                   &nbsp;  <span>Degree:</span>   &nbsp;{this.props.degree}
                   &nbsp;  <span>Graduation year:</span>   &nbsp;{this.props.graduationYear}
                   &nbsp;  <span>Slills:</span>   &nbsp;{this.props.skills}
                   &nbsp; <span>State:</span>    &nbsp;{this.props.state}
                   &nbsp; <span>Country:</span>   &nbsp;{this.props.country}
                   &nbsp; <span>Contact Number1:</span>  &nbsp;{this.props.contactNumber}
                   &nbsp;  <span>Contact Number2:</span>  &nbsp;{this.props.alternateContactNumber}
                   &nbsp;</div>
        );
    }
}

export default Participants;