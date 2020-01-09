import React, { Component, Fragment }  from 'react';
import { connect } from 'react-redux';
import ModalForm from '../ModalForm';
import {editJobEntry, updateJobEntry, cancelEditEntry} from '../../../actions/jobList';

class EditEntry extends Component{    
    handleClick = () => {        
        const { _key } = this.props;
        this.props.editJobEntry(_key);
    }
    handleUpdate = (payload) => {
        payload._key = this.props.editing._key;
        this.props.updateJobEntry(payload);
    }    
    render(){
        const { entry } = this.props.editing;        
        return(
            <Fragment>
            <a onClick={ this.handleClick }>Edit</a>
            {
                (this.props.editing._key !== null) &&            
                <ModalForm
                    entry={entry} 
                    onAddEntry={this.handleUpdate}
                    title="Update Record"
                    visible={true}                
                    onCancel={this.props.cancelEditEntry}
                />
            }
            </Fragment>
        )
    }
}

const mapStateToProps = ({jobList}) => ({
    editing : jobList.editing
})

const mapDispatchToProps = (dispatch) => ({
    editJobEntry    : (payload) => editJobEntry(dispatch, payload),   
    updateJobEntry  : (payload) => updateJobEntry(dispatch, payload),
    cancelEditEntry  : () => dispatch(cancelEditEntry)
});

export default connect(mapStateToProps, mapDispatchToProps)(EditEntry);