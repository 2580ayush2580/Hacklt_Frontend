import React , {Component} from 'react';
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom';
import Lists from './lists'
import * as actions from '../../../store/actions/fetchData'
class ListofHakathon extends Component{
    state = {
        id:null
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

        let list = this.props.list;
        let list2=null;
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
    return (
        <div>
        {list2}
        {/* <SelectLists id={this.state.id} /> */}
        {console.log(this.props)}
        {/* <Route path='/hackathon/:id' exact render={props => <SelectLists id={this.state.id} />} /> */}
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

