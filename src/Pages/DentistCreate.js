import React from "react";
import { DentistForm } from "../Components/Forms";

const DentistCreate = () => {
  return (
    <div className="page">
      <div className="page-title">
        <h2>Create New Dentist</h2>
        <p>All fields are required.</p>
      </div>
      <div className="p-separator"></div>
      <DentistForm></DentistForm>
    </div>
  );
};

export default DentistCreate;
