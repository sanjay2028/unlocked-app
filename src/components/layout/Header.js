import React,{ Component } from 'react';
import {connect} from 'react-redux';
import Navigation from '../navigation/Navigation';
import { BrandLogo, Search, LoginButton, MenuToggle } from '../common';
import ToggleSearch from '../common/ToggleSearch';

class Header extends Component{    
	render(){
		const { currentUser } = this.props;
		return (
			<header className="page-header clearfix">
				<div className="md-header-desktop clearfix d-none d-lg-block">
					<div className="container">
						<BrandLogo />
						<div className="main-nav-desktop">
							<Navigation />
							<ToggleSearch />
							{ !currentUser.id && <div className="account"><LoginButton /></div>}							
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
		);
	}
}
    
const mapStateToProps = ({auth}) => ({
	currentUser : auth.currentUser
})

export default connect(mapStateToProps, null)(Header);
