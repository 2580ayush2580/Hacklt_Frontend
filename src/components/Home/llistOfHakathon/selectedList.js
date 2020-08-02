import React,{Component} from 'react'
import Navbar from '../../../containers/Navbar/navbar'
import './selectedList.css'
import axios from 'axios'
import {withRouter} from 'react-router-dom';
import RegisterForm from '../../../containers/Hackathon/regstrations'
import Spinner from '../../UI/spinner'

class SelecteddataPara extends Component {

    state = {
        nameOfHackathon : null,
        aboutTheHackathon:null,
        problem:null,
        data:null,
        id:this.props.match.params.id,
        startDate:null,
        endDate:null,
        teamSize:null,
        sponsors:null,
        location:null,
        Rules:null,
        Instructions:null,
        prizes:null,
        Judges:null,
        email:null,
        show:null,
        loading:true
    }
    showHandeler=()=>{
        this.setState({
            show:true
        })
    }

    componentDidMount () {
        console.log(this.props);
        this.loadData();
    }

    loadData () {
                axios.get( 'https://hacklt-backend.herokuapp.com/api/hackathonLists/name/' + this.props.match.params.id )
                .then((response)=>{
                    console.log(response.data)
                    this.setState({
                        nameOfHackathon:response.data.nameOfHackathon,
                        aboutTheHackathon:response.data.aboutTheHackathon,
                        problem:response.data.problemStatement,
                        startDate:response.data.startDate,
                        endDate:response.data.endDate,
                        teamSize:response.data.maxTeamSize,
                        sponsors:response.data.sponsors,
                        Judges:response.data.Judges,
                        prizes:response.data.prizes,
                        Rules:response.data.rules,
                        Location:response.data.location,
                        email:response.data.email,
                        Instructions:response.data.instructions,
                        data:response.data,
                        loading:false
                    }) } );
    }
    render() {
        return(
           <div>
                <Navbar />
                {this.state.loading ? <Spinner /> :  <div className='selectedListDataPara' >
                <h4 style={{
                    marginBottom:"10px"
                }} >{this.state.nameOfHackathon}</h4>
                <p>{this.state.aboutTheHackathon}</p>
                <h5 style={{
                }}>Problem Statement:</h5>
                <p>{this.state.problem}</p>
                <h5 style={{
                }}>Rules:</h5>
                <p>{this.state.Rules}</p>
                <h5 style={{
                }}>Instructions:</h5>
                <p>{this.state.Instructions}</p>
                <p><i class="fas fa-hourglass-start"></i> Start Date: {this.state.startDate}</p>
                <p><i class="fas fa-hourglass-end"></i> End Date: {this.state.endDate}</p>
                <p><i class="fas fa-users"></i> Maximum Team size: {this.state.teamSize}</p>
                <p><i class="fas fa-handshake"></i> Sponsors: {this.state.sponsors}</p>
                <p><i class="fas fa-gavel"></i> Judges: {this.state.Judges}</p>
                <p><i class="fas fa-award"></i> Prize: {this.state.prizes}</p>
                <p><i class="fas fa-location-arrow"></i> Location: {this.state.Location}</p>
                <p><i class="fas fa-envelope"></i> Contact us: {this.state.email}</p>
                <button onClick={this.showHandeler} className="btn">Participate</button>
               </div>}
               {this.state.show?<RegisterForm  id={ this.state.id} data={this.state.data} />:null}
           </div>
    )
    }
}

export default withRouter(SelecteddataPara);