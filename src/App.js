import React from 'react';
import { Router, Route, Link, Switch } from 'react-router-dom';
import Home from './components/pages/public/Home';
import Login from './components/pages/auth/Login';
import Register from './components/pages/auth/Register';
import ForgotPassword from './components/pages/auth/ForgotPassword';
import Dashboard from './components/pages/protected/Dashboard';
import Profile from './components/pages/protected/Profile';
import ErrorPage from './components/pages/ErrorPage';

const App = ({location}) => {
  return(        
    
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/auth/login" component={Login} />
        <Route exact path="/auth/register" component={Register} />
        <Route exact path="/auth/forgot-password" component={ForgotPassword} />
        <Route exact path="/user/dashboard" component={Dashboard} />
        <Route exact path="/user/profile" component={Profile} />        
        <Route path="*" component={ErrorPage} />        
      </Switch>
    
  );
}

export default App;
