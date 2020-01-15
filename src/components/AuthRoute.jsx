import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import {connect} from 'react-redux';

class AuthRoute extends Component{ 
  render(){
    let { component: Component, currentUser,...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props =>
          localStorage.getItem('auth_token')? (
            <Redirect to={`/user/dashboard`} />		  
          ) : (
            <Component {...props} />
          )
        }
      />
    )
  }
}
const mapStateToProps = ({auth}) =>({
  currentUser: auth.currentUser
})

export default connect(mapStateToProps, null)(AuthRoute);
