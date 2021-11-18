import React from "react";

import { PatientForm } from "../Components/Forms";

const PatientCreate = () => {
  return (
    <div className="page">
      <div className="page-title">
        <h2>Create New Patient</h2>
        <p>All fields are required.</p>
      </div>
      <div className="p-separator"></div>
      <PatientForm></PatientForm>
    </div>
  );
};

export default PatientCreate;
