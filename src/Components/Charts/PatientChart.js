import React from "react";
import { useParams } from "react-router-dom";

const PatientChart = () => {
  const { id } = useParams();
  console.log("ID: ", id);

  return <div>Patient Chart</div>;
};

export default PatientChart;
