import {FILE_GENERATION_STARTED,FILE_GENERATION_VALIDATION_FAILED, FILE_GENERATION_ENDED, FILE_GENERATION_SUCCESS, FILE_GENERATION_FAILED } from '../../actions/constants';

const initialState = {
    isProcessing : false,
    error : '',
    alert : {
        type: null,
        messge : null
    }
};

const file = (state = initialState, {type, payload=null}) => {

    switch(type){

        case FILE_GENERATION_STARTED:            
            return {
                ...state, isProcessing: true
            };
        case FILE_GENERATION_ENDED:
            return {
                ...state, isProcessing: false
            };            
        case FILE_GENERATION_SUCCESS:            
            return {
                ...state, alert: {
                    type : 'success',
                    message : "Show success message here"
                }
            };
        case FILE_GENERATION_FAILED:
            return {
                ...state, alert: {
                    type : 'error',
                    message : "Show failed message here"
                }
            };
        case FILE_GENERATION_VALIDATION_FAILED:
            console.log('FILE_GENERATION_VALIDATION_FAILED');
            return {
                ...state, alert: payload
            };
        default:
            return state;
    }

}

export default file;