import React, {Component} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './components/pages/public/Home';
import Login from './components/pages/auth/Login';
import Register from './components/pages/auth/Register';
import ForgotPassword from './components/pages/auth/ForgotPassword';
import Dashboard from './components/pages/protected/Dashboard';
import Profile from './components/pages/protected/Profile';
import ErrorPage from './components/pages/ErrorPage';
import AuthRoute from './components/AuthRoute';
import ProtectedRoute from './components/ProtectedRoute';
import {logoutUser, getCurrentUser} from './actions/authActions';

class App extends Component {

    componentDidMount(){
      this.props.getCurrentUser();
    }

    render(){
      const {location} = this.props;      
      return(        
          <Switch>
            <Route exact path="/" component={Home} />
            <AuthRoute exact path="/auth/login" component={Login} />
            <Route exact path="/auth/logout" component={(props) => {          
              if(localStorage.getItem('auth_token')){
                localStorage.removeItem('auth_token');
                return <Redirect to='/' />
              } 
              return null;          
            }} />
            <AuthRoute exact path="/auth/register" component={Register} />
            <AuthRoute exact path="/auth/forgot-password" component={ForgotPassword} />
            <ProtectedRoute exact path="/user/dashboard" component={Dashboard} />
            <ProtectedRoute exact path="/user/profile" component={Profile} />        
            <Route path="*" component={ErrorPage} />        
          </Switch>
      );
    }
}

const mapStateToProps = ({auth})=> ({
    auth
})

const mapDispatchToProps = (dispatch) => ({
    logoutUser      : () => dispatch(logoutUser),
    getCurrentUser  : () => getCurrentUser(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
