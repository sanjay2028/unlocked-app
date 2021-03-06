import {
        APP_LOADING_STARTS, APP_LOADING_ENDS,
        REGISTRATION_PROCESS_STARTED,REGISTRATION_VALIDATION_FAILED, REGISTRATION_PROCESS_ENDED, 
        REGISTRATION_TYPE, REGISTRATION_SUCCESS, REGISTRATION_FAILED, USER_LOGIN_PROCESS_STARTED,
        USER_LOGIN_PROCESS_ENDED, USER_LOGIN_SUCCESS, USER_LOGIN_FAILED, CLEAR_REGISTRATON_ALERTS,
        CLEAR_LOGIN_WARNING, CLEAR_LOGIN_NOTIFICATION,USER_LOGOUT, UPDATE_AUTH, 
        START_PREFERENCE_UPDATE, END_PREFERENCE_UPDATE, PREFERENCE_UPDATE_SUCCESS, PREFERENCE_UPDATE_FAILED
    } from './constants';

import auth from '../services/authService';
import {hideUserMenu} from './appActions';

const registrationStarted = {
    type : REGISTRATION_PROCESS_STARTED
} 

const clearRegistrationAlerts = {
    type : CLEAR_REGISTRATON_ALERTS
}

const registrationSuccess = {
    type : REGISTRATION_SUCCESS
}

const registrationEnded = {
    type : REGISTRATION_PROCESS_ENDED
}

const registrationValidationFailed = {
    type : REGISTRATION_VALIDATION_FAILED
}

const registerFor = (dispatch, payload) => {
    dispatch({
        type : REGISTRATION_TYPE,
        payload
    })
}

const registerUser = (dispatch, payload) => {
    dispatch(registrationStarted);
    auth.register(payload).then(data => { 
        console.log(data);
        let {token, currentUser, message=""} = data;
        if(token){                        
            localStorage.setItem('auth_token',token);            
            localStorage.setItem('redirect',true);
            dispatch({type : UPDATE_AUTH, payload: {currentUser}});
            dispatch({
                type : REGISTRATION_SUCCESS                
            });     
        } else {
            dispatch(registrationValidationFailed, {
                type: 'error',
                message : message
            })    
        }      
        
        dispatch(registrationEnded);        
    }).catch(error => {        
        
        dispatch(registrationEnded);        
    })
}

//Login Actions

const authenticationStarted = {
    type : USER_LOGIN_PROCESS_STARTED    
}

const authenticationEnded = {
    type : USER_LOGIN_PROCESS_ENDED
    
}

const clearNotification = ({
    type : CLEAR_LOGIN_NOTIFICATION
})

const clearWarning = ({
    type : CLEAR_LOGIN_WARNING
})

//Get User
const getCurrentUser = (dispatch, payload) => {
    dispatch({type : APP_LOADING_STARTS})
    auth.me().then(payload => {
        let {currentUser} = payload;
        if(currentUser && currentUser.id !== undefined){
            dispatch({type : UPDATE_AUTH, payload})    
            dispatch({type : APP_LOADING_ENDS})
        } else {
            localStorage.removeItem('auth_token');
            dispatch({type : USER_LOGOUT})    
            dispatch({type : APP_LOADING_ENDS})
        }
        
    }        
    ).catch(e => {        
        dispatch({type : USER_LOGOUT})
        dispatch({type : APP_LOADING_ENDS})
    });
}

//Login User

const loginUser = (dispatch, payload) => {
    dispatch(authenticationStarted);
    auth.login(payload).then((data) => {        
        let {token, payload, success, message, error=null} = data;
        if(token){                        
            localStorage.setItem('auth_token',token);            
            dispatch({
                type : UPDATE_AUTH,
                payload, 
            });            
        } else if(success == false){
            dispatch({
                type : USER_LOGIN_FAILED,
                payload : error
            })
        }        
    }).catch(error => {
        console.log(error)
    });
}

//Logout
// const logoutUser = {
//     type : USER_LOGOUT
// }

const logoutUser = (dispatch) => {
    dispatch({type : APP_LOADING_STARTS})
    dispatch({type : USER_LOGOUT})
    dispatch(hideUserMenu)
    dispatch({type : APP_LOADING_ENDS})
}

export { 
    registerUser, registerFor, loginUser, clearRegistrationAlerts,
    clearNotification,clearWarning, logoutUser, getCurrentUser
} 