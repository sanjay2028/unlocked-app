import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component{

    componentDidMount(){        
       
    }

    render(){
        return <div>Dashboard Page</div>
    }
} 

const mapStateToProps = ({auth})=> ({
    auth
});

export default connect(mapStateToProps, null)(Dashboard);