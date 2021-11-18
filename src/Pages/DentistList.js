import React, { useEffect } from "react";

import { DentistCard } from "../Components/Cards";
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
    <div className="page">
      <div className="page-title">
        <h2>Dentists</h2>
        <p>Basic information about dentists.</p>
      </div>
      <div className="p-separator"></div>
      <h4
        style={{ display: "grid", placeItems: "center", margin: "1.7rem 0rem" }}
      >
        TODO: Some Filters
      </h4>
      {basicDentists.map((singleDentist) => {
        const { id } = singleDentist;
        return <DentistCard key={id} {...singleDentist}></DentistCard>;
      })}
    </div>
  );
};

export default DentistList;
