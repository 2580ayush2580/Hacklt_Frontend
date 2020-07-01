import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Login from './containers/Auth/login';
import Register from './containers/Auth/register';
import Activate from './containers/Auth/activation';
import ForgetPassword from './containers/Auth/forget';
import ResetPassword from './containers/Auth/reset';
import HackathonForm from './containers/Hackathon/form';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/login' exact render={props => <Login {...props} />} />
      <Route path='/hackathonLists' exact render={props => <HackathonForm {...props} />} />
      <Route path='/register' exact render={props => <Register {...props} />} />
      <Route path='/users/password/forget' exact render={props => <ForgetPassword {...props} />} />
      <Route path='/users/password/reset/:token' exact render={props => <ResetPassword {...props} />} />
      <Route path='/users/activate/:token' exact render={props => <Activate {...props} />} />
      <Redirect to='/' />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
