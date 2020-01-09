import {
        ADD_JOB_ENTRY, EDIT_JOB_ENTRY,CANCEL_EDIT_ENTRY,REMOVE_JOB_ENTRY,
        SHOW_ENTRY_FORM,HIDE_ENTRY_FORM, CLEAR_ALERT_TEXT, UPDATE_JOB_ENTRY 
} from '../../actions/constants';

const initialState = {
    disabled : true,
    jobName : null,
    material: null,
    entries: [],
    modalVisibility : false,
    error:null,
    success: null,
    editing : {
        _key : null,
        entry : {}
    } 
};


const jobList = (state=initialState, {type, payload}) => {
    switch(type){        
        case ADD_JOB_ENTRY:   
        let entries = [payload];
        entries = entries.concat(state.entries);
        return Object.assign({}, state, {
            entries : entries,
            success : 'Entry Added successfully'
        }); break;        
        case REMOVE_JOB_ENTRY:            
            let filteredEntries = state.entries.filter(item => item._key !== payload)                        
            return Object.assign({}, state, {
                entries : filteredEntries,
                success : 'Entry removed successfully'
            });
            break;
        case UPDATE_JOB_ENTRY:
            let oldEntries = state.entries;
            let updatedEntries = oldEntries.map( item => {                                
                return (item._key === payload._key)? payload : item                    
            })
            return {
                ...state, entries : updatedEntries, editing : {_key: null, entry : null}
            }            
        case EDIT_JOB_ENTRY:
            let record = state.entries.filter(item => item._key == payload)            
            if(record.length > 0){                

                return Object.assign({}, state, {
                    editing : {
                        _key : payload,
                        entry : record.shift()
                    }
                });

            } else {
                return {
                    ...state, error : "Unable to find record"                
                }
            }     
            break;       
        case CANCEL_EDIT_ENTRY:
            return {
                ...state, editing : {_key : null, entry : {}}                
            }
            break;
        case SHOW_ENTRY_FORM:
            return {
                ...state, modalVisibility : true
            }
            break;
        case HIDE_ENTRY_FORM:
            return {
                ...state, modalVisibility : false
            }
            break;
        case CLEAR_ALERT_TEXT:
            return {
                ...state, success : null
            }
            break;
        default:
            return state;
            break;
    }
}

export default jobList;