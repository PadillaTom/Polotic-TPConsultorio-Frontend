import React from "react";

import { PersonFields } from "../Forms";
import { BtnSubmit } from "../../Components/Buttons";

const DentistForm = () => {
  return (
    <div className="form-create-container">
      <form className="form-create">
        <PersonFields></PersonFields>
        <div className="fc-single-input">
          <label htmlFor="speciality">Speciality</label>
          <input type="text" name="speciality" />
        </div>
        <div className="btn-container">
          <BtnSubmit></BtnSubmit>
        </div>
      </form>
    </div>
  );
};

export default DentistForm;
