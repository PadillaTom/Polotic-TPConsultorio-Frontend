import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Navbar } from "../Navigation";

import { Homepage } from "../../Pages";
import { DentistForm, PatientForm } from "../../Pages/Forms";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
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
    </Router>
  );
}

export default App;
