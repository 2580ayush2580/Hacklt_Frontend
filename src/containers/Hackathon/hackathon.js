import React, {Component} from 'react';
import axios from 'axios';
import Navbar from '../Navbar/navbar'
import {withRouter} from 'react-router-dom';
import MyHackathon from '../../components/myHackathon/myhackathon'
import Footer from '../Footer/footer'


class Hackathon extends Component {
    state={
        userId: JSON.parse(localStorage.getItem('user'))._id,
        data:[],
    }
    componentDidMount = () =>{
        axios.get('http://localhost:5000/api/hackathon/register/'+this.state.userId)
        .then(response => {
            // let key  = [];
            // key = response.data.map(res=>{
            //     return res.hackathonId;
            // })
            // key = response.data.map(res=>{
            //     return res.data.nameOfHackathon;
            // })
            // console.log(key);
            this.setState({
                data:response.data
            })
        })
    }
    selectHandeler = (id) => {
        this.props.history.push( '/user/myhackathon/' + id );
    }
  render(){
    let key = [];
    key = this.state.data.map(res=>{
        return <MyHackathon 
        key={res.hackathonId}
        clicked={()=>this.selectHandeler(res.hackathonId)}
        data={res.data}
         />;
    })
    // console.log(key)
    // key = response.data.map(res=>{
    //     return res.data.nameOfHackathon;
    // })
    return (
        <div>
        <Navbar/>
        {key}
        <Footer />
        </div>
    );
  }
}

export default withRouter(Hackathon);
