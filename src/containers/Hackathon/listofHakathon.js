import React , {Component} from 'react';
import { connect } from 'react-redux'
import axios from 'axios';
import Datapara from './dataPara'
import * as actions from '../../store/actions/fetchData'
import SelectDataPara from './SelectedDatapara'
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
      
    }

   render(){

        let list = this.props.list;
        let list2=null;
        list2 = list.map(arr=>{
          return <Datapara
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
        <Datapara />
        {list2}
        <SelectDataPara id={this.state.id} />
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

