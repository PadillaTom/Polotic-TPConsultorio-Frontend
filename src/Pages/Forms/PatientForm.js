import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { PersonFields } from "../Forms";
import { BtnSubmit } from "../../Components/Buttons";

const PatientForm = () => {
  const history = useHistory();
  const [hasSecurity, setHasSecurity] = useState(false);
  const [personData, setPersonData] = useState({});
  const [postData, setPostData] = useState({});

  const collectPersonFields = (myData) => {
    setPersonData(myData);
  };

  useEffect(() => {
    const finalPost = { ...personData, hasSecurity };
    setPostData(finalPost);
  }, [hasSecurity, personData]);

  const handleSubmit = () => {
    axios
      .post("http://localhost:8080/patients/create", postData)
      .then((res) => {
        console.log(res.data, res.status); // *** BORRAR EL LOG ***
        if (res.status === 201) {
          // SET RECENTLY CREATED ON CONTEXT
          history.push("/patient-list");
          // SHOW MODAL DISPLAYING RECENT CREATION
          // CLOSE AUTO ON 5s OR CROSS.
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="form-create-container">
      <form
        className="form-create"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <PersonFields collect={collectPersonFields}></PersonFields>
        <div className="fc-single-input fc-single-check">
          <label htmlFor="security">Has Security:</label>
          <input
            type="checkbox"
            name="security"
            value={hasSecurity}
            onChange={(e) => {
              setHasSecurity(e.target.checked);
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
