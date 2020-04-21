import {Switch, Route} from 'react-router-dom'
import Home from "./components/Home";
import React from 'react';
import NotFound from "./components/NotFound";

export default function Routes(){
  return(
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route>
        <NotFound/>
      </Route>
    </Switch>
  );
}