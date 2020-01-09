import React, { Component, Fragment } from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Content from './layout/Content';
import App from './../App';

class AppLayout extends Component{

    render(){        
        return(  
            <Fragment>
                <Header />
                <Content><App /></Content>
                <Footer/>
            </Fragment>
        );
    }
}

export default AppLayout;