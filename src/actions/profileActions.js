import {
    START_PROFILE_UPDATE, END_PROFILE_UPDATE, PROFILE_UPDATE_SUCCESS, PROFILE_UPDATE_FAILED, UPDATE_AUTH,
    START_PREFERENCE_UPDATE, END_PREFERENCE_UPDATE, PREFERENCE_UPDATE_SUCCESS, PREFERENCE_UPDATE_FAILED,
    CLEAR_PREFERENCE_ALERT, CLEAR_PROFILE_ALERT
} from './constants';

import auth from '../services/authService';


const updatePreferences = (dispatch, payload) => {
    dispatch({type : START_PREFERENCE_UPDATE});
    auth.preferences.investor(payload)
    .then((data) => {
        let {currentUser} = data;
        if(currentUser !== null){
            dispatch({type : UPDATE_AUTH, payload : {currentUser: currentUser.data}});
            dispatch({type : PREFERENCE_UPDATE_SUCCESS, payload : data.message});            
        } else {            
            dispatch({type : PREFERENCE_UPDATE_FAILED, payload : data.error});
        }
        dispatch({type : END_PREFERENCE_UPDATE});
    })
    .catch(error => {        
        dispatch({type : END_PREFERENCE_UPDATE});
        dispatch({type : PREFERENCE_UPDATE_FAILED, payload : error});
    });
}

const clearAlert = {
    type : 'CLEAR_PROFILE_ALERT'
}

const updateProfile = (dispatch, payload) => {
    dispatch({type : START_PROFILE_UPDATE});
    auth.profile.broker(payload)
    .then(({currentUser, message, errors}) => {        
        if(currentUser !== null){
            dispatch({type : UPDATE_AUTH, payload:{currentUser: currentUser.data}});
            dispatch({type : PROFILE_UPDATE_SUCCESS, payload: "Profile updated successfully"});
            dispatch({type : END_PROFILE_UPDATE});
        } else {
            return Promise.reject({message, errors});
        }                 
    })
    .catch(({errors, message}) => {
        dispatch({type : PROFILE_UPDATE_FAILED, payload:{message, errors}});
        dispatch({type : END_PROFILE_UPDATE});
    });
}

const updateInvstorProfile = (dispatch, payload) => {
    dispatch({type : START_PROFILE_UPDATE});
    auth.profile.investor(payload)
    .then(({currentUser, message, errors}) => {                
        if(currentUser !== null){
            dispatch({type : UPDATE_AUTH, payload:{currentUser: currentUser.data}});
            dispatch({type : PROFILE_UPDATE_SUCCESS, payload: "Profile updated successfully"});
            dispatch({type : END_PROFILE_UPDATE});
        } else {
            return Promise.reject({message, errors});
        }                        
    })
    .catch(({errors, message}) => {        
        dispatch({type : PROFILE_UPDATE_FAILED, payload:{message, errors}});
        dispatch({type : END_PROFILE_UPDATE});
    });
}

export {updateProfile, updateInvstorProfile, updatePreferences, clearAlert }
