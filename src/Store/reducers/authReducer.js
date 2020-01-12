import { 
        USER_LOGOUT,USER_LOGIN_SUCCESS, USER_LOGIN_FAILED,USER_LOGIN_NOTIFICATION,
        CLEAR_LOGIN_WARNING,CLEAR_LOGIN_NOTIFICATION, USER_LOGIN_PROCESS_STARTED 
} from '../../actions/constants';

const initialState = {
    id: '',
    first_name: 'safe',
    last_name: '',
    role: '',
    email: '',
    authorized: false,
    loading: false,
    notification : "Hello World Here",
    loginError : null    
}



const authReducer = (state = initialState, {type, payload=null}) => {
    switch(type){

        case USER_LOGIN_PROCESS_STARTED:
            return {
                ...state, authorized : false, notification : null, warning: null, loginError: null
            }; 

        case USER_LOGOUT:       
            localStorage.clear();
            return initialState;
        
        case USER_LOGIN_SUCCESS:
            console.log("Success", payload);
            return {
                ...state, ...payload, authorized : true
            };                    
        case USER_LOGIN_FAILED:
            console.log("Faile called");
            return {
                ...state, authorized : false, loginError : payload
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
                ...state, warning : null
            };        
        default:
            return state;
    }

}

export default authReducer;