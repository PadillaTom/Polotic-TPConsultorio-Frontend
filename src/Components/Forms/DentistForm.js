import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import { PersonFields } from "../Forms";
import { BtnSubmit } from "../../Components/Buttons";

import { postDentist } from "../../Utils/constants";

const DentistForm = () => {
  const history = useHistory();
  const [speciality, setSpeciality] = useState("");
  const [personData, setPersonData] = useState({});
  const [postData, setPostData] = useState({});

  const collectPersonFields = (myData) => {
    setPersonData(myData);
  };

  useEffect(() => {
    const finalPost = { ...personData, speciality };
    setPostData(finalPost);
  }, [speciality, personData]);

  const handleSubmit = () => {
    axios
      .post(postDentist, postData)
      .then((res) => {
        // console.log(res.data, res.status); // *** CONSOLE LOG ***
        if (res.status === 201) {
          // SET RECENTLY CREATED ON CONTEXT
          history.push("/dentist-list");
          // SHOW MODAL DISPLAYING RECENT CREATION
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
        <div className="fc-single-input">
          <label htmlFor="speciality">Speciality</label>
          <input
            type="text"
            name="speciality"
            value={speciality}
            onChange={(e) => {
              setSpeciality(e.target.value);
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

export default DentistForm;
