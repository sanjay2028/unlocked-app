import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const AuthRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem('auth_token') ? (
          <Redirect to={`/user/dashboard`} />		  
        ) : (
          <Component {...props} />
        )
      }
    />
  )
}

export default AuthRoute
