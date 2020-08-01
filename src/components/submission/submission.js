import React,{Component} from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom';
import './submission.css'

class SelecteddataPara extends Component {

    state = {
       links:[],
    }

    componentDidMount () {
        this.loadData();
    }

    loadData () {
                axios.get( 'https://hacklt-backend.herokuapp.com/api/hackathon/submit/' + this.props.match.params.id )
                .then((response)=>{
                    console.log(response.data)
                    this.setState({
                    links:response.data
                    }) } );
    }
    render() {
        let value=<div>No submission!</div>
        let i=1;
        if(this.state.links.length!==0){
           value = this.state.links.map(res=>{
               return <div  key={res._id} className="DataPara2">
               &nbsp;<span>{i++}. Submitted By: </span>{res.name}
               &nbsp;<span> Email: </span> {res.userEmail}
               &nbsp;<span> Github Link: </span> <a href={res.link}>{res.link.slice(0,35)}... <button style={{marginLeft:"15px"}} className="btn" >view</button></a></div>
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