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
		const { currentUser } = this.props;
		return currentUser? <UserHeader /> : 
			<header classNameName="page-header clearfix">
				<div classNameName="md-header-desktop clearfix d-none d-lg-block">
					<div classNameName="container">
						<BrandLogo />
						<div classNameName="main-nav-desktop">
							<Navigation />
							<ToggleSearch />
							<div classNameName="account"><LoginButton /></div>							
						</div>
					</div>
				</div>
				<div classNameName="md-header-mobile d-block d-lg-none">
					<div classNameName="top-navtigation">
						<div classNameName="container">                        
							<div classNameName="ctn-inner">
								<BrandLogo /> <MenuToggle />
							</div>
						</div>
					</div>
					<div classNameName="main-nav-mobile">
						<div classNameName="container">
							<Navigation />
							<div classNameName="smd-search"><Search /></div>
						</div>
					</div>
				</div>
			</header>
		
	}
}

export default Header;
