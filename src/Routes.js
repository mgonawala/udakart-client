import {Switch, Route} from 'react-router-dom'
import Home from "./components/Home";
import React from 'react';
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import Signup from "./components/Signup";
import {useAppContext} from "./lib/contextLib";

export default function Routes(){
  const {isAuthenticated} = useAppContext();

  return(
    <Switch>
      <Route exact path="/">
        <Home isAuthenticated={isAuthenticated}/>
      </Route>
      <Route exact path="/login">
        <Login/>
      </Route>
      <Route exact path="/signup">
        <Signup/>
      </Route>
      <Route>
        <NotFound/>
      </Route>
    </Switch>
  );
}