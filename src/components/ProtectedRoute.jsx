import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const ProtectedRoutes = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem('auth_token') ? (
          <Component {...props} />
        ) : (
          <Redirect to={`/auth/login?redirect=${props.location.pathname}`} />
        )
      }
    />
  )
}

export default ProtectedRoutes
