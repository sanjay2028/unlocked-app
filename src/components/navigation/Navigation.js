import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

class Navigation extends Component{
    onLogout = () => {
        
        localStorage.clear();
    }
    render(){
        return (
            <ul className="clearfix">
                <li><Link to="/brokers">For Brokers</Link></li>
                <li><Link to="/investors">For Investors</Link></li>
                <li><Link to="/how-it-works">How it Works</Link></li>
                <li><Link to="/contact">Contact</Link></li>                
                <li className="login">
                { localStorage.getItem('auth_token')?
                    <Link to="/auth/logout">Log Out</Link> : 
                    <Link to="/auth/login">Login</Link>
                }
                </li>
                    
            </ul>
        );
    }    
}

const mapStateToProps = ({auth}) => ({auth})

export default connect(mapStateToProps, null)(Navigation);