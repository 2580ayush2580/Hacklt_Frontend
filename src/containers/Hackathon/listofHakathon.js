import React , {Component} from 'react';
import { connect } from 'react-redux'
import Datapara from './dataPara'
import * as actions from '../../store/actions/fetchData'
import SelectDataPara from './SelectedDatapara'
import Navbar from '../../containers/Navbar/navbar'
import Footer from '../../containers/Footer/footer'
import Form from './form'
class ListofHakathon extends Component{
    state = {
        owner:JSON.parse(localStorage.getItem('user'))._id,
        id:null
    }
    componentDidMount = () =>{
        this.props.onFetchData(this.state.owner)
    }

    selectHandeler = (id)=>{
        this.setState({
            id:id 
        })
        this.props.history.push('/createHackathon/myHackathon/'+id)
    }

   render(){

        let list = this.props.list;
        let list2=<div style={{textAlign:"center"}} >No Past Hackathons!</div>;
        if(list.length!=0){
            list2 = list.map(arr=>{
                return <Datapara
                    nameOfHackathon={arr.nameOfHackathon}
                    aboutTheHackathon={arr.aboutTheHackathon}
                    startDate={arr.startDate}
                    maxTeamSize={arr.maxTeamSize}
                    key={arr._id}
                    id={arr._id}
                    clicked={()=>this.selectHandeler(arr._id)}
                 />
              })
        }
    return (
        <div>
        <Navbar />
        <Form />
        <div style={{textAlign:"center",marginTop:'10px'}} ><h5><u>Past Hackathons</u></h5></div>
        {list2}
        <Footer />

        </div>
    );
   }
}


const mapStateToProps = state =>{
    return{
     list:state.fetchData.data,
     error:state.fetchData.error,
     loading:state.fetchData.loading,
    }
}

const mapDispatchToProps = dispatch => {

    return{
        onFetchData : (value)=>dispatch(actions.fetchData(value)),
    }
}


export default  connect(mapStateToProps,mapDispatchToProps)(ListofHakathon) ;

