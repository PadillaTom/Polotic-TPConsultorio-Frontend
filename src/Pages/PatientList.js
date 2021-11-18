import React, { useEffect } from "react";

import { PatientCard } from "../Components/Cards";
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
    <div className="page">
      <div className="page-title">
        <h2>Patients</h2>
        <p>Basic information about patients.</p>
      </div>
      <div className="p-separator"></div>
      <h4
        style={{ display: "grid", placeItems: "center", margin: "1.7rem 0rem" }}
      >
        TODO: Some Filters
      </h4>
      {basicPatients.map((singlePatient) => {
        const { id } = singlePatient;
        return <PatientCard key={id} {...singlePatient}></PatientCard>;
      })}
    </div>
  );
};

export default PatientList;
