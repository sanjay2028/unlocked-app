import { 
    APP_LOADING_STARTS, APP_LOADING_ENDS
} from '../../actions/constants';

const initialState = {
    isLoading : false
}


const appReducer = (state=initialState, {type, payload=null}) => {
    switch(type){
        case APP_LOADING_STARTS:
            return {
                ...state, isLoading : true
            }

        case APP_LOADING_ENDS:
            return {
                ...state, isLoading : false
            }
        default:
            return state;
    }
}


export default appReducer;