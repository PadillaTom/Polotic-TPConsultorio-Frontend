import React from "react";
import { useParams } from "react-router-dom";

const DentistChart = () => {
  const { id } = useParams();
  console.log("ID: ", id);

  return <div>Dentist Chart</div>;
};

export default DentistChart;
