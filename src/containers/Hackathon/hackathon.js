import React, {Component} from 'react';
import axios from 'axios';
import Navbar from '../Navbar/navbar'
import {withRouter} from 'react-router-dom';
import MyHackathon from '../../components/myHackathon/myhackathon'
import Spinner from "../../components/UI/spinner"
import Footer from '../Footer/footer';

class Hackathon extends Component {
    state={
        userId: JSON.parse(localStorage.getItem('user'))._id,
        data:[],
        loading:true
    }
    componentDidMount = () =>{
        axios.get('https://hacklt-backend.herokuapp.com/api/hackathon/register/'+this.state.userId)
        .then(response => {
            this.setState({
                data:response.data,
                loading:false
            })
        }).catch(err=>{
            this.setState({
                loading:false
            })
        })
    }
    selectHandeler = (id) => {
        this.props.history.push( '/user/myhackathon/' + id );
    }
  render(){
    let key = <div style={{
        textAlign:"center",
        marginTop:"20px",
        fontSize:"20px"
    }} >Not Register In Any Hackathon</div>;
   if(this.state.data.length!==0){
    key = this.state.data.map(res=>{
        return <MyHackathon 
        key={res.hackathonId}
        clicked={()=>this.selectHandeler(res.hackathonId)}
        data={res.data}
         />;
    })
   }
    return (
        <div>
        <Navbar/>
        { this.state.loading ? <Spinner /> : key}
        <Footer />
        </div>
    );
  }
}

export default withRouter(Hackathon);
