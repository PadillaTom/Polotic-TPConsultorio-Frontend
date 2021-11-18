import React, { useEffect } from "react";

import { PatientTable } from "./Tables";
import { Loading, Error } from "../Components";

import { useGetDataContext } from "../Context/GetDataContext";
import { getBasicPatientsUrl } from "../Utils/constants";

const PatientList = () => {
  const {
    getBasicPatients,
    patients_loading: isLoading,
    patients_error: error,
    basicPatients,
  } = useGetDataContext();

  useEffect(() => {
    getBasicPatients(getBasicPatientsUrl);
  }, []);

  if (isLoading) {
    <Loading></Loading>;
  }
  if (error) {
    <Error></Error>;
  }
  return (
    <div>
      Patients List Page:
      {basicPatients.map((singlePatient, index) => {
        const { firstName } = singlePatient;
        return (
          <div key={index}>
            <h2>{firstName}</h2>
          </div>
        );
      })}
      <PatientTable></PatientTable>
    </div>
  );
};

export default PatientList;
