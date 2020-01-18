import { 
    APP_LOADING_STARTS, APP_LOADING_ENDS, HIDE_USER_MENU, SHOW_USER_MENU
} from '../../actions/constants';

const initialState = {
    isLoading : null,
    userMenu : false
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

        case SHOW_USER_MENU:            
            return {
                ...state, userMenu : true
            }
        case HIDE_USER_MENU:            
            return {
                ...state, userMenu : false
            }
        default:
            return state;
    }
}


export default appReducer;