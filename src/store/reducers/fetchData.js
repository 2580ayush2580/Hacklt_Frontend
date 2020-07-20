import * as actionTypes from '../actions/actionTypes'

const  initialState = {
    data:[],
    loading:false,
    error:null,
    data2:null
}

const reducer = (state=initialState,action)=>{
    switch(action.type){
        case actionTypes.FETCH_DATA_sTART:
            return{
                ...state,
                loading:true
            }
        case actionTypes.FETCH_DATA_SUCCESS:
            return{
                ...state,
                data: action.data,
                loading:false
            }
     
        case actionTypes.FETCH_DATA_FAIL:
            return{
                ...state,
                error:action.error,
                loading:false
            }
        default:
            return state;
    }
}

export default reducer; 