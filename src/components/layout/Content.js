import React from 'react';

const Content = ({children}) => {
    return (
        <main className="page-main page-signup page-choose-account">
            <div className="container">
                {children}
            </div>            
        </main>
    );
}

export default Content;