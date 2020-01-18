import React from 'react';
import UserMenu from '../common/UserMenu';

const Content = ({children}) => {
    return (
        <main className="page-main page-signup page-choose-account">
            <div className="container">
                {children}
            </div>            
            <UserMenu />
        </main>
    );
}

export default Content;