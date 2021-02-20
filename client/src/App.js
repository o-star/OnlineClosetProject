import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import { login } from './redux/action/ActionCreater'

import './assets/css/App.css'
import Homeview from "./Components/Homeview"
import Loginview from './Components/Loginview';

export default function App() {

  const islogin = useSelector(state => state.islogin)
  console.log(islogin)

  const dispatch = useDispatch();

  useEffect(() => {
    if(localStorage.getItem('logininfo'))
      dispatch(login());
  }, [])

  let redirectComp = (islogin === true) ? <Redirect path='*' to='/home' /> : <Redirect path='*' to='/login' />;

  return (
    <div>
      <Router>
        <Route path='/home' component={Homeview} />
        <Route path='/login' component={Loginview} />
        {redirectComp}
      </Router>
    </div>
  );
}