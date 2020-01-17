import React from 'react';
import Logo from "../../assets/images/logo.png";
import {LogoUnlocked, DefaultAvator} from '../common/Graphics';
import { Link } from 'react-router-dom';

const BrandLogo =  ({auth=true}) => <div className="logo"><Link to={auth? '/user/profile' : '/'}><img src={auth? LogoUnlocked : Logo} alt="Home" /></Link></div>

const Search  = () => {
    return (
        <form>
		    <div className="field-input">
			    <input type="text" className="form-control" />
				<button className="btn-search"></button>
			</div>
        </form>
    );
}

const UserNotification = () => 
                <div className="notification">
					<div className="toggle-notification">
						<span></span>
					</div>
				</div>

const LoginButton = () => {
    return (<Link to="/auth/login" className="btn btn-outline-primary">Login</Link>);
}

const MenuToggle = () => {
    return (
        <div className="toggle-menu">
			<div className="icon"><span></span><span></span><span></span></div>
	    </div>			  		
    );
}



const Avator = ({avatorUrl=DefaultAvator}) => 
    <div className="avatar">
        <Link to="/user/profile">
            <img src={avatorUrl} alt="" />
        </Link>
    </div>

export { BrandLogo, Search, LoginButton, MenuToggle, UserNotification, Avator }