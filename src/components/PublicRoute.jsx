import React,{Component} from 'react'
import { Route, Redirect } from 'react-router-dom'
import {connect} from 'react-redux';

class PublicRoute extends Component{
  render(){
    let { component: Component, currentUser, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props =>
          !currentUser.id ? (
            <Component {...props} />
          ) : (
            <Redirect to={'/'} />
          )
        }
      />
    )
  }
}

const mapStateToProps = ({auth}) =>({
  currentUser: auth.currentUser
})

export default connect(mapStateToProps, null)(PublicRoute);

