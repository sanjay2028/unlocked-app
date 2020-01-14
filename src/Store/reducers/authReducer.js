import { 
        USER_LOGOUT,USER_LOGIN_SUCCESS, USER_LOGIN_FAILED,USER_LOGIN_NOTIFICATION,
        CLEAR_LOGIN_WARNING,CLEAR_LOGIN_NOTIFICATION, USER_LOGIN_PROCESS_STARTED, UPDATE_AUTH 
} from '../../actions/constants';

const initialState = {
    currentUser: {},    
    loading: false,
    notification : "",
    loginError : null    
}



const authReducer = (state = initialState, {type, payload=null}) => {    
    switch(type){
        case USER_LOGIN_PROCESS_STARTED:
            return {
                ...state, notification : null, warning: null, loginError: null
            }; 

        case UPDATE_AUTH:
            console.log("Updating auth");
            return {
                ...state, ...payload
            }

        case USER_LOGOUT:               
            return initialState;
        
        case USER_LOGIN_SUCCESS:            
            return {
                ...state, ...payload
            };                    
        case USER_LOGIN_FAILED:            
            return {
                ...state, currentUser : {}, loginError : payload
            }

        case USER_LOGIN_NOTIFICATION:            
            return {
                ...state, notification : payload
            };      

        case CLEAR_LOGIN_NOTIFICATION:                        
            return {
                ...state, notification : null
            };    

        case CLEAR_LOGIN_WARNING:            
            return {
                ...state, currentUser : {}, warning : null
            };        
        default:
            return state;
    }

}

export default authReducer;