import React from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";

import Signup from "./components/signup/Signup";

import AnotherHome from "./components/Anotherhome/AnotherHome";
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup}/>
          <Route path="/home" component={AnotherHome}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
