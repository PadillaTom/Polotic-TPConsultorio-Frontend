import React from "react";
import { DentistForm } from "./Forms";

const DentistCreate = () => {
  return (
    <div className="create-page">
      <div className="create-page-title">
        <h2>Create New Dentist</h2>
        <p>All fields are required.</p>
      </div>
      <div className="cp-separator"></div>
      <DentistForm></DentistForm>
    </div>
  );
};

export default DentistCreate;
