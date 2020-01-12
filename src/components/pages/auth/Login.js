import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { clearWarning,clearNotification,loginUser } from '../../../actions/authActions';
import Alert from '../../common/Alert';
import LoginForm from '../../forms/LoginForm';
import { Form } from 'react-final-form';

class Login extends Component{

    clearNotification = () => {
        this.props.clearNotification()
    }

    handleSubmit = (values) => {
        this.props.loginUser(values);
    }   

    render(){
        const {notification, id, authorized, loginError} = this.props.auth;
        if(authorized) return <Redirect to='/user/dashboard' />
        return (
            <div className="page-login page-signup">            
                <div className="form-normal form-login">
                    <h1>Login</h1>                    
                    {loginError && <div style={{color:"#FF0000"}}>{`Error: ${loginError}`}</div>}
                    {notification && <Alert type="success" message={notification} action={this.clearNotification} />}
                    <Form
                        onSubmit={this.handleSubmit}                         
                        render={
                                ({handleSubmit, valid, invalid,form, pristine, values,initialValues,dirty}) => {                                                                
                                    return <LoginForm 
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
        )
    }
}

const mapStateToProps = (state) => ({
    auth : state.auth
});

const mapDispatchToProps = (dispatch) => ({
    clearNotification : dispatch(clearNotification),
    clearWarning : dispatch(clearWarning),
    loginUser : (payload) => loginUser(dispatch, payload)
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);