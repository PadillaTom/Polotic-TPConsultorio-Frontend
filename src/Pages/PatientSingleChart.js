import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loading, Error } from "../Components";

import { useGetDataContext } from "../Context/GetDataContext";

const PatientSingleChart = () => {
  const { id } = useParams();
  const {
    getPatientDetails,
    single_patient: patient,
    single_patient_loading: isLoading,
    single_patient_error: error,
  } = useGetDataContext();

  useEffect(() => {
    getPatientDetails(id);
  }, [id]);

  console.log(patient);
  if (isLoading) {
    return <Loading></Loading>;
  }
  if (error) {
    return <Error></Error>;
  }
  return (
    <div>
      <h2>Details</h2>
      <h2>{patient.firstName}</h2>
      <h2>{patient.dni}</h2>
    </div>
  );
};

export default PatientSingleChart;
