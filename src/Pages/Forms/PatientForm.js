import React from "react";
import { PersonFields } from "../Forms";

const PatientForm = () => {
  return (
    <div className="form-create-container">
      <form className="form-create">
        <PersonFields></PersonFields>
        <div className="fc-single-input">
          <label htmlFor="security">Has Assurance:</label>
          <input type="checkbox" name="security" />
        </div>
      </form>
    </div>
  );
};

export default PatientForm;
