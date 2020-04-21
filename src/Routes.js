import {Switch, Route} from 'react-router-dom'
import Home from "./components/Home";
import React from 'react';

export default function Routes(){
  return(
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
    </Switch>
  );
}