import * as actionTypes from './actionTypes'
import axios from 'axios'
import { render } from 'react-dom'

export const fetchDataSuccess = (data) => {
    return{
        type:actionTypes.FETCH_DATA_SUCCESS,
        data:data
    }
}

export const fetchDataFail = (error) => {
    return{
        type:actionTypes.FETCH_DATA_FAIL,
        error:error
    }
}

export const fetchDataStart = () => {
    return{
        type:actionTypes.FETCH_DATA_sTART
    }
}

export const fetchData = (value) => {
    return dispatch => {
        dispatch(fetchDataStart());
        axios.get('http://localhost:5000/api/hackathonLists/'+value)
            .then(response => {
            dispatch(fetchDataSuccess(response.data));
            console.log(response)
           }).catch(error=>{
               dispatch(fetchDataFail(error));
           })
    }
}