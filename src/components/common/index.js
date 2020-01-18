import React from 'react';
import Logo from "../../assets/images/logo.png";
import {LogoUnlocked, UserIcon} from '../common/Graphics';
import { Link } from 'react-router-dom';
import {showUserMenu} from '../../actions/appActions';

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



const Avator = ({url=null, name, showUserMenu}) => 
    <div className="avatar" onClick={() => showUserMenu()}>
        <Link>
            <img src={url ? url : UserIcon} alt={name} />
        </Link>
    </div>

export { BrandLogo, Search, LoginButton, MenuToggle, UserNotification, Avator }