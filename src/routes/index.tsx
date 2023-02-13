import React from "react";
import Home from "../pages/home";
import Services from "../pages/services";   
import Contact from "../pages/contact"; 
import Register from "../pages/register";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation
  } from "react-router-dom";

function Routes() {
    const location = useLocation()
    return (
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/servicos">
            <Services />
          </Route>
          <Route path="/contato">
            <Contact />
          </Route>
          <Route path="/primeiro-acesso">
            <Register />
          </Route>
        </Switch>
    );

}

export default Routes;