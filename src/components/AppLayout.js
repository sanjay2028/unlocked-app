import React, { Component, Fragment } from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Content from './layout/Content';
import App from './../App';
import {logoutUser, getCurrentUser} from '../actions/authActions';
import Loader from './common/Loader';


import { connect } from 'react-redux';

class AppLayout extends Component{

    componentDidMount(){
        this.props.getCurrentUser();
    }

    render(){        
        const { currentUser, roles } = this.props.auth;        
        const { isLoading } = this.props.app;        
        const { logoutUser } = this.props;        
        return  isLoading==null || isLoading == true ? 
                <Loader /> : 
                <Fragment>
                    <Header currentUser={currentUser} />
                    <Content><App /></Content>
                    <Footer currentUser={currentUser} roles={roles} onLogout={logoutUser} />
                </Fragment>
        
    }
}

const mapStateToProps = ({auth, app}) => ({auth, app})


const mapDispatchToProps = (dispatch) => ({
    logoutUser      : () => dispatch(logoutUser),
    getCurrentUser  : () => getCurrentUser(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AppLayout);