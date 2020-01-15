import {
    START_PROFILE_UPDATE, END_PROFILE_UPDATE, PROFILE_UPDATE_SUCCESS, PROFILE_UPDATE_FAILED, UPDATE_AUTH,
    START_PREFERENCE_UPDATE, END_PREFERENCE_UPDATE, PREFERENCE_UPDATE_SUCCESS, PREFERENCE_UPDATE_FAILED,
    CLEAR_PREFERENCE_ALERT, CLEAR_PROFILE_ALERT
} from './constants';

import auth from '../services/authService';


const updatePreferences = (dispatch, payload) => {
    dispatch({type : START_PREFERENCE_UPDATE});
    auth.settings.investor(payload)
    .then(({currentUser}) => {
        if(currentUser !== null){
            dispatch({type : UPDATE_AUTH, payload:currentUser});
            dispatch({type : PREFERENCE_UPDATE_SUCCESS});
        }

        dispatch({type : END_PREFERENCE_UPDATE});
        dispatch({type : PREFERENCE_UPDATE_FAILED});
    })
    .catch(error => {
        console.log("Preference End Error: ", error)        
        dispatch({type : END_PREFERENCE_UPDATE});
        dispatch({type : PREFERENCE_UPDATE_FAILED});
    });
}

const clearAlert = {
    type : 'CLEAR_PROFILE_ALERT'
}

const updateProfile = (dispatch, payload) => {
    dispatch({type : START_PROFILE_UPDATE});
    auth.profile.broker(payload)
    .then(({currentUser}) => {        
        if(currentUser !== null){
            dispatch({type : UPDATE_AUTH, payload:currentUser});
            dispatch({type : PROFILE_UPDATE_SUCCESS, payload: "Profile updated successfully"});
        } else {
            dispatch({type : PROFILE_UPDATE_FAILED, payload});
        }
        dispatch({type : END_PROFILE_UPDATE});                
    })
    .catch(error => {
        dispatch({type : END_PROFILE_UPDATE});
        dispatch({type : PROFILE_UPDATE_FAILED, payload: error});
    });
}

export {updateProfile, updatePreferences, clearAlert }
