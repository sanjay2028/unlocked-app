import React,{Component} from 'react'
import { Route, Redirect } from 'react-router-dom'
import {connect} from 'react-redux';

class ProtectedRoutes extends Component{ 
  render(){
    let { component: Component, currentUser, isLoading, ...rest } = this.props;    
    return (
      <Route
        {...rest}
        render={props =>{   
          console.log(props)         ;
            if(isLoading === null) return null;                        
            return (currentUser && currentUser.id !== undefined)? (
              <Component {...props} />
            ) : (
              <Redirect to={`/auth/login?redirect=${props.location.pathname}`} />
            )
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

export default connect(mapStateToProps, null)(ProtectedRoutes);
