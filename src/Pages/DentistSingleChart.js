import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Loading, Error } from "../Components";

import { useGetDataContext } from "../Context/GetDataContext";

const DentistSingleChart = () => {
  const { id } = useParams();
  const {
    getDentistDetails,
    single_dentist: dentist,
    single_dentist_loading: isLoading,
    single_dentist_error: error,
  } = useGetDataContext();

  useEffect(() => {
    getDentistDetails(id);
  }, [id]);

  console.log(dentist);

  if (isLoading) {
    return <Loading></Loading>;
  }
  if (error) {
    return <Error></Error>;
  }
  return (
    <div>
      Dentist Details
      <h2>{dentist.firstName}</h2>
      <h2>{dentist.dni}</h2>
    </div>
  );
};

export default DentistSingleChart;
