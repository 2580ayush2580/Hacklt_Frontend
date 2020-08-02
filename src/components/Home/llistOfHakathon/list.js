import React , {Component} from 'react';
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom';
import Lists from './lists'
import * as actions from '../../../store/actions/fetchData'
import Spinner from '../../UI/spinner'
class ListofHakathon extends Component{
    state = {
        id:null,
    }
    componentDidMount = () =>{
        this.props.onFetchData('all')
    }

    selectHandeler = (id)=>{
        this.setState({
            id:id
        })
        this.props.history.push( 'hackathon/' + id );
    }
   render(){

       let list2=null;
       if(this.props.loading){
        list2=<Spinner/>;
       }
       if(!this.props.loading){
        let list = this.props.list;
        list2 = list.map(arr=>{
          return <Lists
              aboutTheHackathon={arr.aboutTheHackathon}
              nameOfHackathon={arr.nameOfHackathon}
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
        {list2}
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


export default  connect(mapStateToProps,mapDispatchToProps)(withRouter(ListofHakathon) ) ;

