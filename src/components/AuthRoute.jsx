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
            
          if(isLoading) return null;

            if(currentUser && currentUser.id !== undefined){
              let redirect = localStorage.getItem('redirect');
              if(redirect){
                  if((roles.indexOf(3) !== -1)){
                    localStorage.removeItem('redirect');
                    return <Redirect to={`/user/preferences`} />
                  } else {
                    return <Redirect to={`/user/deals`} />		                    
                  }
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
