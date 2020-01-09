import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <ul className="clearfix">
		    <li><Link to="/brokers">For Brokers</Link></li>
            <li><Link to="/investors">For Investors</Link></li>
            <li><Link to="/how-it-works">How it Works</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li className="login"><Link to="/auth/login">Login</Link></li>
        </ul>
    );
}

export default Navigation;