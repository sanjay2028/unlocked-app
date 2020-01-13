import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { logoutUser } from '../../actions/authActions';

const PublicNav = () => 
    <ul className="clearfix">
        <li><Link to="/brokers">For Brokers</Link></li>
        <li><Link to="/investors">For Investors</Link></li>
        <li><Link to="/how-it-works">How it Works</Link></li>
        <li><Link to="/contact">Contact</Link></li>                
        <li className="login"><Link to="/auth/login">Login</Link></li>                    
    </ul>

const ProtectedNav = ({onLogout}) => 
    <ul className="clearfix">                
        <li><Link to="/contact">Contact</Link></li>                
        <li><Link to="/user/profile">Profile</Link></li>
        <li className="login"><Link to="/auth/logout" onClick={onLogout}>Logout</Link></li>                    
    </ul>


class Navigation extends Component{

    onLogout = ()=>{
        this.props.logoutUser();
    }

    render(){
        const { currentUser } = this.props;
        return currentUser.id? <ProtectedNav onLogout={this.onLogout} /> : <PublicNav />
    }    
}

const mapStateToProps = ({auth}) => ({currentUser : auth.currentUser})
const mapDispatchToProps = (dispatch) => ({
    logoutUser : () => dispatch(logoutUser)
})

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);