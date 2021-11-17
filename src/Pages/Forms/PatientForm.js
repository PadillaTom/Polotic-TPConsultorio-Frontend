import React, { useState, useEffect } from "react";

import { PersonFields } from "../Forms";
import { BtnSubmit } from "../../Components/Buttons";

const PatientForm = () => {
  const [security, setSecurity] = useState(false);
  const [personData, setPersonData] = useState({});
  const [postData, setPostData] = useState({});

  const collectPersonFields = (myData) => {
    setPersonData(myData);
  };

  useEffect(() => {
    const finalPost = { ...personData, security };
    setPostData(finalPost);
  }, [security, personData]);

  console.log(postData);
  return (
    <div className="form-create-container">
      <form className="form-create">
        <PersonFields collect={collectPersonFields}></PersonFields>
        <div className="fc-single-input fc-single-check">
          <label htmlFor="security">Has Assurance:</label>
          <input
            type="checkbox"
            name="security"
            id="security"
            value={security}
            onChange={(e) => {
              setSecurity(e.target.checked);
            }}
          />
        </div>
        <div className="btn-container">
          <BtnSubmit></BtnSubmit>
        </div>
      </form>
    </div>
  );
};

export default PatientForm;
