import React from 'react';
import {Provider} from 'react-redux'
import { createStore , applyMiddleware , combineReducers } from 'redux'
import thunk from 'redux-thunk'
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Login from './containers/Auth/login';
import Register from './containers/Auth/register';
import Activate from './containers/Auth/activation';
import ForgetPassword from './containers/Auth/forget';
import ResetPassword from './containers/Auth/reset';
import ListOfHackathon from './containers/Hackathon/listofHakathon';
import SelectHackathon from './containers/Hackathon/SelectedDatapara';
import Hackathon from './containers/Hackathon/hackathon';
import fetchDataReducer from './store/reducers/fetchData';
import Profile from './components/Dashboard/Profile';
import Home from './components/Home/home';
import SelectedHackathon from './components/myHackathon/selectedHackathon'
import SelectedList from './components/Home/llistOfHakathon/selectedList';
import {isAuth} from './helper/auth'
const rootReducer = combineReducers({
  fetchData:fetchDataReducer,
})

const store = createStore(rootReducer,applyMiddleware(thunk))


ReactDOM.render(
  <Provider store={store} >
    <BrowserRouter>
    {console.log(isAuth())}
    <Switch>
    {localStorage.getItem('user')===null ? console.log("not Auth") : console.log("Auth Hello")}
      <Route path='/' exact render={props => <Home {...props} />} />
      <Route path='/hackathon/:id' exact render={props => <SelectedList {...props} />} />
      <Route path='/login' exact render={props => <Login {...props} />} />
      <Route path='/myprofile' exact render={props => <Profile {...props} />} />
      <Route path='/createHackathon' exact render={props => <ListOfHackathon {...props} />} />
      <Route path='/createHackathon/myHackathon/:id' exact render={props => <SelectHackathon {...props} />} />
      <Route path='/register' exact render={props => <Register {...props} />} />
      <Route path='/users/password/forget' exact render={props => <ForgetPassword {...props} />} />
      <Route path='/users/password/reset/:token' exact render={props => <ResetPassword {...props} />} />
      <Route path='/users/activate/:token' exact render={props => <Activate {...props} />} />
      <Route path='/user/myhackathon' exact render={props => <Hackathon {...props} />} />
      <Route path='/user/myhackathon/:id' exact render={props => <SelectedHackathon {...props} />} />
      <Redirect to='/login' />
    </Switch>
  </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);
