import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Navbar, Sidebar } from "../Navigation";

import { Homepage } from "../../Pages";
import { DentistForm, PatientForm } from "../../Pages/Forms";
import { DentistTable, PatientTable } from "../../Pages/Tables";
import { DentistChart, PatientChart } from "../../Pages/Charts";
import {
  PatientsPerDay,
  DentistRDV,
  InsuranceStats,
} from "../../Pages/Statistics";

import { useEventsContext } from "../../Context/EventsContext";

function App() {
  const { isSidebarOpen } = useEventsContext();
  return (
    <Router>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <div
        className={`${
          isSidebarOpen
            ? "main-layout-mobile layout-modal"
            : "main-layout-mobile"
        }`}
      >
        <Switch>
          <Route path="/" exact>
            <Homepage></Homepage>
          </Route>
          <Route path="/patient-create">
            <PatientForm></PatientForm>
          </Route>
          <Route path="/patient-list">
            <PatientTable></PatientTable>
          </Route>
          <Route path="/patient-chart">
            <PatientChart></PatientChart>
          </Route>
          <Route path="/dentist-create">
            <DentistForm></DentistForm>
          </Route>
          <Route path="/dentist-list">
            <DentistTable></DentistTable>
          </Route>
          <Route path="/dentist-chart">
            <DentistChart></DentistChart>
          </Route>
          <Route path="/data-patients-day">
            <PatientsPerDay></PatientsPerDay>
          </Route>
          <Route path="/data-dentists-rdv">
            <DentistRDV></DentistRDV>
          </Route>
          <Route path="/data-patients-insurance">
            <InsuranceStats></InsuranceStats>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
