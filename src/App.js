import {Route, Switch} from "react-router-dom";
import React, {useState} from "react";

import  Home from "./Components/Home";
import Signup from "./Components/Signup";
import Error from "./Components/Error";
import Timeline from './Components/Timeline';
import Profile from './Components/Profile';
import Explore from './Components/Explore';
import Documentation from './Components/Documentation';

function App(props) {
  return (
    <div className="App">
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/Signup' component={Signup} />
      <Route path='/Timeline' component={Timeline} />
      <Route path='/Profile' component={Profile} />
      <Route path='/Explore' component={Explore} />
      <Route path='/Documentation' component={Documentation} />
      <Route component={Error} />;
    </Switch>
  </div>
  );
}

export default App;
