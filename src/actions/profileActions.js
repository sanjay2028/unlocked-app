import {
    START_PROFILE_UPDATE, END_PROFILE_UPDATE, PROFILE_UPDATE_SUCCESS, PROFILE_UPDATE_FAILED, UPDATE_AUTH
} from './constants';

import auth from '../services/authService';

const updateProfile = (dispatch, payload) => {
    dispatch({type : START_PROFILE_UPDATE});
    auth.settings.investor(payload)
    .then(({currentUser}) => {
        if(currentUser !== null){
            dispatch({type : UPDATE_AUTH, payload:currentUser})    
        }
        
    })
    .catch(error => console.log("Errorbeaut", error));
}

export {updateProfile }