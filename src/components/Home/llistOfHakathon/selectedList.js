import React,{Component} from 'react'
import Navbar from '../../../containers/Navbar/navbar'
import './selectedList.css'
import axios from 'axios'
import {withRouter} from 'react-router-dom';
import RegisterForm from '../../../containers/Hackathon/regstrations'

class SelecteddataPara extends Component {

    state = {
        nameOfHackathon : null,
        aboutTheHackathon:null,
        problem:null,
        data:null,
        id:this.props.match.params.id,
    }

    componentDidMount () {
        console.log(this.props);
        this.loadData();
    }

    // componentDidUpdate() {
    //     console.log(this.props);
    //     this.loadData();
    // }

    loadData () {
                axios.get( 'http://localhost:5000/api/hackathonLists/name/' + this.props.match.params.id )
                .then((response)=>{
                    console.log(response.data)
                    this.setState({
                        nameOfHackathon:response.data.nameOfHackathon,
                        aboutTheHackathon:response.data.aboutTheHackathon,
                        problem:response.data.problemStatement,
                        data:response.data
                    }) } );
    }
    render() {
        return(
           <div>
                <Navbar />
                <div className='selectedListDataPara' >
                <h1 style={{
                    textAlign:"center",
                    marginBottom:"10px"
                }} >{this.state.nameOfHackathon}</h1>
                <h3>{this.state.aboutTheHackathon}</h3>
                <h2 style={{
                    color:"#8c59ff"
                }}>Problem Statement:</h2>
                <h3>{this.state.problem}</h3>
               </div>
               <RegisterForm id={ this.state.id} data={this.state.data} />
           </div>
    )
    }
}

export default withRouter(SelecteddataPara);