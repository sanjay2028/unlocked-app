import React from 'react';
import Logo from "../../assets/images/logo.png";
import { Link } from 'react-router-dom';

const BrandLogo =  () => <div className="logo"><Link to="/"><img src={Logo} alt="Home" /></Link></div>

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

export { BrandLogo, Search, LoginButton, MenuToggle }

