import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Navbar, Sidebar } from "../Navigation";

import { Homepage } from "../../Pages";
import { DentistForm, PatientForm } from "../../Pages/Forms";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <div className="main-layout-mobile">
        <Switch>
          <Route path="/" exact>
            <Homepage></Homepage>
          </Route>
          <Route path="/dentists">
            <DentistForm></DentistForm>
          </Route>
          <Route path="/patients">
            <PatientForm></PatientForm>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
