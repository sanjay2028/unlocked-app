import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {hideUserMenu} from '../../actions/appActions';
import {UserIcon} from '../common/Graphics';
import {logoutUser} from '../../actions/authActions';

class UserMenu extends Component{
    render(){
        let {email, full_name} = this.props.currentUser;
        return(
            !this.props.userMenu ?  null : 
        <div className="md-nav-sidebar">
            <div className="ctn-inner">
                <div className="nav-title">
                    <h3>Profile</h3>
                    <span className="btn-close" onClick={() => this.props.hideUserMenu()}></span>
                </div>
                <div className="nav-content">
                    <div className="avatar">
                        <div className="picture"><img src={UserIcon} alt="" /></div>
                        <div className="upload-picture">
                            <div className="file-upload">
                                <label htmlFor="file-upload-01" className="btn-upload"></label>
                                <input type="file" className="input-file" id="file-upload-04" />
                            </div>
                        </div>
                    </div>
                    <div className="information">
                        <p>
                            <span className="name">{full_name}</span>
                            <span className="email">{email}</span>
                        </p>
                    </div>
                    <div className="menu">
                        <ul>
                            <li><Link to="/user/deals">All Deals</Link></li>
                            <li><a href="#">General Information</a></li>
                            <li><a href="#">Options</a></li>
                        </ul>
                    </div>
                </div>
                <div className="nav-bottom logout">
                    <Link onClick={() => this.props.logoutUser()}>Log Out</Link>
                </div>
            </div>
        </div>
        );
    }
} 

const mapStateToProps = ({auth, app}) => ({
    currentUser : auth.currentUser,
    userMenu: app.userMenu
});

const mapDispatchToProps = (dispatch) => ({
    hideUserMenu : () => dispatch(hideUserMenu), 
    logoutUser   : () => dispatch(logoutUser),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);