import { 
        USER_LOGOUT,USER_LOGIN_SUCCESS, USER_LOGIN_FAILED,USER_LOGIN_NOTIFICATION,
        CLEAR_LOGIN_WARNING,CLEAR_LOGIN_NOTIFICATION, USER_LOGIN_PROCESS_STARTED, UPDATE_AUTH,
        START_PROFILE_UPDATE, END_PROFILE_UPDATE, PROFILE_UPDATE_SUCCESS, PROFILE_UPDATE_FAILED,
        START_PREFERENCE_UPDATE, END_PREFERENCE_UPDATE, PREFERENCE_UPDATE_SUCCESS, PREFERENCE_UPDATE_FAILED,
        CLEAR_PREFERENCE_ALERT, CLEAR_PROFILE_ALERT
} from '../../actions/constants';

const initialState = {
    currentUser: {},
    roles : null,    
    loading: false,
    notification : "",
    loginError : null,
    profile: {
        isProcessing : false,
        success: null, 
        error: null,
        message: null,
        errors : []
    },
    preferences: {
        isProcessing : false,
        success: null, 
        error: null,
        message: null        
    }
}

const authReducer = (state = initialState, {type, payload=null}) => {    
    switch(type){
        case USER_LOGIN_PROCESS_STARTED:
            return {
                ...state, notification : null, warning: null, loginError: null
            }; 

        case UPDATE_AUTH:                
            let { role } = payload.currentUser;            
            let userRoles = [4];            
            role.forEach((v, i) => {
                userRoles.push(v.pivot.role_id);
            });
            return {
                ...state, ...payload, roles : userRoles
            }

        case USER_LOGOUT:
            console.log("LOgged Out called");
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
        case START_PROFILE_UPDATE:            
            return {
                ...state, profile : {isProcessing: true, success:null, error: null, errors:[], message:null}
            }       
        case CLEAR_PROFILE_ALERT:            
            return {
                ...state, profile : {isProcessing: false, success:null, error: null, errors:[], message:null}
            }       
        case END_PROFILE_UPDATE:            
            return {
                ...state, profile : {...state.profile, isProcessing: false}
            }       
        case PROFILE_UPDATE_SUCCESS:
            return {
                ...state, profile : {...state.profile, success: true, message : payload, error: null, errors:[]}
            }                   
        case PROFILE_UPDATE_FAILED:
            return {
                ...state, profile : {...state.profile, success: false,message: null, error : payload.message, errors: payload.errors}
            }       
        case START_PREFERENCE_UPDATE:
            return {
                ...state, preferences : {...state.preferences, isProcessing: true } 
            }       
        case END_PREFERENCE_UPDATE:
            return {
                ...state, preferences : {...state.preferences, isProcessing: false } 
            }      
        case PREFERENCE_UPDATE_SUCCESS:
            return {                                
                ...state, preferences : {...state.preferences, success: true, message : payload } 
            }       
        case PREFERENCE_UPDATE_FAILED:
            return {
                ...state, preferences : {...state.preferences, success: false, message : payload }                 
            }
        case CLEAR_PREFERENCE_ALERT:            
            return {
                ...state, preferences : {isProcessing: false, success:null, error: null, message:null}
            }              
        default:
            return state;
    }

}

export default authReducer;