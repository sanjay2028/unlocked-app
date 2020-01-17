import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import {connect} from 'react-redux';

class AuthRoute extends Component{ 
  render(){
    let { component: Component, currentUser,isLoading,roles, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props =>{
            
          if(isLoading === null || isLoading === true) return null;

            if(currentUser && currentUser.id !== undefined){
              let redirect = localStorage.getItem('redirect');
              
              if((roles.indexOf(3) !== -1)){
                  if(redirect){
                      localStorage.removeItem('redirect');
                      return <Redirect to={`/user/preferences`} />
                  } else {
                    return <Redirect to={`/user/profile`} />
                  }
              } else {
                return <Redirect to={`/user/dashboard`} />		                    
              }
            } else {
              return <Component {...props} />
            }
        }
          
        }
      />
    )
  }
}
const mapStateToProps = ({auth, app}) =>({
  currentUser: auth.currentUser,
  roles : auth.roles,
  isLoading: app.isLoading
})

export default connect(mapStateToProps, null)(AuthRoute);
