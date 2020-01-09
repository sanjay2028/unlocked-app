import {    FILE_GENERATION_STARTED, FILE_GENERATION_ENDED, FILE_GENERATION_SUCCESS, 
            FILE_GENERATION_FAILED, FILE_GENERATION_VALIDATION_FAILED } from './constants';
import fileService from '../services/fileService';

import forceDownload from '@fvilers/force-transfer';

const startFileGeneration = {
    type : FILE_GENERATION_STARTED,    
}

const endFileGeneration = {
    type : FILE_GENERATION_ENDED,    
}

const successFileGeneration = {
    type : FILE_GENERATION_SUCCESS,    
}

const failedFileGeneration = {
    type : FILE_GENERATION_FAILED,    
}

export const errorValidation = (dispatch, payload) => {    
    dispatch({
        type : FILE_GENERATION_VALIDATION_FAILED,    
        payload
    });
}

export const generateFile =  (dispatch, payload) => {
    dispatch(startFileGeneration);
    fileService.create(payload).then(data => {
        dispatch(endFileGeneration);  
        dispatch(successFileGeneration);  
        forceDownload("https://carshopform.herokuapp.com/downloads/" + data.filePath, data.filePath);        
        
    }).catch(error => {
        dispatch(failedFileGeneration);
        console.log(error);
    })
}