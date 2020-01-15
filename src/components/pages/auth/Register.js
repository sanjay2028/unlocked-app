import React, {Component}  from 'react';
import { Form } from 'react-final-form';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import RegistrationForm from '../../forms/RegistrationForm';
import { validateForm } from '../../forms/fields/validations';
import { registerUser, registerFor } from '../../../actions/authActions';
import RegisterType from './RegisterType';
import BrokerForm from '../../forms/BrokerForm';
import Alert from '../../common/Alert';

const InvestorForm = ({handleSubmit}) => {
    return(
            <div className="page-signup page-create-account">
                <div className="form-normal form-create-account">
                    <h1>Create a free account</h1>
                    <Form
                        onSubmit={handleSubmit} 
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
                                    pristine={pristine} />
                            }
                        }
                    />                
                </div>
            </div>
    )
}

const CompanyForm = ({handleSubmit}) => {
    return (
        <div className="page-create-account investor-account investor-account-01">
            <div className="form-normal form-create-account">            
                <Form                    
                    onSubmit={handleSubmit}                         
                    render={
                        ({handleSubmit, ...rest}) => 
                            <BrokerForm 
                                onSubmit={handleSubmit} 
                                buttonLabel="Create Free ACcount"                                
                                {...rest}                                            
                            />
                            
                        }
                    />
                </div>
        </div>       

    )
}

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
            return (optedType == 1)? <Redirect to='/user/profile' /> : <Redirect to='/user/deals' />
        }

        if(!!!optedType) return <RegisterType onSelect={this.props.registerFor} />
        
        return (optedType == 1)?
            
                <InvestorForm handleSubmit={this.handleSubmit} /> :
                <CompanyForm handleSubmit={this.handleSubmit} />
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

