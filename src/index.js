import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Login from './containers/Auth/login';
import Register from './containers/Auth/register';
import Activate from './containers/Auth/activation';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/login' exact render={props => <Login {...props} />} />
      <Route path='/register' exact render={props => <Register {...props} />} />
      <Route path='/users/activate/:token' exact render={props => <Activate {...props} />} />
      <Redirect to='/' />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
