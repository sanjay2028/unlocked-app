import React,{ Component } from 'react';
import Navigation from '../navigation/Navigation';
import { BrandLogo, Search, LoginButton, MenuToggle, UserNotification, Avator } from '../common';
import ToggleSearch from '../common/ToggleSearch';
import {LogoUnlocked} from '../common/Graphics';

const UserHeader = () => {	
	return(
		<header className="page-header-loggedin clearfix">
			<div className="container">
				<div className="clearfix">
					<BrandLogo auth={true} />
					<div className="account">
					<div className="search">
						<div className="toggle-search">
							<span></span>
						</div>
					</div>
						<UserNotification />
						<Avator />
					</div>
				</div>
			</div>
		</header>
	)
}

class Header extends Component{    
	render(){		
		let {currentUser} = this.props;
		return (!!Object.keys(currentUser).length) ? <UserHeader /> : 
			<header className="page-header clearfix">
				<div className="md-header-desktop clearfix d-none d-lg-block">
					<div className="container">
						<BrandLogo />
						<div className="main-nav-desktop">
							<Navigation />
							<ToggleSearch />
							<div className="account"><LoginButton /></div>							
						</div>
					</div>
				</div>
				<div className="md-header-mobile d-block d-lg-none">
					<div className="top-navtigation">
						<div className="container">                        
							<div className="ctn-inner">
								<BrandLogo /> <MenuToggle />
							</div>
						</div>
					</div>
					<div className="main-nav-mobile">
						<div className="container">
							<Navigation />
							<div className="smd-search"><Search /></div>
						</div>
					</div>
				</div>
			</header>
		
	}
}

export default Header;
