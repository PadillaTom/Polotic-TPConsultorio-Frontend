import React from "react";

import { PersonFields } from "../Forms";

const DentistForm = () => {
  return (
    <div className="form-create-container">
      <form className="form-create">
        <PersonFields></PersonFields>
        <div className="fc-single-input">
          <label htmlFor="speciality">Speciality</label>
          <input type="text" name="speciality" />
        </div>
      </form>
    </div>
  );
};

export default DentistForm;
