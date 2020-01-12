import React, {Component}  from 'react';
import { Form } from 'react-final-form';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import RegistrationForm from '../../forms/RegistrationForm';
import { validateForm } from '../../forms/fields/validations';
import { registerUser, registerFor } from '../../../actions/authActions';
import RegisterType from './RegisterType';

class Register extends Component {    

    handleSubmit = (values) => {
        let optedType = this.props.optedType;
        if(optedType == 2){
            values.role = 'Broker'
        } else if(optedType == 3){
            values.role = 'Company'
        } else {
            values.role = 'Investor'
        }
        this.props.register(values);
    }   
    render(){
        const { optedType } = this.props;
        const regSuccess = this.props.regState.success;
        
        if(regSuccess){
            return <Redirect to='/auth/login' />
        }

        if(!!!optedType) return <RegisterType onSelect={this.props.registerFor} />
        return (
            <div className="page-signup page-create-account">
                <div className="form-normal form-create-account">
                    <h1>Create a free account</h1>
                    <Form
                        onSubmit={this.handleSubmit} 
                        validate={validateForm}                   
                        render={
                                ({handleSubmit, valid, invalid,form, pristine, values,initialValues,dirty}) => {                                                                
                                    return <RegistrationForm 
                                        onSubmit={handleSubmit} 
                                        buttonLabel="Create account"
                                        valid={valid}
                                        invalid={invalid}
                                        initialValues={initialValues}
                                        dirty={dirty}
                                        values={values}                                    
                                        pristine={pristine}
                                    />
                                }
                        }
                    />                
                </div>
            </div>
        );

    }
    
}

const mapStateToProps = (state) => ({
    optedType : state.register.optedType,
    regState : state.register
})

const mapDispatchToProps = (dispatch) => ({
    register : (payload) => registerUser(dispatch, payload),
    registerFor : (payload) => registerFor(dispatch, payload)
})

export default connect(mapStateToProps, mapDispatchToProps)(Register);