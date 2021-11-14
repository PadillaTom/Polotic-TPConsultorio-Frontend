import React from "react";

import { PatientForm } from "./Forms";

const PatientCreate = () => {
  return (
    <div className="create-page">
      <div className="create-page-title">
        <h2>Create New Patient</h2>
        <p>All fields are required.</p>
      </div>
      <div className="cp-separator"></div>
      <PatientForm></PatientForm>
    </div>
  );
};

export default PatientCreate;
