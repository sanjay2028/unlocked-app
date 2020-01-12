import {
        REGISTRATION_PROCESS_STARTED,REGISTRATION_VALIDATION_FAILED, 
        REGISTRATION_PROCESS_ENDED, REGISTRATION_SUCCESS, REGISTRATION_FAILED,
        REGISTRATION_TYPE, CLEAR_REGISTRATON_ALERTS 
    } from '../../actions/constants';

const initialState = {
    isProcessing : false,
    optedType : null,
    error : '',
    success : false,
    alert : {
        type: null,
        message : null
    }
};

const registerReducer = (state = initialState, {type, payload=null}) => {
    switch(type){
        case REGISTRATION_PROCESS_STARTED:            
            return {
                ...state, isProcessing: true
            };
        case REGISTRATION_PROCESS_ENDED:
            return {
                ...state, isProcessing: false
            };            
        case REGISTRATION_SUCCESS:            
            return {
                ...state, alert: {
                    type : 'success',
                    message : "Registration Successful. Please login"
                }, success : true
            };
        case CLEAR_REGISTRATON_ALERTS:
            return {
                ...state, alert: {
                    type : null,
                    message : null
                }, success : false
            };
        case REGISTRATION_FAILED:
            return {
                ...state, alert: {
                    type : 'error',
                    message : "Show failed message here"
                }
            };
        case REGISTRATION_TYPE:
            return {
                ...state, optedType : payload
            }
        case REGISTRATION_VALIDATION_FAILED:
            console.log('REGISTRATION_VALIDATION_FAILED');
            return {
                ...state, alert: payload
            };
        default:
            return state;
    }

}

export default registerReducer;