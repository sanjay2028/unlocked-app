import {
        REGISTRATION_PROCESS_STARTED,REGISTRATION_VALIDATION_FAILED, REGISTRATION_PROCESS_ENDED, 
        REGISTRATION_TYPE, REGISTRATION_SUCCESS, REGISTRATION_FAILED, USER_LOGIN_PROCESS_STARTED,
        USER_LOGIN_PROCESS_ENDED, USER_LOGIN_SUCCESS, USER_LOGIN_FAILED, CLEAR_REGISTRATON_ALERTS,
        CLEAR_LOGIN_WARNING, CLEAR_LOGIN_NOTIFICATION
    } from './constants';

import auth from '../services/authService';

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
        dispatch(registrationSuccess);
        dispatch({
            type : 'USER_LOGIN_NOTIFICATION',
            payload: "Registration Successfull! Please login"
        })
        dispatch(registrationEnded);        
    }).catch(error => {
        
        console.log(error);
        
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

const loginUser = (dispatch, payload) => {
    dispatch(authenticationStarted);
    auth.login(payload).then((data) => {        
        let {token, payload, success, message, error=null} = data;
        if(token){                        
            localStorage.setItem('auth_token',token);            
            dispatch({
                type : USER_LOGIN_SUCCESS,
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


export { registerUser, registerFor, loginUser, clearRegistrationAlerts,clearNotification,clearWarning} 