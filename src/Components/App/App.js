import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Navbar, Sidebar } from "../Navigation";

import {
  Homepage,
  PatientCreate,
  PatientList,
  PatientSingleChart,
  DentistCreate,
  DentistList,
  DentistSingleChart,
} from "../../Pages";

import {
  PatientsPerDay,
  DentistRDV,
  InsuranceStats,
} from "../../Pages/Statistics";

import { useEventsContext } from "../../Context/EventsContext";

function App() {
  const { isSidebarOpen, closeSidebar } = useEventsContext();
  return (
    <Router>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      {isSidebarOpen && (
        <div className="layout-modal" onClick={closeSidebar}></div>
      )}
      <div className="main-layout-mobile">
        <Switch>
          <Route path="/" exact>
            <Homepage></Homepage>
          </Route>
          <Route path="/patient-create">
            <PatientCreate></PatientCreate>
          </Route>
          <Route path="/patient-list">
            <PatientList></PatientList>
          </Route>
          <Route path="/patient-chart/:id">
            <PatientSingleChart></PatientSingleChart>
          </Route>
          <Route path="/dentist-create">
            <DentistCreate></DentistCreate>
          </Route>
          <Route path="/dentist-list">
            <DentistList></DentistList>
          </Route>
          <Route path="/dentist-chart/:id">
            <DentistSingleChart></DentistSingleChart>
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
