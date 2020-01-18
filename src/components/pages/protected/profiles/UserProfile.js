import React, {Component} from 'react';
import ProfileForm from '../../../forms/ProfileForm';
import { connect } from 'react-redux';
import { Form } from 'react-final-form';
import {updateProfile, clearAlert} from '../../../../actions/profileActions';
import Alert from '../../../common/Alert';

class UserProfile extends Component{

    constructor(props){
        super(props);
        this.state = {
            profile : {
                first_name : null, 
                last_name : null,
                email : null,
                phone : null,
                company_name : null,
                description : null,
                logo : null
            }, uploaded : {
                newFile : null
            },logo_url: null
        }
    }

    componentDidMount(){        
        let { currentUser } = this.props;
        console.log("Current User", currentUser);
        let profile  = {
                first_name : currentUser.first_name,
                last_name : currentUser.last_name,
                email : currentUser.email,
                company_name : currentUser.company_name,
                phone : currentUser.phone,
                description : currentUser.description
        };
        
        
        this.setState({
            profile, logo_url : currentUser.logo_url
        });
    }

    handleSubmit = (values) => {   
        let {newFile} = this.state.uploaded;             
        if(newFile !== null){            
            values.logo = newFile            
        } else {
            values.logo = null
        }        
        this.props.updateProfile(values);
    } 


    handleAlert = ()=> {
        this.props.clearAlert();
    }

    onLogoUpload = (event)=>{        
        return this.setState({
            uploaded : {newFile : event.target.files[0]}
        });
    }

    render(){       
        const {profile} = this.props;
        return(
            <div className="page-create-account investor-account investor-account-01">
                <div className="form-normal form-create-account">
                    { profile.message && <Alert type={profile.success ? 'success' : 'warning'} message={profile.message} action={this.handleAlert} />}                    
                    { profile.error && <Alert type='danger' message={"Failed: "+ profile.error} action={this.handleAlert} />}
                    <Form
                        initialValues={this.state.profile}
                        onSubmit={this.handleSubmit}                         
                        render={
                            ({handleSubmit, ...rest}) => {
                                return <ProfileForm
                                            logoUrl={this.props.logo_url}
                                            onLogoUpload={this.onLogoUpload} 
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
    logo_url : auth.currentUser.logo_url,
    profile: auth.profile
})

const mapDispatchToProps = (dispatch) => ({
    updateProfile: (payload) => updateProfile(dispatch,payload),
    clearAlert: () => dispatch(clearAlert)
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);