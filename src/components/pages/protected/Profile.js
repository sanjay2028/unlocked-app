import React, {Component} from 'react';
import {connect} from 'react-redux';
import UserProfile from './profiles/UserProfile';
import InvestorProfile from './profiles/InvestorProfile';

class Profile extends Component{    

    render(){
        const {roles} = this.props;
        return roles.indexOf(3) == -1? <UserProfile /> : <InvestorProfile />
    }
} 

const mapStateToProps = ({auth}) => ({
    currentUser : auth.currentUser,
    roles : auth.roles
})

export default connect(mapStateToProps, null)(Profile);