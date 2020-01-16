import React, {Component} from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Home from './components/pages/public/Home';
import Login from './components/pages/auth/Login';
import Register from './components/pages/auth/Register';
import ForgotPassword from './components/pages/auth/ForgotPassword';
import Dashboard from './components/pages/protected/Dashboard';
import Profile from './components/pages/protected/Profile';
import Preferences from './components/pages/protected/Preferences';
import ErrorPage from './components/pages/ErrorPage';
import AuthRoute from './components/AuthRoute';
import ProtectedRoute from './components/ProtectedRoute';
import DealsPage from './components/pages/protected/Deals';

class App extends Component {

    render(){
      const {location} = this.props;                
      return(        
          <Switch>
            <Route exact path="/" component={Home} />
            <AuthRoute exact path="/auth/login" location={location} component={Login} />
            <Route exact path="/auth/logout" location={location} component={(props) => {          
              if(localStorage.getItem('auth_token')){
                localStorage.removeItem('auth_token');
                return <Redirect to='/' />
              } 
              return null;          
            }} />
            <AuthRoute exact path="/auth/register" location={location} component={Register} />
            <AuthRoute exact path="/auth/forgot-password" location={location} component={ForgotPassword} />
            <ProtectedRoute exact path="/user/dashboard" location={location} component={Dashboard} />
            <ProtectedRoute exact path="/user/deals" location={location} component={DealsPage} />            
            <ProtectedRoute exact path="/user/profile" location={location} component={Profile} />        
            <ProtectedRoute exact path="/user/preferences" location={location} component={Preferences} />        
            <Route path="*" component={ErrorPage} />        
          </Switch>
      );
    }
}

export default withRouter(App);
