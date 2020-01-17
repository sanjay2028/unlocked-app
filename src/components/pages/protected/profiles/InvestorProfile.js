import React, {Component} from 'react';
import InvestorProfileForm from '../../../forms/InvestorProfileForm';
import { connect } from 'react-redux';
import { Form } from 'react-final-form';
import {updateInvstorProfile, clearAlert} from '../../../../actions/profileActions';
import Alert from '../../../common/Alert';

class InvestorProfile extends Component{

    constructor(props){
        super(props);
        this.state = {
            profile : {
                first_name : null, 
                last_name : null,
                email : null,
                phone : null,
                address : null,                
            }
        }
    }

    componentDidMount(){                
        let { first_name,last_name, email, phone, address } = this.props.currentUser;        
        let profile  = {first_name, last_name,email,phone,address};        
        this.setState({
            profile
        });
    }

    handleSubmit = (values) => {                
        this.props.updateProfile(values);
    } 


    handleAlert = ()=> {
        this.props.clearAlert();
    }

    validateForm = (values) => {
        const errors = {};
        
        return errors;
    }

    render(){       
        const {profile} = this.props;
        console.log("Profile", this.state.profile);
        return(
            <div className="page-create-account investor-account investor-account-01">
                <div className="form-normal form-create-account">
                    { profile.message && <Alert type={profile.success ? 'success' : 'warning'} message={profile.message} action={this.handleAlert} />}                    
                    { profile.error && <Alert type='danger' message={"Failed: "+ profile.error} action={this.handleAlert} />}
                    <Form
                        initialValues={this.state.profile}
                        validate={this.validateForm}
                        onSubmit={this.handleSubmit}                         
                        render={
                            ({handleSubmit, ...rest}) => {
                                return <InvestorProfileForm 
                                            onSubmit={handleSubmit} 
                                            buttonLabel="Update Settings"
                                            {...rest}                                            
                                        />
                            }
                        }
                    />
                </div>
            </div>       
        );
    }
}

const mapStateToProps = ({auth, app}) => ({
    currentUser : auth.currentUser,
    profile: auth.profile
})

const mapDispatchToProps = (dispatch) => ({
    updateProfile: (payload) => updateInvstorProfile(dispatch,payload),
    clearAlert: () => dispatch(clearAlert)
})

export default connect(mapStateToProps, mapDispatchToProps)(InvestorProfile);