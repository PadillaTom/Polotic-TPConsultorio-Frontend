import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { FcOk } from "react-icons/fc";
import { FaTimes } from "react-icons/fa";

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

  const {
    id: patient_id,
    dni,
    firstName,
    lastName,
    birthDate,
    address,
    phoneNumber,
    email,
    hasSecurity,
    tutors,
    appointments,
  } = patient;

  useEffect(() => {
    getPatientDetails(id);
  }, [id]);

  if (isLoading) {
    return <Loading></Loading>;
  }
  if (error) {
    return <Error></Error>;
  }
  return (
    <div className="page">
      <div className="page-title">
        <h2>
          {firstName} {lastName}
        </h2>
        <p>Edit patient's personal information and create Appointments.</p>
      </div>
      <div className="p-separator"></div>

      <div className="chart-container">
        <div className="chart-center">
          {/* Personal Infomartion */}
          <div className="chart-person-container">
            <h1 className="chart-subtitle">Personal Information</h1>
            <div className="chart-row">
              <h2>Name</h2>
              <p>{firstName}</p>
            </div>
            <div className="chart-row">
              <h2>Last Name</h2>
              <p>{lastName}</p>
            </div>
            <div className="chart-row">
              <h2>ID</h2>
              <p>{dni}</p>
            </div>
            <div className="chart-row">
              <h2>Birth Date</h2>
              <p>{birthDate}</p>
            </div>
            <div className="chart-row">
              <h2>Address</h2>
              <p>{address}</p>
            </div>
            <div className="chart-row">
              <h2>Phone</h2>
              <p>{phoneNumber}</p>
            </div>
            <div className="chart-row">
              <h2>Email</h2>
              <p>{email}</p>
            </div>
            <div className="chart-row">
              <h2>Has Security</h2>
              <p>
                {hasSecurity ? (
                  <FcOk className="security-true"></FcOk>
                ) : (
                  <FaTimes className="security-false"></FaTimes>
                )}
              </p>
            </div>
          </div>
          <div className="chart-division"></div>
          {/* Responsabes Infomartion */}
          <div className="chart-responsable-container">
            <h1 className="chart-subtitle">Responsables</h1>
            {tutors}
          </div>
          <div className="chart-division"></div>
          {/* RDV Infomartion */}
          <div className="chart-rdv-container">
            <h1 className="chart-subtitle">Appointments</h1>
            <p>Map Appointments CARD</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientSingleChart;
