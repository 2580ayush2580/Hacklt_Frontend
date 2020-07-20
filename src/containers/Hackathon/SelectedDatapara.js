import React,{Component} from 'react'
import './dataPara.css'
import axios from 'axios'
import RegisterForm from './regstrations'
import Register from '../Auth/register'

class SelecteddataPara extends Component {

    state = {
        nameOfHackathon : null,
        data:null
    }

    componentDidUpdate = (prevProps, prevState) =>{
           if(prevProps.id !== this.props.id){
            axios.get('http://localhost:5000/api/hackathonLists/name/'+this.props.id)
            .then((response)=>{
                console.log(response.data)
                this.setState({
                    nameOfHackathon:response.data.nameOfHackathon,
                    data:response.data
                })
            })
           }
    }
    
    render() {
        return(
            <div className='DataPara' >
            <h1>{this.state.nameOfHackathon}</h1>
            <RegisterForm id={this.props.id} data={this.state.data} />
            </div>
    )
    }
}

export default SelecteddataPara;