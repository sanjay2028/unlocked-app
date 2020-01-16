import { 
    APP_LOADING_STARTS, APP_LOADING_ENDS
} from '../../actions/constants';

const initialState = {
    isLoading : null
}


const appReducer = (state=initialState, {type, payload=null}) => {
    switch(type){
        case APP_LOADING_STARTS:            
            return {
                isLoading : true
            }

        case APP_LOADING_ENDS:            
            return {
                isLoading : false
            }
        default:
            return state;
    }
}


export default appReducer;