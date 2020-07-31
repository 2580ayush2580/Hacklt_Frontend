import React,{Component} from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom';
import Participants from './participants'

class SelecteddataPara extends Component {

    state = {
       data:[]
    }

    componentDidMount () {
        console.log(this.props);
        this.loadData();
    }

    loadData () {
                axios.get( 'http://localhost:5000/api/hackathon/participant/' + this.props.match.params.id )
                .then((response)=>{
                    console.log(response.data)
                    this.setState({
                    data:response.data
                    }) } );
    }
    render() {
        let value=<div style={{marginTop:"15px"}} ><p>No Participant!</p></div>;
        let i=1;
       if(this.state.data.length!==0){
        value=this.state.data.map(res=>{
            return (
                <Participants
                 number={i++}
                 key={res._id}
                 firstName={res.firstName}
                 lastName={res.lastName}
                 email={res.email}
                 alternateContactNumber={res.alternateContactNumber}
                 branch={res.branch}
                 city={res.city}
                 college={res.college}
                 contactNumber={res.contactNumber}
                 country={res.country}
                 dateOfBirth={res.dateOfBirth}
                 degree={res.degree}
                 gender={res.gender}
                 graduationYear={res.graduationYear}
                 skills={res.skills}
                 state={res.state}
                 />
            )
        })
       }
        return(
           <div>
             {value}
           </div>
    )
    }
}

export default withRouter(SelecteddataPara);