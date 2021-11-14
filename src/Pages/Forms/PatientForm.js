import React from "react";

import { PersonFields } from "../Forms";
import { BtnSubmit } from "../../Components/Buttons";

const PatientForm = () => {
  return (
    <div className="form-create-container">
      <form className="form-create">
        <PersonFields></PersonFields>
        <div className="fc-single-input fc-single-check">
          <label htmlFor="security">Has Assurance:</label>
          <input type="checkbox" name="security" />
        </div>
        <div className="btn-container">
          <BtnSubmit></BtnSubmit>
        </div>
      </form>
    </div>
  );
};

export default PatientForm;
