import React from "react";
import { Switch, Route, Redirect } from "react-router-dom"
import Login from "./components/login/Login";
import Registration from "./components/registration/Registration";
import Reception from "./components/reception/Reception"

import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/registration' component={Registration} />
        <Route path='/reception'
          render={() =>
            localStorage.getItem("token")
              ? (<Reception />)
              : (<Redirect to='/login' />)} />
        <Redirect from="/" to="/login" />
      </Switch>
    </div>
  );
}

export default App;
