import React from 'react';
import {Link} from 'react-router-dom';
import {LogoFooter, IconLinkedin, IconTwitter, IconFB} from '../common/Graphics';


const FooterBrokerNav = ({logoutAction}) => {
    return (
        <ul className="clearfix">
			<li><Link to="/user/profile">Profile</Link></li>
			<li><Link to="/user/deals">Deals</Link></li>
			<li><Link onClick={() => logoutAction() }>Logout</Link></li>		    
        </ul>
    )
}

const FooterInvestorNav = ({logoutAction}) => {
    return (
        <ul className="clearfix">
			<li><Link to="/user/profile">Profile</Link></li>
			<li><Link to="/user/preferences">Preferences</Link></li>
			<li><Link to="/user/upgrade">Upgrade</Link></li>
		    <li><Link href="#" onClick={() => logoutAction()}>Logout</Link></li>		    
        </ul>
    )
}


const Footer = ({currentUser, roles, onLogout}) => {

    return !Object.keys(currentUser).length? null : (        
        <footer className="page-footer">
	        <div className="container">
                <div className="top-footer">
                    <div className="row">
				        <div className="col-md-3 col-lg-3">
					        <div className="logo-footer">
						        <a href="#"><img src={LogoFooter} alt="home.html" /></a>
					        </div>
				        </div>
				        <div className="col-md-5 col-lg-6">
					        <div className="menu">
						        {(roles.indexOf(3) !== -1)?  <FooterInvestorNav logoutAction={onLogout} /> : <FooterBrokerNav logoutAction={onLogout} /> }
					        </div>
				        </div>
				        <div className="col-md-4 col-lg-3">
					        <div className="social">
						        <div className="inner-social">
							        <div className="title">
								        <span>Follow Us:</span>
							        </div>
							        <div className="smd-social">
								        <ul>
									        <li><a href="#"><img src={IconFB} alt="Facebook" /></a></li>
								        	<li><a href="#"><img src={IconLinkedin} alt="LinkedIn" /></a></li>
									        <li><a href="#"><img src={IconTwitter} alt="Twitter" /></a></li>
								        </ul>
							        </div>
						        </div>
					        </div>
				        </div>
			        </div>
                </div>
                <div className="bottom-footer">
			        <div className="copyright">
				        <p>Copyright © 2019 Unlocked. All rights reserved.</p>
			        </div>
		        </div>
            </div>
        </footer>
        
    );
}

export default Footer;