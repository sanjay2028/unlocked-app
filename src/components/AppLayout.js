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
        const { currentUser } = this.props.auth;        
        const { isLoading } = this.props.app;        
        return  isLoading ? 
                <Loader /> : 
                <Fragment>
                    <Header currentUser={currentUser} />
                    <Content><App /></Content>
                    <Footer/>
                </Fragment>
        
    }
}

const mapStateToProps = ({auth, app}) => ({auth, app})


const mapDispatchToProps = (dispatch) => ({
    logoutUser      : () => dispatch(logoutUser),
    getCurrentUser  : () => getCurrentUser(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AppLayout);