import React, { useEffect } from "react";

import { DentistTable } from "./Tables";
import { Loading, Error } from "../Components";

import { useGetDataContext } from "../Context/GetDataContext";
import { getBasicDentistsUrl } from "../Utils/constants";

const DentistList = () => {
  const {
    getBasicDentists,
    dentists_loading: isLoading,
    dentists_error: error,
    basicDentists,
  } = useGetDataContext();

  useEffect(() => {
    getBasicDentists(getBasicDentistsUrl);
  }, []);

  if (isLoading) {
    <Loading></Loading>;
  }
  if (error) {
    <Error></Error>;
  }
  return (
    <div>
      Dentist List PAGE:
      {basicDentists.map((singlePatient, index) => {
        const { firstName } = singlePatient;
        return (
          <div key={index}>
            <h2>{firstName}</h2>
          </div>
        );
      })}
      <DentistTable></DentistTable>
    </div>
  );
};

export default DentistList;
