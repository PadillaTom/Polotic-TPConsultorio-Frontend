import React from "react";
import PersonCard from "./PersonCard";

const PatientCard = (basicPatients) => {
  const { hasSecurity } = basicPatients;

  return (
    <article className="mobile-card">
      <PersonCard data={basicPatients}></PersonCard>
      <div className="card-row">
        <h2>Has Security</h2>
        <p>{hasSecurity.toString()}</p>
      </div>
    </article>
  );
};

export default PatientCard;
