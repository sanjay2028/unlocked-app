import React from 'react';
import Navigation from '../navigation/Navigation';
import { BrandLogo, Search, LoginButton, MenuToggle } from '../common';
import ToggleSearch from '../common/ToggleSearch';

const Header = () => {    
    return (
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
    );
}


export default Header;
